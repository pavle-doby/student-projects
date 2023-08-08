using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;



namespace MiniCloudService
{
    public partial class KnapsackForm : Form
    {
        const string strPrivateKey = "privateKey";
        const string strPublicKey = "publicKey";
        const string strM = "m";
        const string strN = "n";
        const string strIM = "im";


        IDictionary<string, byte[]> specArguments;

        int[] privateKeyInt;
        int n;
        int m;
        int[] publicKeyInt;
        int im;
        int sum;

        public KnapsackForm()
        {
            InitializeComponent();
            specArguments = new Dictionary<string, byte[]>();
            privateKeyInt = new int[8];
            publicKeyInt = new int[8];

        }
        CryptoLibrary.Knapsack kn;
        public KnapsackForm(CryptoLibrary.Knapsack kns, IDictionary<string, byte[]> knDic)
        {
            InitializeComponent();
            this.kn = kns;
            specArguments = new Dictionary<string, byte[]>();
            specArguments = knDic;

            privateKeyInt = new int[8];
            publicKeyInt = new int[8];

        }

        private void btnGPrivateKey_Click(object sender, EventArgs e)
        {
            //privateKeyInt = new int[] { 2, 3, 7, 14, 30, 57, 120, 251 };
            sum = 0;
            privateKeyInt = kn.generateSuperRisingArray(privateKeyInt, 8);
            //sum = 484;
            string strPrivateKey = string.Join(",", privateKeyInt);

            txtPrivateKey.Text = strPrivateKey;
            if(!kn.isArraySuperRising(privateKeyInt, privateKeyInt.Length))
            {
                MessageBox.Show("Nije super-rastuci", "Error", MessageBoxButtons.OK);
            }
        }


        private void btnGM_Click(object sender, EventArgs e)
        {
            if (txtN.Text == "")
            {
                MessageBox.Show("N must have value!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            int nn = Convert.ToInt32(txtN.Text);

            if (nn == 0)
            {
                MessageBox.Show("N ne sme da bude 0!", "GRESKA", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }

            n = nn;
            m = kn.generateM(nn);

            im = kn.GetIM(m, nn);

            txtM.Text = m.ToString();
            lblIm.Text = im.ToString();

        }

        private void btnGN_Click(object sender, EventArgs e)
        {
            Random rnd = new Random();
            
            n = privateKeyInt[privateKeyInt.Length - 1] * 2 + rnd.Next(1, 7);
            txtN.Text = n.ToString();
        }

        private void btnGPublicKey_Click(object sender, EventArgs e)
        {
            if (this.privateKeyInt.Length == 8 && this.n > this.sum && this.m > 0)
            {

                string[] strArray = txtPrivateKey.Text.Split(',');
                this.kn.setIntKeyFromStringArray(strArray, strArray.Length, this.privateKeyInt);

                publicKeyInt = kn.GetPublicKey(privateKeyInt, Convert.ToInt32(txtM.Text), Convert.ToInt32(txtN.Text));
                string strPublicKey = string.Join(",", publicKeyInt);


                lblPublicKey.Text = strPublicKey;
            }
            else
            {
                MessageBox.Show("Niste uneli dobre parametre!", "GRESKA", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void btnDone_Click(object sender, EventArgs e)
        {
            byte[] key = Encoding.Unicode.GetBytes(txtPrivateKey.Text);
            //specArguments.Add("privateKey", key);
            specArguments[strPrivateKey] = key;

            //specArguments.Add("n", Encoding.Unicode.GetBytes(txtN.Text));
            specArguments[strN] = Encoding.Unicode.GetBytes(txtN.Text);
            //specArguments.Add("m", Encoding.Unicode.GetBytes(txtM.Text));
            specArguments[strM] = Encoding.Unicode.GetBytes(txtM.Text);

            this.im = this.kn.GetIM(Convert.ToInt32(txtM.Text), Convert.ToInt32(txtN.Text));
            //specArguments.Add("im", Encoding.Unicode.GetBytes(this.im.ToString()));
            specArguments[strIM] = Encoding.Unicode.GetBytes(this.im.ToString());

            key = Encoding.Unicode.GetBytes(lblPublicKey.Text);
            //specArguments.Add("publicKey", key);
            specArguments[strPublicKey] = key;

            if (kn.SetAlgorithmProperties(specArguments))
            {
                this.Close();
                this.DialogResult = DialogResult.OK;
            } else
            {
                MessageBox.Show("Not all parameters are good! Maybe is better to use Generate buttons!", "ERROR", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void txtM_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
