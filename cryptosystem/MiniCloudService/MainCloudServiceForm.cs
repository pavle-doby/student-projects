using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using MyDirectoryLibrary;
using CryptoLibrary;

enum cryptoAlg
{
    SimpleSubstitutiom,
    XXTEA,
    Knapsack,
    SHA2,
    PCBCmod,
}

namespace MiniCloudService
{
    public partial class MainCloudServiceForm : Form
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

        const string CloudService = @"\CloudService";

        const string fswDestinationConst = @"\fswDestination";
        const string fswSourceConst = @"\fswSource";

        #endregion

        MyDirectory dir;

        CryptoService.CryptoServiceClient proxy;

        ICryptoLibrary cryptoLib;
        string[] algorithms;

        IDictionary<string, byte[]> specArg;
        IDictionary<string, string> specArgStr;

        bool SHA2Bool;

        string fswPath;

        string fswDstPath;

        FileSystemWatcher fsw; //mogla bi singlton arhit.

        List<string> fswAllFiles;
        List<string> fswEncryptedFiles;
        List<string> fswDecryptedFiles;

        bool fswCryptBool = true;
        bool fswWork = false;

        string pathThis;

        public MainCloudServiceForm()
        {
            InitializeComponent();
            InitCrypto();


            dir = new MyDirectory();
            btnDelete.Enabled = false;
            btnPut.Enabled = false;

            pathThis = (string)Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            pathThis += CloudService;


            dir.Path = pathThis;
            txtPath.Text = dir.Path;

        }

        private void InitCrypto()
        {
            proxy = new CryptoService.CryptoServiceClient();

            algorithms = new string[4] { strSimpleSubstitution, strXXTEA, strKnapsack, strSHA2 };
            cbxAlgorithm.SelectedItem = algorithms[0];

            specArg = new Dictionary<string, byte[]>();
            specArgStr = new Dictionary<string, string>();

            SHA2Bool = false;

            dir = new MyDirectory();

            pathThis = (string)Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            pathThis += CloudService;

            fsw = new FileSystemWatcher();
            fsw.Path = pathThis;
            fswDstPath = pathThis;


            fswAllFiles = new List<string>();
            fswEncryptedFiles = new List<string>();
            fswDecryptedFiles = new List<string>();
        }


        private void btnGet_Click(object sender, EventArgs e)
        {
            btnDelete.Enabled = true;
            btnPut.Enabled = true;

            lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();

            txtPath.Text = dir.Path;
        }

        private void btnPost_Click(object sender, EventArgs e)
        {
            if (ofd.ShowDialog() == DialogResult.OK)
            {
                string text = File.ReadAllText(ofd.FileName);
                string name = ofd.SafeFileName;

                dir.PostTextInFile(name, text);

                txtFileName.Text = name;
                txtFile.Text = text;

                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
                lbxFiles.SelectedItem = name;
            }
        }

        private void btnPut_Click(object sender, EventArgs e)
        {
            string fileName = txtFileName.Text;
            if (fileName != "" && dir.PutTextInFile(txtFileName.Text, txtFile.Text))
            {
                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();

                lbxFiles.SelectedItem = fileName;
            }
            else
            {
                MessageBox.Show("PUT FAIL!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            string fileName = lbxFiles.SelectedItem.ToString();
            if (MessageBox.Show("Do you want to DELETE " + fileName + "?", "Question", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                dir.DeleteFile(fileName);

                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
            }
        }

        private void btnCrypt_Click(object sender, EventArgs e)
        {
            if (txtKey.Text != "" &&
                proxy.SetKey(Encoding.Unicode.GetBytes(txtKey.Text.ToCharArray()))
                || SHA2Bool)
            {

            }
            else
            {
                MessageBox.Show("Your key is not in good format! We will generate random key for you!", "Information", MessageBoxButtons.OK, MessageBoxIcon.Asterisk);
                byte[] randomKey = proxy.GenerateRandomKey();

                string stringKey = Encoding.Unicode.GetString(randomKey);
                txtKey.Text = stringKey;
            }
            byte[] bytesForCrypting = Encoding.Unicode.GetBytes(txtFile.Text);
            byte[] cryptedBytes = proxy.Crypt(bytesForCrypting);
            string cryptedStr = Encoding.Unicode.GetString(cryptedBytes);

            txtFile.Text = cryptedStr;

        }

        private void btnDecrypt_Click(object sender, EventArgs e)
        {

            if (txtKey.Text != "" &&
                proxy.SetKey(Encoding.Unicode.GetBytes(txtKey.Text))
                || SHA2Bool)
            {

                byte[] bytesForDecrypting = Encoding.Unicode.GetBytes(txtFile.Text);
                byte[] decryptedBytes = proxy.Decrypt(bytesForDecrypting);
                txtFile.Text = Encoding.Unicode.GetString(decryptedBytes);
            }
            else
            {
                MessageBox.Show("Your key is not in good format!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void btnChange_Click(object sender, EventArgs e)
        {
            if (Directory.Exists(txtPath.Text))
            {
                dir.Path = txtPath.Text;

                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
            }
            else
            {
                MessageBox.Show("Path is not correct!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void cbxAlgorithm_SelectedIndexChanged(object sender, EventArgs e)
        {
            SHA2Bool = false;
            if (cbxAlgorithm.Text == algorithms[(int)cryptoAlg.SimpleSubstitutiom])
            {

                proxy.SetCryptoLibrarySimpleSubstitution(new SimpleSubstitution());

                SHA256RedudantControlsEnable(true);
                byte[] rndKey = proxy.GenerateRandomKey();

                txtKey.Text = Encoding.Unicode.GetString(rndKey);
            }

            else if (cbxAlgorithm.Text == algorithms[(int)cryptoAlg.XXTEA])
            {
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
                if (dg == DialogResult.OK)
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
                proxy.SetCryptoLibrarySHA2(new SHA2());
                byte[] rndKey = proxy.GenerateRandomKey();
                txtKey.Text = Encoding.Unicode.GetString(rndKey);
                SHA256RedudantControlsEnable(false);
                SHA2Bool = true;
            }
        }
        void SHA256RedudantControlsEnable(bool b)
        {
            txtKey.Enabled = b;
            btnDecrypt.Enabled = b;
        }
        void CopyFromSpecArgToSpecArgStr(IDictionary<string, byte[]> specArg, IDictionary<string, string> specArgStr)
        {
            foreach (KeyValuePair<string, byte[]> arg in specArg)
            {
                specArgStr[arg.Key] = Encoding.Unicode.GetString(arg.Value, 0, arg.Value.Length);
            }
        }

        private void lbxFiles_DoubleClick(object sender, EventArgs e)
        {
            string fileName = lbxFiles.SelectedItem.ToString();
            txtFile.Text = dir.GetTextFromFile(fileName);
            txtFileName.Text = fileName;
        }

        private void btnDownload_Click(object sender, EventArgs e)
        {
            if(sfd.ShowDialog() == DialogResult.OK)
            {
                using (Stream s = File.Open(sfd.FileName, FileMode.Create))
                using (StreamWriter sw = new StreamWriter(s))
                {
                    sw.Write(txtFile.Text);
                }
            }
        }
    }
}