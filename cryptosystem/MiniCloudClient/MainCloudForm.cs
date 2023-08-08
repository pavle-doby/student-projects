using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

using System.IO;
using MyDirectoryLibrary;

namespace MiniCloudClient
{
    public partial class MainCloudForm : Form
    {

        const string CloudClient = @"\CloudClient";
        const string fswDestinationConst = @"\fswDestination";
        const string fswSourceConst = @"\fswSource";
        const string fswInfo = @"\fswInfo";

        MyDirectory dir;
        string pathThis;

        public MainCloudForm()
        {
            InitializeComponent();
            dir = new MyDirectory();

            pathThis = (string)Directory.GetParent(Directory.GetCurrentDirectory()).Parent.Parent.FullName;
            pathThis += CloudClient;

            dir.Path = pathThis + fswSourceConst;

            dir.PathInfo = pathThis + fswInfo;
            dir.PathDestination = pathThis + fswDestinationConst;
            dir.PathSource = pathThis + fswSourceConst;
            
            txtPath.Text = dir.Path;
            rdbSrc.Checked = true;

        }

        private void btnGet_Click(object sender, EventArgs e)
        {
            btnDelete.Enabled = true;
            btnPut.Enabled = true;

            lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();

            txtPath.Text = dir.Path;
        }

        

        private void lbxFiles_DoubleClick(object sender, EventArgs e)
        {
            string fileName = lbxFiles.SelectedItem.ToString();
            //if (chbxSrc.Checked)
            //    txtFile.Text = dir.GetTextFromFile(fileName); //neobradjen
            //else
            //    txtFile.Text = Encoding.Unicode.GetString(File.ReadAllBytes(dir.Path + @"\" + fileName)); //obradjen
            
            //privremeno resenje
            txtFile.Text = dir.GetTextFromFile(fileName);
            if(txtFile.Text.Length == 1)
                txtFile.Text = Encoding.Unicode.GetString(File.ReadAllBytes(dir.Path + @"\" + fileName));

            txtFileName.Text = fileName;
        }

        private void btnDelete_Click(object sender, EventArgs e)
        {
            string fileName = lbxFiles.SelectedItem.ToString();
            if (MessageBox.Show("Do you want to DELETE " + fileName + "?", "Question", MessageBoxButtons.YesNo,MessageBoxIcon.Question) == DialogResult.Yes)
            {
                dir.DeleteFile(fileName);

                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
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
        private void btnPost_Click(object sender, EventArgs e)
        {
            if(ofd.ShowDialog() == DialogResult.OK)
            {
                string str = File.ReadAllText(ofd.FileName);
                if(str.Length == 1)
                    str = Encoding.Unicode.GetString(File.ReadAllBytes(dir.Path + @"\" + ofd.FileName));
                string name = ofd.SafeFileName;

                dir.PutTextInFile(name, str);

                //txtFileName.Text = name;
                //txtFile.Text = str;

                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
                lbxFiles.SelectedItem = name;
            }
        }

        private void btnChange_Click(object sender, EventArgs e)
        {
            string newPath = txtPath.Text;
            if (Directory.Exists(newPath))
            {
                if (rdbSrc.Checked)
                    dir.Path = dir.PathSource = newPath;
                else if(rdbDst.Checked)
                    dir.Path = dir.PathDestination = newPath;
                else //rdbInfo
                    dir.Path = dir.PathInfo = newPath;

                lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
            }
            else
            {
                MessageBox.Show("Path is not correct!", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }

        private void rdbSrc_CheckedChanged(object sender, EventArgs e)
        {
            txtPath.Text = dir.Path = dir.PathSource;
            lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
        }

        private void rdbDst_CheckedChanged(object sender, EventArgs e)
        {
            txtPath.Text = dir.Path = dir.PathDestination;
            lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
        }

        private void rdbInfo_CheckedChanged(object sender, EventArgs e)
        {
            txtPath.Text = dir.Path = dir.PathInfo;
            lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
        }

        private void btnDeleteAll_Click(object sender, EventArgs e)
        {
            string[] strNames = dir.GetAllNamesOfFiles();
            foreach(string name in strNames)
            {
                dir.DeleteFile(name);
            }
            
            lbxFiles.DataSource = dir.GetAllNamesOfFiles().ToList();
        }
    }
}
