using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;
using CryptoLibrary;

using MyDirectoryLibrary;
using System.IO;

namespace CryptoServis
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class Service1 : ICryptoService
    {

        #region Consts
        const string strSimpleSubstitution = "Simple substitution";
        const string strXXTEA = "XXTEA";
        const string strKnapsack = "Knapsack";
        const string strSHA2 = "SHA2";
        #endregion
        static MyDirectory dir;
        static public ICryptoLibrary cryptoLib;


        public static bool ready = false;
        public static int count = 1;
        public static MyDirectory Dir
        {
            get
            {
                return dir;
            }

            set
            {
                dir = value;
            }
        }

        Service1()
        {
            if (Dir == null)
                Dir = new MyDirectory();
            if (cryptoLib == null)
                cryptoLib = new Knapsack();
        }
        public Service1(ICryptoLibrary crypto)
        {
            if (Dir == null)
                Dir = new MyDirectory();
            cryptoLib = crypto;
        }
        
        public bool SaveBytes(byte[] bytes, string dstFullPath)
        {
            try
            {
                File.WriteAllBytes(dstFullPath, bytes);
            }
            catch (Exception ex)
            {
                return false;
            }
            return true;
        }

        public bool DecryptAndSave(string srcFullPath, string dstFullPath)
        {
            Dir = new MyDirectory();
            return true;
        }

        public string GetData(int value)
        {
            return string.Format("You entered: {0}", value);
        }

        public CompositeType GetDataUsingDataContract(CompositeType composite)
        {
            if (composite == null)
            {
                throw new ArgumentNullException("composite");
            }
            if (composite.BoolValue)
            {
                composite.StringValue += "Suffix";
            }
            return composite;
        }

        public bool SetKey(byte[] input)
        {
            return cryptoLib.SetKey(input);
        }

        public byte[] GenerateRandomKey()
        {
            return cryptoLib.GenerateRandomKey();
        }

        public bool SetIV(byte[] input)
        {
            return cryptoLib.SetIV(input);
        }

        public byte[] GenerateRandomIV()
        {
            return cryptoLib.GenerateRandomIV();
        }

        public bool SetAlgorithmProperties(IDictionary<string, byte[]> specArguments)
        {
            return cryptoLib.SetAlgorithmProperties(specArguments);
        }

        public byte[] Crypt(byte[] input)
        {
            ready = false;
            byte[] b = cryptoLib.Crypt(input);
            ready = true;
            return b;
        }

        public byte[] Decrypt(byte[] output)
        {
            ready = false;
            byte[] b = cryptoLib.Decrypt(output);
            ready = true;
            return b;
        }

        public void SetCryptoLibrary(SimpleSubstitution criptoLibrary)
        {
            cryptoLib = criptoLibrary;
        }

        public void SetCryptoLibrary(Knapsack criptoLibrary)
        {
            cryptoLib = criptoLibrary;
        }

        public void SetCryptoLibrary(XXTEA criptoLibrary)
        {
            cryptoLib = criptoLibrary;
        }

        public void SetCryptoLibrary(SHA2 criptoLibrary)
        {
            cryptoLib = criptoLibrary;
        }

        public bool isServiceReady()
        {
            if (count-- == 1)
                return true;
            return ready;
        }

        public bool SetReady(bool r)
        {
            return ready = r;            
        }
    }
}
