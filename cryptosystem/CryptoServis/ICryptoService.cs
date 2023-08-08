using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

using CryptoLibrary;

namespace CryptoServis
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the interface name "IService1" in both code and config file together.
    [ServiceContract]
    public interface ICryptoService: ICryptoLibrary
    {
        [OperationContract]
        bool isServiceReady();
        [OperationContract]
        bool SetReady(bool ready);

        [OperationContract]
        string GetData(int value);

        [OperationContract]
        CompositeType GetDataUsingDataContract(CompositeType composite);

        [OperationContract]
        bool SaveBytes(byte[] bytes, string dstFullPath);
        
        [OperationContract]
        bool DecryptAndSave(string srcFullPath, string dstFullPath);

        [OperationContract(Name = "SetCryptoLibrarySimpleSubstitution")]
        void SetCryptoLibrary(SimpleSubstitution cryptoLib);

        [OperationContract(Name = "SetCryptoLibraryKnapsack")]
        void SetCryptoLibrary(Knapsack cryptoLib);

        [OperationContract(Name = "SetCryptoLibraryXXTEA")]
        void SetCryptoLibrary(XXTEA cryptoLib);

        [OperationContract(Name = "SetCryptoLibrarySHA2")]
        void SetCryptoLibrary(SHA2 cryptoLib);

    }


    // Use a data contract as illustrated in the sample below to add composite types to service operations.
    [DataContract]
    public class CompositeType
    {
        bool boolValue = true;
        string stringValue = "Hello ";

        [DataMember]
        public bool BoolValue
        {
            get { return boolValue; }
            set { boolValue = value; }
        }

        [DataMember]
        public string StringValue
        {
            get { return stringValue; }
            set { stringValue = value; }
        }
    }
}
