using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;

namespace MyDirectory
{
    public class MyDirectory: IMyDirectory
    {

        public MyDirectory()
        {

        }

        public string[] getAllFilesName(string path)
        {
            DirectoryInfo d = new DirectoryInfo(path); 
            FileInfo[] Files = d.GetFiles("*.*"); //Getting ALL files

            string[] strArray = new string[Files.Length];
            int i = 0;
            foreach (FileInfo file in Files)
            {
                strArray[i++] = file.Name;
            }
            return strArray;
        }
    }
}
