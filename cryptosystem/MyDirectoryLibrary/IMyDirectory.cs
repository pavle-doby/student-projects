using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using CryptoLibrary;

namespace MyDirectoryLibrary
{
    interface IMyDirectory
    {
        string[] GetAllNamesOfFiles(string path);
        string[] GetAllNamesOfFilesFromFile(string path);


        string[] GetAllNamesOfFiles();
        string GetTextFromFile(string name);

        bool PutTextInFile(string name, string text);

        bool PostTextInFile(string name, string text);
        bool PostBytesInFile(string name, byte[] bytes);

        bool DeleteFile(string name);
        bool DeleteLine(string pathToFile, string line);

        bool CryptAndSave(ICryptoLibrary cryptoLib, string srcFullPath, string dstFullPath);
        bool DecryptAndSave(ICryptoLibrary cryptoLib, string srcFullPath, string dstFullPath);

    }
}
