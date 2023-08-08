namespace CryptoClient
{
    partial class MainCryptoForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.txtForCrypting = new System.Windows.Forms.TextBox();
            this.dataSet1 = new System.Data.DataSet();
            this.txtForDecrypting = new System.Windows.Forms.TextBox();
            this.btnCrypt = new System.Windows.Forms.Button();
            this.btnDecrypt = new System.Windows.Forms.Button();
            this.txtKey = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.cbxAlgorithm = new System.Windows.Forms.ComboBox();
            this.chbxPCBCmod = new System.Windows.Forms.CheckBox();
            this.label2 = new System.Windows.Forms.Label();
            this.dgvSpecArgumets = new System.Windows.Forms.DataGridView();
            this.label5 = new System.Windows.Forms.Label();
            this.txtIV = new System.Windows.Forms.TextBox();
            this.label6 = new System.Windows.Forms.Label();
            this.chbxFSW = new System.Windows.Forms.CheckBox();
            this.txtSrcPathFSW = new System.Windows.Forms.TextBox();
            this.label8 = new System.Windows.Forms.Label();
            this.rdbEncrypt = new System.Windows.Forms.RadioButton();
            this.rdbDecrypt = new System.Windows.Forms.RadioButton();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btnChangeDstPath = new System.Windows.Forms.Button();
            this.label7 = new System.Windows.Forms.Label();
            this.txtDstPathFSW = new System.Windows.Forms.TextBox();
            this.btnChangeSrcPath = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgvSpecArgumets)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // txtForCrypting
            // 
            this.txtForCrypting.Location = new System.Drawing.Point(2, 356);
            this.txtForCrypting.Multiline = true;
            this.txtForCrypting.Name = "txtForCrypting";
            this.txtForCrypting.Size = new System.Drawing.Size(633, 418);
            this.txtForCrypting.TabIndex = 2;
            // 
            // dataSet1
            // 
            this.dataSet1.DataSetName = "NewDataSet";
            // 
            // txtForDecrypting
            // 
            this.txtForDecrypting.Location = new System.Drawing.Point(655, 356);
            this.txtForDecrypting.Multiline = true;
            this.txtForDecrypting.Name = "txtForDecrypting";
            this.txtForDecrypting.Size = new System.Drawing.Size(633, 418);
            this.txtForDecrypting.TabIndex = 3;
            // 
            // btnCrypt
            // 
            this.btnCrypt.Location = new System.Drawing.Point(205, 300);
            this.btnCrypt.Name = "btnCrypt";
            this.btnCrypt.Size = new System.Drawing.Size(184, 50);
            this.btnCrypt.TabIndex = 4;
            this.btnCrypt.Text = "CRYPT";
            this.btnCrypt.UseVisualStyleBackColor = true;
            this.btnCrypt.Click += new System.EventHandler(this.btnCrypt_Click);
            // 
            // btnDecrypt
            // 
            this.btnDecrypt.Location = new System.Drawing.Point(465, 300);
            this.btnDecrypt.Name = "btnDecrypt";
            this.btnDecrypt.Size = new System.Drawing.Size(170, 50);
            this.btnDecrypt.TabIndex = 5;
            this.btnDecrypt.Text = "DECRYPT";
            this.btnDecrypt.UseVisualStyleBackColor = true;
            this.btnDecrypt.Click += new System.EventHandler(this.btnDecrypt_Click);
            // 
            // txtKey
            // 
            this.txtKey.Location = new System.Drawing.Point(215, 40);
            this.txtKey.Name = "txtKey";
            this.txtKey.Size = new System.Drawing.Size(430, 22);
            this.txtKey.TabIndex = 6;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(240, 12);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(70, 16);
            this.label1.TabIndex = 8;
            this.label1.Text = "Public key";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(5, 334);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(102, 16);
            this.label3.TabIndex = 10;
            this.label3.Text = "Text for crypting";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(655, 334);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(118, 16);
            this.label4.TabIndex = 11;
            this.label4.Text = "Text for decrypting";
            // 
            // cbxAlgorithm
            // 
            this.cbxAlgorithm.FormattingEnabled = true;
            this.cbxAlgorithm.Items.AddRange(new object[] {
            "Simple substitution",
            "XXTEA",
            "Knapsack",
            "SHA2"});
            this.cbxAlgorithm.Location = new System.Drawing.Point(15, 38);
            this.cbxAlgorithm.Name = "cbxAlgorithm";
            this.cbxAlgorithm.Size = new System.Drawing.Size(193, 24);
            this.cbxAlgorithm.TabIndex = 12;
            this.cbxAlgorithm.SelectedIndexChanged += new System.EventHandler(this.cbxAlgorithm_SelectedIndexChanged);
            // 
            // chbxPCBCmod
            // 
            this.chbxPCBCmod.AutoSize = true;
            this.chbxPCBCmod.Location = new System.Drawing.Point(18, 113);
            this.chbxPCBCmod.Name = "chbxPCBCmod";
            this.chbxPCBCmod.Size = new System.Drawing.Size(96, 20);
            this.chbxPCBCmod.TabIndex = 13;
            this.chbxPCBCmod.Text = "PCBC mod";
            this.chbxPCBCmod.UseVisualStyleBackColor = true;
            this.chbxPCBCmod.CheckedChanged += new System.EventHandler(this.chbxPCBCmod_CheckedChanged);
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(15, 12);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(64, 16);
            this.label2.TabIndex = 14;
            this.label2.Text = "Algorithm";
            // 
            // dgvSpecArgumets
            // 
            this.dgvSpecArgumets.BackgroundColor = System.Drawing.Color.White;
            this.dgvSpecArgumets.Location = new System.Drawing.Point(665, 38);
            this.dgvSpecArgumets.Name = "dgvSpecArgumets";
            this.dgvSpecArgumets.RowTemplate.Height = 24;
            this.dgvSpecArgumets.Size = new System.Drawing.Size(623, 223);
            this.dgvSpecArgumets.TabIndex = 25;
            this.dgvSpecArgumets.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgvSpecArgumets_CellContentClick);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.label5.Location = new System.Drawing.Point(665, 13);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(180, 16);
            this.label5.TabIndex = 26;
            this.label5.Text = "Algorithm Special Arguments";
            // 
            // txtIV
            // 
            this.txtIV.Location = new System.Drawing.Point(15, 159);
            this.txtIV.Name = "txtIV";
            this.txtIV.Size = new System.Drawing.Size(193, 22);
            this.txtIV.TabIndex = 27;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(16, 140);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(141, 16);
            this.label6.TabIndex = 28;
            this.label6.Text = "Initialization Vector (IV)";
            // 
            // chbxFSW
            // 
            this.chbxFSW.AutoSize = true;
            this.chbxFSW.Location = new System.Drawing.Point(6, 19);
            this.chbxFSW.Name = "chbxFSW";
            this.chbxFSW.Size = new System.Drawing.Size(153, 20);
            this.chbxFSW.TabIndex = 29;
            this.chbxFSW.Text = "File System Watcher";
            this.chbxFSW.UseVisualStyleBackColor = true;
            this.chbxFSW.CheckedChanged += new System.EventHandler(this.chbxFSW_CheckedChanged);
            // 
            // txtSrcPathFSW
            // 
            this.txtSrcPathFSW.Location = new System.Drawing.Point(215, 159);
            this.txtSrcPathFSW.Name = "txtSrcPathFSW";
            this.txtSrcPathFSW.Size = new System.Drawing.Size(414, 22);
            this.txtSrcPathFSW.TabIndex = 32;
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Location = new System.Drawing.Point(215, 136);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(80, 16);
            this.label8.TabIndex = 33;
            this.label8.Text = "Source path";
            // 
            // rdbEncrypt
            // 
            this.rdbEncrypt.AutoSize = true;
            this.rdbEncrypt.Location = new System.Drawing.Point(191, 19);
            this.rdbEncrypt.Name = "rdbEncrypt";
            this.rdbEncrypt.Size = new System.Drawing.Size(74, 20);
            this.rdbEncrypt.TabIndex = 34;
            this.rdbEncrypt.TabStop = true;
            this.rdbEncrypt.Text = "Encrypt";
            this.rdbEncrypt.UseVisualStyleBackColor = true;
            // 
            // rdbDecrypt
            // 
            this.rdbDecrypt.AutoSize = true;
            this.rdbDecrypt.Location = new System.Drawing.Point(296, 21);
            this.rdbDecrypt.Name = "rdbDecrypt";
            this.rdbDecrypt.Size = new System.Drawing.Size(76, 20);
            this.rdbDecrypt.TabIndex = 35;
            this.rdbDecrypt.TabStop = true;
            this.rdbDecrypt.Text = "Decrypt";
            this.rdbDecrypt.UseVisualStyleBackColor = true;
            // 
            // groupBox1
            // 
            this.groupBox1.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.groupBox1.Controls.Add(this.rdbEncrypt);
            this.groupBox1.Controls.Add(this.rdbDecrypt);
            this.groupBox1.Controls.Add(this.chbxFSW);
            this.groupBox1.Location = new System.Drawing.Point(215, 68);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(430, 51);
            this.groupBox1.TabIndex = 36;
            this.groupBox1.TabStop = false;
            // 
            // btnChangeDstPath
            // 
            this.btnChangeDstPath.Location = new System.Drawing.Point(325, 184);
            this.btnChangeDstPath.Name = "btnChangeDstPath";
            this.btnChangeDstPath.Size = new System.Drawing.Size(127, 30);
            this.btnChangeDstPath.TabIndex = 39;
            this.btnChangeDstPath.Text = "Change path";
            this.btnChangeDstPath.UseVisualStyleBackColor = true;
            this.btnChangeDstPath.Click += new System.EventHandler(this.btnChangeDstPath_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(218, 198);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(104, 16);
            this.label7.TabIndex = 38;
            this.label7.Text = "Destination path";
            // 
            // txtDstPathFSW
            // 
            this.txtDstPathFSW.Location = new System.Drawing.Point(215, 220);
            this.txtDstPathFSW.Name = "txtDstPathFSW";
            this.txtDstPathFSW.Size = new System.Drawing.Size(414, 22);
            this.txtDstPathFSW.TabIndex = 37;
            // 
            // btnChangeSrcPath
            // 
            this.btnChangeSrcPath.Location = new System.Drawing.Point(325, 129);
            this.btnChangeSrcPath.Name = "btnChangeSrcPath";
            this.btnChangeSrcPath.Size = new System.Drawing.Size(127, 30);
            this.btnChangeSrcPath.TabIndex = 36;
            this.btnChangeSrcPath.Text = "Change path";
            this.btnChangeSrcPath.UseVisualStyleBackColor = true;
            this.btnChangeSrcPath.Click += new System.EventHandler(this.btnChangeSrcPath_Click);
            // 
            // MainCryptoForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.BackgroundImage = global::CryptoClient.Properties.Resources.withe2;
            this.ClientSize = new System.Drawing.Size(1302, 889);
            this.Controls.Add(this.btnChangeDstPath);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.txtDstPathFSW);
            this.Controls.Add(this.txtIV);
            this.Controls.Add(this.btnChangeSrcPath);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.dgvSpecArgumets);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.txtSrcPathFSW);
            this.Controls.Add(this.chbxPCBCmod);
            this.Controls.Add(this.cbxAlgorithm);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtKey);
            this.Controls.Add(this.btnDecrypt);
            this.Controls.Add(this.btnCrypt);
            this.Controls.Add(this.txtForDecrypting);
            this.Controls.Add(this.txtForCrypting);
            this.ForeColor = System.Drawing.SystemColors.ActiveCaptionText;
            this.Name = "MainCryptoForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "CryptoSystem";
            this.Load += new System.EventHandler(this.MainCryptoForm_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataSet1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.dgvSpecArgumets)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox txtForCrypting;
        private System.Data.DataSet dataSet1;
        private System.Windows.Forms.TextBox txtForDecrypting;
        private System.Windows.Forms.Button btnCrypt;
        private System.Windows.Forms.Button btnDecrypt;
        private System.Windows.Forms.TextBox txtKey;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox cbxAlgorithm;
        private System.Windows.Forms.CheckBox chbxPCBCmod;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.DataGridView dgvSpecArgumets;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.TextBox txtIV;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.CheckBox chbxFSW;
        private System.Windows.Forms.TextBox txtSrcPathFSW;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.RadioButton rdbEncrypt;
        private System.Windows.Forms.RadioButton rdbDecrypt;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btnChangeSrcPath;
        private System.Windows.Forms.Button btnChangeDstPath;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.TextBox txtDstPathFSW;
    }
}

