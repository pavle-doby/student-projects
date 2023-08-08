using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.IO;
using System.Security.Permissions;
using CryptoLibrary;

namespace MyDirectoryLibrary
{
    public class FSW
    {
        static string fswPath;
        static FileSystemWatcher watcher = new FileSystemWatcher();
        static bool flagStop = false;
        static MyDirectory dir;

        //public FSW()
        //{
        //    if(path != "")
        //        Run(path);
        //    watcher = new FileSystemWatcher();
        //    flagStop = false;
        //    dir = new MyDirectory();

        //}
        //public FSW(string path)
        //{
        //    if (path != "")
        //    {
        //        this.path = path;
        //        Run(path);
        //    }
        //    watcher = new FileSystemWatcher();
        //    flagStop = false;
        //    dir = new MyDirectory();


        //}

        #region Getters/Setters
        public string Path
        {
            get
            {
                return fswPath;
            }

            set
            {
                fswPath = value;
            }
        }
        #endregion

        [PermissionSet(SecurityAction.Demand, Name = "FullTrust")]
        public static void Run(string path)
        {
            watcher.Path = path;

            watcher.NotifyFilter = NotifyFilters.LastAccess | NotifyFilters.LastWrite
                | NotifyFilters.FileName; //| NotifyFilters.DirectoryName;

            watcher.Filter = "*.*";

            watcher.Changed += new FileSystemEventHandler(OnChanged);
            watcher.Created += new FileSystemEventHandler(OnChanged);
            watcher.Deleted += new FileSystemEventHandler(OnChanged);
            watcher.Renamed += new RenamedEventHandler(OnRenamed);

            watcher.EnableRaisingEvents = true;

            while (!flagStop) { }

        }

        private static void OnChanged(object source, FileSystemEventArgs e)
        {
            // Specify what is done when a file is changed, created, or deleted.
            //Console.WriteLine("File: " + e.FullPath + " " + e.ChangeType);
            byte[] bytesForCrypting = System.IO.File.ReadAllBytes(e.FullPath);
            bytesForCrypting = (new SimpleSubstitution()).Crypt(bytesForCrypting);
            
        }

        private static void OnRenamed(object source, RenamedEventArgs e)
        {
            // Specify what is done when a file is renamed.
            Console.WriteLine("File: {0} renamed to {1}", e.OldFullPath, e.FullPath);
        }
    }
}
