using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;
using CryptoLibrary;

namespace MyDirectoryLibrary
{
    public class MyDirectory : IMyDirectory
    {
        string path;

        //for cloud
        string pathSource;
        string pathDestination;

        string pathInfo;

        string pathInfoAllFiles;
        string pathInfoDecryptedFiles;
        string pathInfoEncryptedFiles;
        string pathInfoProcessedFiles;

        string[] allNamesFiles;

        public MyDirectory()
        {
            this.path = "";
        }
        #region Getters/Setters
        public string Path
        {
            get
            {
                return path;
            }

            set
            {
                path = value;
            }
        }

        public string PathInfo
        {
            get
            {
                return pathInfo;
            }

            set
            {
                pathInfo = value;
            }
        }

        public string PathInfoAllFiles
        {
            get
            {
                return pathInfoAllFiles;
            }

            set
            {
                pathInfoAllFiles = value;
            }
        }

        public string PathInfoDecryptedFiles
        {
            get
            {
                return pathInfoDecryptedFiles;
            }

            set
            {
                pathInfoDecryptedFiles = value;
            }
        }

        public string PathInfoEncryptedFiles
        {
            get
            {
                return pathInfoEncryptedFiles;
            }

            set
            {
                pathInfoEncryptedFiles = value;
            }
        }

        public string PathInfoProcessedFiles
        {
            get
            {
                return pathInfoProcessedFiles;
            }

            set
            {
                pathInfoProcessedFiles = value;
            }
        }

        public string[] AllNamesFiles
        {
            get
            {
                return allNamesFiles;
            }

            set
            {
                allNamesFiles = value;
            }
        }

        public string PathSource
        {
            get
            {
                return pathSource;
            }

            set
            {
                pathSource = value;
            }
        }

        public string PathDestination
        {
            get
            {
                return pathDestination;
            }

            set
            {
                pathDestination = value;
            }
        }

        #endregion

        public string[] GetAllNamesOfFiles(string path)
        {
            if (!Directory.Exists(path))
                return null;

            DirectoryInfo d = new DirectoryInfo(path);
            FileInfo[] Files = d.GetFiles("*.*"); 

            string[] strArray = new string[Files.Length];
            int i = 0;
            foreach (FileInfo file in Files)
            {
                strArray[i++] = file.Name;
            }
            return strArray;
        }

        public string[] GetAllNamesOfFiles()
        {
            if (this.path == "" || this.path == null)
                return null;

            DirectoryInfo d = new DirectoryInfo(this.path);//Assuming Test is your Folder
            FileInfo[] Files = d.GetFiles("*.*"); //Getting Text files

            this.AllNamesFiles = new string[Files.Length];
            int i = 0;
            foreach (FileInfo file in Files)
            {
                AllNamesFiles[i++] = file.Name;
            }
            return AllNamesFiles;
        }



        public string GetTextFromFile(string name)
        {
            if (path == "" || name == "")
                return "!ERROR!~~~Path or Name is not set~~~!ERROR!";
            name = path + @"\" + name;
            return File.ReadAllText(name);
        }

        public bool CryptAndSave(ICryptoLibrary cryptoLib, string srcFullPath, string dstFullPath)
        {
            byte[] fileBytes;
            try
            {
                fileBytes = System.IO.File.ReadAllBytes(srcFullPath);
                fileBytes = cryptoLib.Crypt(fileBytes);
                File.WriteAllBytes(dstFullPath, fileBytes);
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }

        public bool DecryptAndSave(ICryptoLibrary cryptoLib, string FullPath, string dstFullPath)
        {
            byte[] fileBytes;
            try
            {
                fileBytes = System.IO.File.ReadAllBytes(FullPath);
                fileBytes = cryptoLib.Decrypt(fileBytes);
                File.WriteAllBytes(FullPath, fileBytes);
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
        public bool PutTextInFile(string name, string text)
        {
            if (path == "" || name == "")
                return false;
            name = path + @"\" + name;
            try
            {
                File.WriteAllText(name, text);
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }

        public bool PostTextInFile(string name, string text)
        {
            if (path == "" || name == "")
                return false;
            try
            {
                File.WriteAllText(this.path + @"\" + name, text);
            }
            catch(Exception ex)
            {
                return false;
            }
            return true;
        }

        public bool DeleteFile(string name)
        {
            try
            {
                File.Delete(this.path + @"\" + name);
            }
            catch(Exception ex)
            {
                return false;
            }
            return true;
        }

        public string[] GetAllNamesOfFilesFromFile(string path)
        {
            if (!Directory.Exists(path))
                return null;

            return File.ReadAllLines(path);
        }

        public bool DeleteLine(string pathToFile, string line)
        {
            try
            {
                string[] allLines = File.ReadAllLines(pathToFile);
                File.WriteAllText(pathToFile, null);
                foreach (string str in allLines)
                {
                    if (str == line)
                        continue;
                    File.AppendAllText(pathToFile, str + Environment.NewLine);
                }
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }

        public bool PostBytesInFile(string name, byte[] bytes)
        {
            if (path == "" || name == "")
                return false;
            try
            {
                File.WriteAllBytes(this.path + @"\" + name, bytes);
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }
    }
}
