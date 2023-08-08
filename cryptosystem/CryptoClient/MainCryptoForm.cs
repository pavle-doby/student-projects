using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using CryptoLibrary;
using MyDirectoryLibrary;

using System.IO;
using System.Security.Permissions;
using System.Threading;

enum cryptoAlg
{
    SimpleSubstitutiom,
    XXTEA,
    Knapsack,
    SHA2,
    PCBCmod,
}

namespace CryptoClient
{
    public partial class MainCryptoForm : Form
    {
        #region String Consts
        const string strSimpleSubstitution = "Simple substitution";
        const string strXXTEA = "XXTEA";
        const string strKnapsack = "Knapsack";
        const string strSHA2 = "SHA2";

        const string strPrivateKey = "privateKey";
        const string strPublicKey = "publicKey";
        const string strM = "m";
        const string strN = "n";
        const string strIM = "im";

        const string fswCloudClient = @"\CloudClient";
        const string fswDestinationConst = @"\fswDestination";
        const string fswSourceConst = @"\fswSource";

        //folder with Info:
        const string fswInfo = @"\fswInfo";
        //files that have list of file names:
        const string infoDecryptedFiles = @"\infoDecryptedFiles.txt";
        const string infoEncryptedFiles = @"\infoEncryptedFiles.txt";
        const string infoProcessedFiles = @"\infoProcessedFiles.txt";
        const string infoAllFiles = @"\infoAllFiles.txt";

        #endregion

        CryptoService.CryptoServiceClient proxy;

        ICryptoLibrary cryptoLib;
        string[] algorithms;

        IDictionary<string, byte[]> specArg;
        IDictionary<string, string> specArgStr;

        bool SHA2Bool;

        MyDirectory dir;

        string fswDstPath;
        string fswInfoPath;

        FileSystemWatcher fsw; //mogla bi singlton arhit.

        List<string> fswAllFiles;
        List<string> fswEncryptedFiles;
        List<string> fswDecryptedFiles;
        List<string> fswInfoAllFiles;

        bool fswCryptBool = true;
        bool fswWork = false;

        string pathThis;

        Queue<byte[]> QBytesBuffer;
        Queue<ICryptoLibrary> QLibraryBuffer;

        bool QBool = true;

        public MainCryptoForm()
        {
            InitializeComponent();
            Init();

        }

        private void Init()
        {
            QBytesBuffer = new Queue<byte[]>();
            QLibraryBuffer = new Queue<ICryptoLibrary>();

            proxy = new CryptoService.CryptoServiceClient();

            algorithms = new string[4] { strSimpleSubstitution, strXXTEA, strKnapsack, strSHA2 };
            cbxAlgorithm.SelectedItem = algorithms[0];
            rdbEncrypt.Checked = true;

            specArg = new Dictionary<string, byte[]>();
            specArgStr = new Dictionary<string, string>();

            SHA2Bool = false;
            txtIV.Enabled = false;

            dir = new MyDirectory();

            pathThis = (string)Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            pathThis += fswCloudClient;

            fsw = new FileSystemWatcher();
            fsw.Path = pathThis + fswSourceConst;
            fswDstPath = pathThis + fswDestinationConst;
            //fswInfoPath = pathThis + fswInfo;
            dir.PathInfo = pathThis + fswInfo;
            dir.PathInfoAllFiles = dir.PathInfo + infoAllFiles;
            dir.PathInfoDecryptedFiles = dir.PathInfo + infoDecryptedFiles;
            dir.PathInfoEncryptedFiles = dir.PathInfo + infoEncryptedFiles;
            dir.PathInfoProcessedFiles = dir.PathInfo + infoProcessedFiles;

            txtSrcPathFSW.Text = fsw.Path;
            txtDstPathFSW.Text = fswDstPath;

            fswAllFiles = new List<string>();
            fswEncryptedFiles = new List<string>();
            fswDecryptedFiles = new List<string>();
            fswInfoAllFiles = File.ReadAllLines(dir.PathInfoAllFiles).ToList();

        }

