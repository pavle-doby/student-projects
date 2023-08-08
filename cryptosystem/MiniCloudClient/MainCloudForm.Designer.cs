namespace MiniCloudClient
{
    partial class MainCloudForm
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
            this.btnGet = new System.Windows.Forms.Button();
            this.btnPost = new System.Windows.Forms.Button();
            this.btnPut = new System.Windows.Forms.Button();
            this.btnDelete = new System.Windows.Forms.Button();
            this.ofd = new System.Windows.Forms.OpenFileDialog();
            this.sfd = new System.Windows.Forms.SaveFileDialog();
            this.lbxFiles = new System.Windows.Forms.ListBox();
            this.txtFile = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txtFileName = new System.Windows.Forms.TextBox();
            this.txtPath = new System.Windows.Forms.TextBox();
            this.btnChange = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.rdbInfo = new System.Windows.Forms.RadioButton();
            this.rdbDst = new System.Windows.Forms.RadioButton();
            this.rdbSrc = new System.Windows.Forms.RadioButton();
            this.label3 = new System.Windows.Forms.Label();
            this.btnDeleteAll = new System.Windows.Forms.Button();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // btnGet
            // 
            this.btnGet.Location = new System.Drawing.Point(22, 272);
            this.btnGet.Name = "btnGet";
            this.btnGet.Size = new System.Drawing.Size(117, 36);
            this.btnGet.TabIndex = 1;
            this.btnGet.Text = "GET";
            this.btnGet.UseVisualStyleBackColor = true;
            this.btnGet.Click += new System.EventHandler(this.btnGet_Click);
            // 
            // btnPost
            // 
            this.btnPost.Location = new System.Drawing.Point(188, 272);
            this.btnPost.Name = "btnPost";
            this.btnPost.Size = new System.Drawing.Size(117, 36);
            this.btnPost.TabIndex = 2;
            this.btnPost.Text = "POST";
            this.btnPost.UseVisualStyleBackColor = true;
            this.btnPost.Click += new System.EventHandler(this.btnPost_Click);
            // 
            // btnPut
            // 
            this.btnPut.Location = new System.Drawing.Point(352, 272);
            this.btnPut.Name = "btnPut";
            this.btnPut.Size = new System.Drawing.Size(117, 36);
            this.btnPut.TabIndex = 3;
            this.btnPut.Text = "PUT";
            this.btnPut.UseVisualStyleBackColor = true;
            this.btnPut.Click += new System.EventHandler(this.btnPut_Click);
            // 
            // btnDelete
            // 
            this.btnDelete.Location = new System.Drawing.Point(512, 272);
            this.btnDelete.Name = "btnDelete";
            this.btnDelete.Size = new System.Drawing.Size(117, 36);
            this.btnDelete.TabIndex = 4;
            this.btnDelete.Text = "DELETE";
            this.btnDelete.UseVisualStyleBackColor = true;
            this.btnDelete.Click += new System.EventHandler(this.btnDelete_Click);
            // 
            // ofd
            // 
            this.ofd.FileName = "ofd";
            // 
            // lbxFiles
            // 
            this.lbxFiles.FormattingEnabled = true;
            this.lbxFiles.ItemHeight = 16;
            this.lbxFiles.Location = new System.Drawing.Point(22, 120);
            this.lbxFiles.Name = "lbxFiles";
            this.lbxFiles.Size = new System.Drawing.Size(607, 132);
            this.lbxFiles.TabIndex = 5;
            this.lbxFiles.DoubleClick += new System.EventHandler(this.lbxFiles_DoubleClick);
            // 
            // txtFile
            // 
            this.txtFile.Location = new System.Drawing.Point(22, 367);
            this.txtFile.Multiline = true;
            this.txtFile.Name = "txtFile";
            this.txtFile.Size = new System.Drawing.Size(607, 202);
            this.txtFile.TabIndex = 6;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(19, 93);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(108, 16);
            this.label1.TabIndex = 7;
            this.label1.Text = "All names of files";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(19, 337);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(67, 16);
            this.label2.TabIndex = 8;
            this.label2.Text = "File name";
            // 
            // txtFileName
            // 
            this.txtFileName.Location = new System.Drawing.Point(92, 331);
            this.txtFileName.Name = "txtFileName";
            this.txtFileName.Size = new System.Drawing.Size(213, 22);
            this.txtFileName.TabIndex = 10;
            // 
            // txtPath
            // 
            this.txtPath.Location = new System.Drawing.Point(133, 23);
            this.txtPath.Name = "txtPath";
            this.txtPath.Size = new System.Drawing.Size(496, 22);
            this.txtPath.TabIndex = 11;
            // 
            // btnChange
            // 
            this.btnChange.Location = new System.Drawing.Point(512, 73);
            this.btnChange.Name = "btnChange";
            this.btnChange.Size = new System.Drawing.Size(117, 36);
            this.btnChange.TabIndex = 12;
            this.btnChange.Text = "CHANGE";
            this.btnChange.UseVisualStyleBackColor = true;
            this.btnChange.Click += new System.EventHandler(this.btnChange_Click);
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.rdbInfo);
            this.groupBox1.Controls.Add(this.rdbDst);
            this.groupBox1.Controls.Add(this.rdbSrc);
            this.groupBox1.Location = new System.Drawing.Point(133, 60);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(373, 54);
            this.groupBox1.TabIndex = 14;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "Quick path";
            // 
            // rdbInfo
            // 
            this.rdbInfo.AutoSize = true;
            this.rdbInfo.Location = new System.Drawing.Point(286, 21);
            this.rdbInfo.Name = "rdbInfo";
            this.rdbInfo.Size = new System.Drawing.Size(50, 20);
            this.rdbInfo.TabIndex = 17;
            this.rdbInfo.TabStop = true;
            this.rdbInfo.Text = "Info";
            this.rdbInfo.UseVisualStyleBackColor = true;
            this.rdbInfo.CheckedChanged += new System.EventHandler(this.rdbInfo_CheckedChanged);
            // 
            // rdbDst
            // 
            this.rdbDst.AutoSize = true;
            this.rdbDst.Location = new System.Drawing.Point(131, 21);
            this.rdbDst.Name = "rdbDst";
            this.rdbDst.Size = new System.Drawing.Size(96, 20);
            this.rdbDst.TabIndex = 16;
            this.rdbDst.TabStop = true;
            this.rdbDst.Text = "Destination";
            this.rdbDst.UseVisualStyleBackColor = true;
            this.rdbDst.CheckedChanged += new System.EventHandler(this.rdbDst_CheckedChanged);
            // 
            // rdbSrc
            // 
            this.rdbSrc.AutoSize = true;
            this.rdbSrc.Location = new System.Drawing.Point(6, 21);
            this.rdbSrc.Name = "rdbSrc";
            this.rdbSrc.Size = new System.Drawing.Size(72, 20);
            this.rdbSrc.TabIndex = 15;
            this.rdbSrc.TabStop = true;
            this.rdbSrc.Text = "Source";
            this.rdbSrc.UseVisualStyleBackColor = true;
            this.rdbSrc.CheckedChanged += new System.EventHandler(this.rdbSrc_CheckedChanged);
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(28, 26);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(86, 16);
            this.label3.TabIndex = 15;
            this.label3.Text = "Path to folder";
            // 
            // btnDeleteAll
            // 
            this.btnDeleteAll.Location = new System.Drawing.Point(512, 314);
            this.btnDeleteAll.Name = "btnDeleteAll";
            this.btnDeleteAll.Size = new System.Drawing.Size(117, 36);
            this.btnDeleteAll.TabIndex = 16;
            this.btnDeleteAll.Text = "DELETE ALL";
            this.btnDeleteAll.UseVisualStyleBackColor = true;
            this.btnDeleteAll.Click += new System.EventHandler(this.btnDeleteAll_Click);
            // 
            // MainCloudForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ControlLightLight;
            this.BackgroundImage = global::MiniCloudClient.Properties.Resources.cloudwithe2;
            this.ClientSize = new System.Drawing.Size(648, 591);
            this.Controls.Add(this.btnDeleteAll);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.btnChange);
            this.Controls.Add(this.txtPath);
            this.Controls.Add(this.txtFileName);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtFile);
            this.Controls.Add(this.lbxFiles);
            this.Controls.Add(this.btnDelete);
            this.Controls.Add(this.btnPut);
            this.Controls.Add(this.btnPost);
            this.Controls.Add(this.btnGet);
            this.Name = "MainCloudForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Mini Cloud Clinet";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Button btnGet;
        private System.Windows.Forms.Button btnPost;
        private System.Windows.Forms.Button btnPut;
        private System.Windows.Forms.Button btnDelete;
        private System.Windows.Forms.OpenFileDialog ofd;
        private System.Windows.Forms.SaveFileDialog sfd;
        private System.Windows.Forms.ListBox lbxFiles;
        private System.Windows.Forms.TextBox txtFile;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtFileName;
        private System.Windows.Forms.TextBox txtPath;
        private System.Windows.Forms.Button btnChange;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.RadioButton rdbInfo;
        private System.Windows.Forms.RadioButton rdbDst;
        private System.Windows.Forms.RadioButton rdbSrc;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btnDeleteAll;
    }
}

