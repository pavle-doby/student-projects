namespace MiniCloudService
{
    partial class KnapsackForm
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
            this.txtPrivateKey = new System.Windows.Forms.TextBox();
            this.txtM = new System.Windows.Forms.TextBox();
            this.txtN = new System.Windows.Forms.TextBox();
            this.btnGPrivateKey = new System.Windows.Forms.Button();
            this.btnGPublicKey = new System.Windows.Forms.Button();
            this.btnGM = new System.Windows.Forms.Button();
            this.btnGN = new System.Windows.Forms.Button();
            this.btnDone = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.lblIm = new System.Windows.Forms.Label();
            this.lblPublicKey = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txtPrivateKey
            // 
            this.txtPrivateKey.Location = new System.Drawing.Point(17, 46);
            this.txtPrivateKey.Name = "txtPrivateKey";
            this.txtPrivateKey.Size = new System.Drawing.Size(368, 22);
            this.txtPrivateKey.TabIndex = 0;
            // 
            // txtM
            // 
            this.txtM.Location = new System.Drawing.Point(20, 108);
            this.txtM.Name = "txtM";
            this.txtM.Size = new System.Drawing.Size(47, 22);
            this.txtM.TabIndex = 2;
            this.txtM.TextChanged += new System.EventHandler(this.txtM_TextChanged);
            // 
            // txtN
            // 
            this.txtN.Location = new System.Drawing.Point(245, 108);
            this.txtN.Name = "txtN";
            this.txtN.Size = new System.Drawing.Size(47, 22);
            this.txtN.TabIndex = 3;
            // 
            // btnGPrivateKey
            // 
            this.btnGPrivateKey.Location = new System.Drawing.Point(112, 9);
            this.btnGPrivateKey.Name = "btnGPrivateKey";
            this.btnGPrivateKey.Size = new System.Drawing.Size(273, 31);
            this.btnGPrivateKey.TabIndex = 4;
            this.btnGPrivateKey.Text = "Generate private ";
            this.btnGPrivateKey.UseVisualStyleBackColor = true;
            this.btnGPrivateKey.Click += new System.EventHandler(this.btnGPrivateKey_Click);
            // 
            // btnGPublicKey
            // 
            this.btnGPublicKey.Location = new System.Drawing.Point(112, 167);
            this.btnGPublicKey.Name = "btnGPublicKey";
            this.btnGPublicKey.Size = new System.Drawing.Size(273, 31);
            this.btnGPublicKey.TabIndex = 5;
            this.btnGPublicKey.Text = "Generate public ";
            this.btnGPublicKey.UseVisualStyleBackColor = true;
            this.btnGPublicKey.Click += new System.EventHandler(this.btnGPublicKey_Click);
            // 
            // btnGM
            // 
            this.btnGM.Location = new System.Drawing.Point(134, 105);
            this.btnGM.Name = "btnGM";
            this.btnGM.Size = new System.Drawing.Size(99, 30);
            this.btnGM.TabIndex = 6;
            this.btnGM.Text = "Generate M";
            this.btnGM.UseVisualStyleBackColor = true;
            this.btnGM.Click += new System.EventHandler(this.btnGM_Click);
            // 
            // btnGN
            // 
            this.btnGN.Location = new System.Drawing.Point(298, 104);
            this.btnGN.Name = "btnGN";
            this.btnGN.Size = new System.Drawing.Size(87, 30);
            this.btnGN.TabIndex = 7;
            this.btnGN.Text = "Generate N";
            this.btnGN.UseVisualStyleBackColor = true;
            this.btnGN.Click += new System.EventHandler(this.btnGN_Click);
            // 
            // btnDone
            // 
            this.btnDone.Location = new System.Drawing.Point(112, 254);
            this.btnDone.Name = "btnDone";
            this.btnDone.Size = new System.Drawing.Size(273, 31);
            this.btnDone.TabIndex = 8;
            this.btnDone.Text = "DONE";
            this.btnDone.UseVisualStyleBackColor = true;
            this.btnDone.Click += new System.EventHandler(this.btnDone_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(25, 16);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(75, 16);
            this.label1.TabIndex = 9;
            this.label1.Text = "Private key";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(25, 174);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(70, 16);
            this.label2.TabIndex = 10;
            this.label2.Text = "Public key";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(17, 93);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(19, 16);
            this.label3.TabIndex = 11;
            this.label3.Text = "m";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(242, 94);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(15, 16);
            this.label4.TabIndex = 12;
            this.label4.Text = "n";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(78, 94);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(22, 16);
            this.label5.TabIndex = 14;
            this.label5.Text = "im";
            // 
            // lblIm
            // 
            this.lblIm.AutoSize = true;
            this.lblIm.Location = new System.Drawing.Point(84, 111);
            this.lblIm.Name = "lblIm";
            this.lblIm.Size = new System.Drawing.Size(16, 16);
            this.lblIm.TabIndex = 15;
            this.lblIm.Text = "--";
            // 
            // lblPublicKey
            // 
            this.lblPublicKey.AutoSize = true;
            this.lblPublicKey.Location = new System.Drawing.Point(28, 210);
            this.lblPublicKey.Name = "lblPublicKey";
            this.lblPublicKey.Size = new System.Drawing.Size(16, 16);
            this.lblPublicKey.TabIndex = 16;
            this.lblPublicKey.Text = "--";
            // 
            // KnapsackForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.ButtonHighlight;
            this.BackgroundImage = global::MiniCloudService.Properties.Resources.cloudwithe;
            this.ClientSize = new System.Drawing.Size(411, 320);
            this.Controls.Add(this.lblPublicKey);
            this.Controls.Add(this.lblIm);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btnDone);
            this.Controls.Add(this.btnGN);
            this.Controls.Add(this.btnGM);
            this.Controls.Add(this.btnGPublicKey);
            this.Controls.Add(this.btnGPrivateKey);
            this.Controls.Add(this.txtN);
            this.Controls.Add(this.txtM);
            this.Controls.Add(this.txtPrivateKey);
            this.Name = "KnapsackForm";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterParent;
            this.Text = "KnapsackForm";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtPrivateKey;
        private System.Windows.Forms.TextBox txtM;
        private System.Windows.Forms.TextBox txtN;
        private System.Windows.Forms.Button btnGPrivateKey;
        private System.Windows.Forms.Button btnGPublicKey;
        private System.Windows.Forms.Button btnGM;
        private System.Windows.Forms.Button btnGN;
        private System.Windows.Forms.Button btnDone;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label lblIm;
        private System.Windows.Forms.Label lblPublicKey;
    }
}