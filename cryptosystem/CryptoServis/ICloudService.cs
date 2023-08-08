using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace CryptoServis
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "ICloudService" in both code and config file together.
    [ServiceContract]
    public interface ICloudService
    {
        [OperationContract]
        void DoWork();

        [OperationContract]
        string[] GetAllNamesOfFiles(string path);
        [OperationContract]
        string[] GetAllNamesOfFilesFromFile(string path);


        [OperationContract]
        string[] GetAllNamesOfFiles();
        [OperationContract]
        string GetTextFromFile(string name);

        [OperationContract]
        bool PutTextInFile(string name, string text);

        [OperationContract]
        bool PostTextInFile(string name, string text);
        [OperationContract]
        bool PostBytesInFile(string name, byte[] bytes);

        [OperationContract]
        bool DeleteFile(string name);
        [OperationContract]
        bool DeleteLine(string pathToFile, string line);
    }
}
