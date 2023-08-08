using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace CryptoServis
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "CloudService" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select CloudService.svc or CloudService.svc.cs at the Solution Explorer and start debugging.
    public class CloudService : ICloudService
    {
        public bool DeleteFile(string name)
        {
            throw new NotImplementedException();
        }

        public bool DeleteLine(string pathToFile, string line)
        {
            throw new NotImplementedException();
        }

        public void DoWork()
        {
        }

        public string[] GetAllNamesOfFiles()
        {
            throw new NotImplementedException();
        }

        public string[] GetAllNamesOfFiles(string path)
        {
            throw new NotImplementedException();
        }

        public string[] GetAllNamesOfFilesFromFile(string path)
        {
            throw new NotImplementedException();
        }

        public string GetTextFromFile(string name)
        {
            throw new NotImplementedException();
        }

        public bool PostBytesInFile(string name, byte[] bytes)
        {
            throw new NotImplementedException();
        }

        public bool PostTextInFile(string name, string text)
        {
            throw new NotImplementedException();
        }

        public bool PutTextInFile(string name, string text)
        {
            throw new NotImplementedException();
        }
    }
}