        [PermissionSet(SecurityAction.Demand, Name = "FullTrust")]
        public void Run()
        {

            fsw.NotifyFilter = NotifyFilters.LastAccess | NotifyFilters.FileName;

            fsw.Filter = "*.*";

            fsw.Created += new FileSystemEventHandler(OnCreated);
            fsw.Deleted += new FileSystemEventHandler(OnDelete);

            fsw.EnableRaisingEvents = true;
        }
        private void OnDelete(object source, FileSystemEventArgs e)
        {
            if (!fswWork)
                return;

            fswAllFiles.Remove(e.Name);

            fswInfoAllFiles.Remove(e.Name);
            //File.WriteAllText(dir.PathInfoAllFiles, null);
            //foreach (string str in fswInfoAllFiles)
            //{
            //    File.AppendAllText(dir.PathInfoAllFiles, str + Environment.NewLine);
            //}
            dir.DeleteLine(dir.PathInfoAllFiles, e.Name);
            if (!fswEncryptedFiles.Remove(e.Name))
                fswDecryptedFiles.Remove(e.Name);
        }
        private void OnChange(object source, FileSystemEventArgs e)
        {

        }
        private void OnCreated(object source, FileSystemEventArgs e)
        {
            if (!fswWork)
                return;

            if(!fswAllFiles.Contains(e.Name))
                fswAllFiles.Add(e.Name);

            if (!fswInfoAllFiles.Contains(e.Name))
            {
                fswInfoAllFiles.Add(e.Name);
                File.AppendAllText(dir.PathInfoAllFiles, e.Name + Environment.NewLine);

            }

            CryptOrDecryptAndSave(fsw.Path, e.Name);
            //CryptOrDecryptWithBuffering(e.Name);

        }

        private void OnRenamed(object source, RenamedEventArgs e)
        {
            //Console.WriteLine("File: {0} renamed to {1}", e.OldFullPath, e.FullPath);
        }
        Queue<string> QNames = new Queue<string>();
        Queue<string> QDstPath = new Queue<string>();
        Queue<bool> QCrypt = new Queue<bool>();
        Thread thread;
        private void CryptOrDecryptWithBuffering(string name)
        {
            if(!fswInfoAllFiles.Contains(name))
                fswInfoAllFiles.Add(name);
            string dstPath = fswDstPath + @"\" + name;
            BufferAll(fsw.Path, name, dstPath, cryptoLib, rdbEncrypt.Checked);
            new Thread(() =>
            {
                Thread.CurrentThread.IsBackground = true;
                CryptOrDecryptThread();
            }).Start();
            //CryptOrDecryptThread();

        }

        private void BufferAll(string srcPath, string name, string dstPath, ICryptoLibrary cl, bool crypt)
        {
            //QBool = false;
            //while (!QBool) { }

            QBytesBuffer.Enqueue(File.ReadAllBytes(srcPath+ "\\" + name));
            QNames.Enqueue(name);
            QDstPath.Enqueue(dstPath);
            QLibraryBuffer.Enqueue(cl);
            QCrypt.Enqueue(crypt);

            //QBool = true;
        }

        private void CryptOrDecryptThread()
        {
            while (QNames.Count > 0)
            {
                bool isReady = proxy.isServiceReady();
                int couter = 0;
                while (!isReady)
                {
                    if(couter == 5)
                    {
                        System.Threading.Thread.Sleep(333);
                        couter = 0;
                    }
                    isReady = proxy.isServiceReady();
                    couter++;
                }
                while (!QBool) { }
                QBool = false;

                bool crypt = QCrypt.Dequeue();
                string name = QNames.Dequeue();
                ICryptoLibrary cl = QLibraryBuffer.Dequeue();
                byte[] bytes = QBytesBuffer.Dequeue();
                string dstP = QDstPath.Dequeue();

                QBool = true;

                if (crypt && !fswEncryptedFiles.Contains(name))
                {
                    setLibrary(cl);
                    bytes = proxy.Crypt(bytes);
                    File.WriteAllBytes(dstP, bytes);

                    fswEncryptedFiles.Add(name);
                    fswDecryptedFiles.Remove(name);
                }
                else
                {
                    setLibrary(cl);
                    bytes = proxy.Decrypt(bytes);
                    File.WriteAllBytes(QDstPath.Dequeue(), bytes);

                    fswDecryptedFiles.Add(name);
                    fswEncryptedFiles.Remove(name);
                }

            }
        }


        private void CryptOrDecryptAndSave(string srcPathToFolder, string name)
        {
            string dstPath = fswDstPath + @"\" + name;
            byte[] fileBytes = new byte[] { 0 };
            try
            {
                fileBytes = File.ReadAllBytes(srcPathToFolder + "\\" + name);
            }
            catch { }
            string fileText = Encoding.Unicode.GetString(fileBytes);

            if (rdbEncrypt.Checked && !fswEncryptedFiles.Contains(name))
            {
                setLibrary(cryptoLib);
                fileBytes = proxy.Crypt(fileBytes);

                if (!proxy.SaveBytes(fileBytes, dstPath))
                    return;

                fswEncryptedFiles.Add(name);
                fswDecryptedFiles.Remove(name);

            }
            else if (rdbDecrypt.Checked && !fswDecryptedFiles.Contains(name))
            {

                fileText = File.ReadAllText(srcPathToFolder + "\\" + name);
                fileBytes = Encoding.Unicode.GetBytes(fileText);
                fileBytes = proxy.Decrypt(fileBytes);


                if (!proxy.SaveBytes(fileBytes, dstPath))
                    return;

                fswDecryptedFiles.Add(name);
                fswEncryptedFiles.Remove(name);

            }
        }

