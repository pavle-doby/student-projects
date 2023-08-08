namespace MiniCloudService
{
    partial class MainCloudServiceForm
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
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.btnChange = new System.Windows.Forms.Button();
            this.txtPath = new System.Windows.Forms.TextBox();
            this.txtFileName = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.txtFile = new System.Windows.Forms.TextBox();
            this.lbxFiles = new System.Windows.Forms.ListBox();
            this.btnDelete = new System.Windows.Forms.Button();
            this.btnPut = new System.Windows.Forms.Button();
            this.btnPost = new System.Windows.Forms.Button();
            this.btnGet = new System.Windows.Forms.Button();
            this.btnCrypt = new System.Windows.Forms.Button();
            this.btnDecrypt = new System.Windows.Forms.Button();
            this.label5 = new System.Windows.Forms.Label();
            this.cbxAlgorithm = new System.Windows.Forms.ComboBox();
            this.label6 = new System.Windows.Forms.Label();
            this.txtKey = new System.Windows.Forms.TextBox();
            this.label7 = new System.Windows.Forms.Label();
            this.dgvSpecArgumets = new System.Windows.Forms.DataGridView();
            this.ofd = new System.Windows.Forms.OpenFileDialog();
            this.btnDownload = new System.Windows.Forms.Button();
            this.sfd = new System.Windows.Forms.SaveFileDialog();
            ((System.ComponentModel.ISupportInitialize)(this.dgvSpecArgumets)).BeginInit();
            this.SuspendLayout();
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(-113, 153);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(67, 16);
            this.label2.TabIndex = 20;
            this.label2.Text = "File name";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(-113, -96);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(108, 16);
            this.label1.TabIndex = 19;
            this.label1.Text = "All names of files";
            // 
            // btnChange
            // 
            this.btnChange.Location = new System.Drawing.Point(584, 151);
            this.btnChange.Name = "btnChange";
            this.btnChange.Size = new System.Drawing.Size(117, 36);
            this.btnChange.TabIndex = 34;
            this.btnChange.Text = "CHANGE";
            this.btnChange.UseVisualStyleBackColor = true;
            this.btnChange.Click += new System.EventHandler(this.btnChange_Click);
            // 
            // txtPath
            // 
            this.txtPath.Location = new System.Drawing.Point(182, 155);
            this.txtPath.Name = "txtPath";
            this.txtPath.Size = new System.Drawing.Size(396, 22);
            this.txtPath.TabIndex = 33;
            // 
            // txtFileName
            // 
            this.txtFileName.Location = new System.Drawing.Point(141, 404);
            this.txtFileName.Name = "txtFileName";
            this.txtFileName.Size = new System.Drawing.Size(225, 22);
            this.txtFileName.TabIndex = 32;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(68, 410);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(67, 16);
            this.label3.TabIndex = 31;
            this.label3.Text = "File name";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(68, 161);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(108, 16);
            this.label4.TabIndex = 30;
            this.label4.Text = "All names of files";
            // 
            // txtFile
            // 
            this.txtFile.Location = new System.Drawing.Point(71, 440);
            this.txtFile.Multiline = true;
            this.txtFile.Name = "txtFile";
            this.txtFile.Size = new System.Drawing.Size(630, 209);
            this.txtFile.TabIndex = 29;
            // 
            // lbxFiles
            // 
            this.lbxFiles.FormattingEnabled = true;
            this.lbxFiles.ItemHeight = 16;
            this.lbxFiles.Location = new System.Drawing.Point(71, 193);
            this.lbxFiles.Name = "lbxFiles";
            this.lbxFiles.Size = new System.Drawing.Size(630, 132);
            this.lbxFiles.TabIndex = 28;
            this.lbxFiles.DoubleClick += new System.EventHandler(this.lbxFiles_DoubleClick);
            // 
            // btnDelete
            // 
            this.btnDelete.Location = new System.Drawing.Point(584, 345);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(117, 36);
            this.btnDelete.TabIndex = 27;
            this.btnDelete.Text = "DELETE";
            this.btnDelete.UseVisualStyleBackColor = true;
            this.btnDelete.Click += new System.EventHandler(this.btnDelete_Click);
            // 
            // btnPut
            // 
            this.btnPut.Location = new System.Drawing.Point(418, 345);
            this.btnPut.Name = "btnPut";
            this.btnPut.Size = new System.Drawing.Size(117, 36);
            this.btnPut.TabIndex = 26;
            this.btnPut.Text = "PUT";
            this.btnPut.UseVisualStyleBackColor = true;
            this.btnPut.Click += new System.EventHandler(this.btnPut_Click);
            // 
            // btnPost
            // 
            this.btnPost.Location = new System.Drawing.Point(249, 345);
            this.btnPost.Name = "btnPost";
            this.btnPost.Size = new System.Drawing.Size(117, 36);
            this.btnPost.TabIndex = 25;
            this.btnPost.Text = "POST";
            this.btnPost.UseVisualStyleBackColor = true;
            this.btnPost.Click += new System.EventHandler(this.btnPost_Click);
            // 
            // btnGet
            // 
            this.btnGet.Location = new System.Drawing.Point(71, 345);
            this.btnGet.Name = "btnGet";
            this.btnGet.Size = new System.Drawing.Size(117, 36);
            this.btnGet.TabIndex = 24;
            this.btnGet.Text = "GET";
            this.btnGet.UseVisualStyleBackColor = true;
            this.btnGet.Click += new System.EventHandler(this.btnGet_Click);
            // 
            // btnCrypt
            // 
            this.btnCrypt.Location = new System.Drawing.Point(418, 390);
            this.btnCrypt.Name = "btnCrypt";
            this.btnCrypt.Size = new System.Drawing.Size(117, 36);
            this.btnCrypt.TabIndex = 35;
            this.btnCrypt.Text = "CRYPT";
            this.btnCrypt.UseVisualStyleBackColor = true;
            this.btnCrypt.Click += new System.EventHandler(this.btnCrypt_Click);
            // 
            // btnDecrypt
            // 
            this.btnDecrypt.Location = new System.Drawing.Point(584, 390);
            this.btnDecrypt.Name = "btnDecrypt";
            this.btnDecrypt.Size = new System.Drawing.Size(117, 36);
            this.btnDecrypt.TabIndex = 36;
            this.btnDecrypt.Text = "DECRYPT";
            this.btnDecrypt.UseVisualStyleBackColor = true;
            this.btnDecrypt.Click += new System.EventHandler(this.btnDecrypt_Click);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(68, 1);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(64, 16);
            this.label5.TabIndex = 40;
            this.label5.Text = "Algorithm";
            // 
            // cbxAlgorithm
            // 
            this.cbxAlgorithm.FormattingEnabled = true;
            this.cbxAlgorithm.Items.AddRange(new object[] {
            "Simple substitution",
            "XXTEA",
            "Knapsack",
            "SHA2"});
            this.cbxAlgorithm.Location = new System.Drawing.Point(68, 27);
            this.cbxAlgorithm.Name = "cbxAlgorithm";
            this.cbxAlgorithm.Size = new System.Drawing.Size(193, 24);
            this.cbxAlgorithm.TabIndex = 39;
            this.cbxAlgorithm.SelectedIndexChanged += new System.EventHandler(this.cbxAlgorithm_SelectedIndexChanged);
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(293, 1);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(70, 16);
            this.label6.TabIndex = 38;
            this.label6.Text = "Public key";
            // 
            // txtKey
            // 
            this.txtKey.Location = new System.Drawing.Point(268, 29);
            this.txtKey.Name = "txtKey";
            this.txtKey.Size = new System.Drawing.Size(430, 22);
            this.txtKey.TabIndex = 37;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(68, 58);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(180, 16);
            this.label7.TabIndex = 42;
            this.label7.Text = "Algorithm Special Arguments";
            // 
            // dgvSpecArgumets
            // 
            this.dgvSpecArgumets.BackgroundColor = System.Drawing.Color.White;
            this.dgvSpecArgumets.Location = new System.Drawing.Point(68, 77);
            this.dgvSpecArgumets.Name = "dgvSpecArgumets";
            this.dgvSpecArgumets.RowTemplate.Height = 24;
            this.dgvSpecArgumets.Size = new System.Drawing.Size(630, 58);
            this.dgvSpecArgumets.TabIndex = 41;
            // 
            // ofd
            // 
            this.ofd.FileName = "ofd";
            // 
            // btnDownload
            // 
            this.btnDownload.Location = new System.Drawing.Point(584, 655);
            this.btnDownload.Name = "btnDownload";
            this.btnDownload.Size = new System.Drawing.Size(117, 36);
            this.btnDownload.TabIndex = 43;
            this.btnDownload.Text = "DOWNLOAD";
            this.btnDownload.UseVisualStyleBackColor = true;
            this.btnDownload.Click += new System.EventHandler(this.btnDownload_Click);
            // 
            // MainCloudServiceForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.BackgroundImage = global::MiniCloudService.Properties.Resources.cloudwithe;
            this.ClientSize = new System.Drawing.Size(751, 737);
            this.Controls.Add(this.btnDownload);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.dgvSpecArgumets);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.cbxAlgorithm);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.txtKey);
            this.Controls.Add(this.btnDecrypt);
            this.Controls.Add(this.btnCrypt);
            this.Controls.Add(this.btnChange);
            this.Controls.Add(this.txtPath);
            this.Controls.Add(this.txtFileName);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.txtFile);
            this.Controls.Add(this.lbxFiles);
            this.Controls.Add(this.btnDelete);
            this.Controls.Add(this.btnPut);
            this.Controls.Add(this.btnPost);
            this.Controls.Add(this.btnGet);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Name = "MainCloudServiceForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.dgvSpecArgumets)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnChange;
        private System.Windows.Forms.TextBox txtPath;
        private System.Windows.Forms.TextBox txtFileName;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox txtFile;
        private System.Windows.Forms.ListBox lbxFiles;
        private System.Windows.Forms.Button btnDelete;
        private System.Windows.Forms.Button btnPut;
        private System.Windows.Forms.Button btnPost;
        private System.Windows.Forms.Button btnGet;
        private System.Windows.Forms.Button btnCrypt;
        private System.Windows.Forms.Button btnDecrypt;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.ComboBox cbxAlgorithm;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox txtKey;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.DataGridView dgvSpecArgumets;
        private System.Windows.Forms.OpenFileDialog ofd;
        private System.Windows.Forms.Button btnDownload;
        private System.Windows.Forms.SaveFileDialog sfd;
    }
}

