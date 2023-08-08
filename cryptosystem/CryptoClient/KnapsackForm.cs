using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;



namespace CryptoClient
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
            
            privateKeyInt = kn.generateSuperRisingArray(privateKeyInt, 8);
            string strPrivateKey = string.Join(",", privateKeyInt);
            this.sum = kn.Sum;

            txtPrivateKey.Text = strPrivateKey;
            if(!kn.isArraySuperRising(privateKeyInt, privateKeyInt.Length))
            {
                MessageBox.Show("Array is not super-rising", "Error", MessageBoxButtons.OK);
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
                MessageBox.Show("N can't be 0!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
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
            if(!kn.isArraySuperRising(this.privateKeyInt, this.privateKeyInt.Length))
            {
                MessageBox.Show("Private key is not super-rising array!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (this.n < this.sum)
            {
                MessageBox.Show("N must be greater then SUM of private key!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                return;
            }
            if (this.m < 0)
            {
                MessageBox.Show("M must be greater then 0 and must be coprime with N!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);

                return;
            }
            if (this.privateKeyInt.Length == 8)
            {

                string[] strArray = txtPrivateKey.Text.Split(',');
                this.kn.setIntKeyFromStringArray(strArray, strArray.Length, this.privateKeyInt);

                publicKeyInt = kn.GetPublicKey(privateKeyInt, Convert.ToInt32(txtM.Text), Convert.ToInt32(txtN.Text));
                string strPublicKey = string.Join(",", publicKeyInt);


                lblPublicKey.Text = strPublicKey;
            }
            else
            {
                MessageBox.Show("Private key length must be equal to 8!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

        }

        private void btnDone_Click(object sender, EventArgs e)
        {
            byte[] key = Encoding.Unicode.GetBytes(txtPrivateKey.Text);
            specArguments[strPrivateKey] = key;

            specArguments[strN] = Encoding.Unicode.GetBytes(txtN.Text);
            specArguments[strM] = Encoding.Unicode.GetBytes(txtM.Text);

            this.im = this.kn.GetIM(Convert.ToInt32(txtM.Text), Convert.ToInt32(txtN.Text));
            specArguments[strIM] = Encoding.Unicode.GetBytes(this.im.ToString());

            key = Encoding.Unicode.GetBytes(lblPublicKey.Text);
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