        private void btnCrypt_Click(object sender, EventArgs e)
        {
            if(txtForCrypting.Text == "")
            {
                return;
            }
            if (txtKey.Text != "" &&
                cryptoLib.SetKey(Encoding.Unicode.GetBytes(txtKey.Text.ToCharArray()))
                //proxy.SetKey(Encoding.Unicode.GetBytes(txtKey.Text.ToCharArray()))
                || SHA2Bool)
            {

            }
            else
            {
                MessageBox.Show("Your key is not in good format! We will generate random key for you!", "Information", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                byte[] randomKey = cryptoLib.GenerateRandomKey();
                //byte[] randomKey = proxy.GenerateRandomKey();

                string stringKey = Encoding.Unicode.GetString(randomKey);
                txtKey.Text = stringKey;
            }
            if (chbxPCBCmod.Checked)
            {
                byte[] IVbytes;
                string strIV;
                if (txtIV.Text != "")
                {
                    string[] strArr = txtIV.Text.Split(',');
                    strIV = string.Join("", strArr);
                    IVbytes = Encoding.Unicode.GetBytes(strIV);

                    cryptoLib.SetIV(IVbytes);
                    //proxy.SetIV(IVbytes);


                }
                else
                {
                    IVbytes = cryptoLib.GenerateRandomIV();
                    //IVbytes = proxy.GenerateRandomIV();


                    txtIV.Text = Encoding.Unicode.GetString(IVbytes);
                }
            }
            byte[] bytesForCrypting = Encoding.Unicode.GetBytes(txtForCrypting.Text);
            //byte[] cryptedBytes = cryptoLib.Crypt(bytesForCrypting);

            setLibrary(cryptoLib);
            byte[] cryptedBytes = proxy.Crypt(bytesForCrypting);
            string cryptedStr = Encoding.Unicode.GetString(cryptedBytes);
            
            txtForDecrypting.Text = cryptedStr;

        }
        private bool setLibrary(ICryptoLibrary lib)
        {
            if (lib is SimpleSubstitution)
                proxy.SetCryptoLibrarySimpleSubstitution((SimpleSubstitution)lib);
            else if (lib is Knapsack)
                proxy.SetCryptoLibraryKnapsack((Knapsack)lib);
            else if (lib is XXTEA)
                proxy.SetCryptoLibraryXXTEA((XXTEA)lib);
            else if (lib is SHA2)
                proxy.SetCryptoLibrarySHA2((SHA2)lib);
            else
                return false;
            return true;
        }
        private byte[] getRadnomBytes(int length)
        {
            Random rnd = new Random();
            byte[] bytes = new byte[length];
            rnd.NextBytes(bytes);
            return bytes;
        }
        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnDecrypt_Click(object sender, EventArgs e)
        {
            
            if (txtKey.Text != "" &&
                cryptoLib.SetKey(Encoding.Unicode.GetBytes(txtKey.Text))
                //proxy.SetKey(Encoding.Unicode.GetBytes(txtKey.Text))
                || SHA2Bool)
            {
                if (chbxPCBCmod.Checked)
                {
                    byte[] IVbytes;
                    string strIV;
                    if (txtIV.Text != "")
                    {
                        string[] strArr = txtIV.Text.Split(',');
                        strIV = string.Join("", strArr);
                        IVbytes = Encoding.Unicode.GetBytes(strIV);

                        cryptoLib.SetIV(IVbytes);
                        //proxy.SetIV(IVbytes);

                    }
                    else
                    {
                        MessageBox.Show("You must enter IV!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

                        IVbytes = cryptoLib.GenerateRandomIV();
                        //IVbytes = proxy.GenerateRandomIV();
                        txtIV.Text = Encoding.Unicode.GetString(IVbytes);
                    }
                }
                byte[] bytesForDecrypting = Encoding.Unicode.GetBytes(txtForDecrypting.Text);
                //byte[] decryptedBytes = cryptoLib.Decrypt(bytesForDecrypting);
                setLibrary(cryptoLib);
                byte[] decryptedBytes = proxy.Decrypt(bytesForDecrypting);
                txtForCrypting.Text = Encoding.Unicode.GetString(decryptedBytes);
            }
            else
            {
                MessageBox.Show("Your key is not in good format!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void cbxAlgorithm_SelectedIndexChanged(object sender, EventArgs e)
        {
            SHA2Bool = false;
            if (cbxAlgorithm.Text == algorithms[(int)cryptoAlg.SimpleSubstitutiom])
            {
                cryptoLib = new SimpleSubstitution();
                proxy.SetCryptoLibrarySimpleSubstitution(new SimpleSubstitution());
                SHA256RedudantControlsEnable(true);
                byte[] rndKey = proxy.GenerateRandomKey();

                txtKey.Text = Encoding.Unicode.GetString(rndKey);
            }

            else if (cbxAlgorithm.Text == algorithms[(int)cryptoAlg.XXTEA])
            {
                cryptoLib = new XXTEA();
                proxy.SetCryptoLibraryXXTEA(new XXTEA());
                SHA256RedudantControlsEnable(true);

                byte[] rndKey = proxy.GenerateRandomKey();
                txtKey.Text = Encoding.Unicode.GetString(rndKey);

            }

            else if (cbxAlgorithm.Text == algorithms[(int)cryptoAlg.Knapsack])
            {
                cryptoLib = new Knapsack();

                SHA256RedudantControlsEnable(true);

                txtKey.Enabled = false;

                var formKnapsack = new KnapsackForm((Knapsack)cryptoLib, specArg);
                DialogResult dg = formKnapsack.ShowDialog();
                if(dg == DialogResult.OK)
                {
                    txtKey.Text = Encoding.Unicode.GetString(specArg[strPublicKey], 0, specArg[strPublicKey].Length);

                    CopyFromSpecArgToSpecArgStr(specArg, specArgStr);

                    dgvSpecArgumets.DataSource = specArgStr.ToArray();
                    dgvSpecArgumets.Columns[1].Width = 300;
                }
                proxy.SetCryptoLibraryKnapsack((Knapsack)cryptoLib);

            }
            else //(cbxAlgorithm.Text == algorithms[3])
            {
                cryptoLib = new SHA2();
                proxy.SetCryptoLibrarySHA2(new SHA2());
                byte[] rndKey = proxy.GenerateRandomKey();
                txtKey.Text = Encoding.Unicode.GetString(rndKey);
                SHA256RedudantControlsEnable(false);
                SHA2Bool = true;
            }

        }
        void CopyFromSpecArgToSpecArgStr(IDictionary<string, byte[]> specArg, IDictionary<string, string> specArgStr)
        {
            foreach(KeyValuePair<string, byte[]> arg in specArg)
            {
                specArgStr[arg.Key] = Encoding.Unicode.GetString(arg.Value, 0, arg.Value.Length);
            }
        }
        void SHA256RedudantControlsEnable(bool b)
        {
            txtKey.Enabled = b;
            btnDecrypt.Enabled = b;
        }

        private void chbxPCBCmod_CheckedChanged(object sender, EventArgs e)
        {
            txtIV.Enabled = txtIV.Enabled ? false : true ;
        }

        private void chbxFSW_CheckedChanged(object sender, EventArgs e)
        {
            if (chbxFSW.Checked)
            {
                Run();
                fswWork = true;

                fswAllFiles = dir.GetAllNamesOfFiles(fsw.Path).ToList();

                foreach (string name in fswAllFiles)
                {
                    if (!fswInfoAllFiles.Contains(name))
                    {
                        File.AppendAllText(dir.PathInfoAllFiles, name + Environment.NewLine);
                        fswInfoAllFiles.Add(name);
                        CryptOrDecryptAndSave(fsw.Path, name);
                        //CryptOrDecryptWithBuffering(name);
                    }
                }
                
            }
            else
                fsw.EnableRaisingEvents = false;

        }

        private void dgvSpecArgumets_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void MainCryptoForm_Load(object sender, EventArgs e)
        {

        }

        private void btnChangeSrcPath_Click(object sender, EventArgs e)
        {
            if (Directory.Exists(txtSrcPathFSW.Text))
            {
                fsw.Path = @txtSrcPathFSW.Text;
            }
            else
            {
                MessageBox.Show("INVALID SOURCE PATH!!!", "ERROR", MessageBoxButtons.OK, MessageBoxIcon.Error);

            }
        }

        private void btnChangeDstPath_Click(object sender, EventArgs e)
        {
            if (Directory.Exists(txtDstPathFSW.Text))
            {
                fswDstPath = @txtDstPathFSW.Text;
            }
            else
            {
                MessageBox.Show("INVALID DESTINATION PATH!!!", "ERROR", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
