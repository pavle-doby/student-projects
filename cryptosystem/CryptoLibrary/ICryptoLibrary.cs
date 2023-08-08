using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;

namespace CryptoLibrary
{
    [ServiceContract]
    public interface ICryptoLibrary
    {
        [OperationContract]
        bool SetKey(byte[] input);
        [OperationContract]
        byte[] GenerateRandomKey();

        [OperationContract]
        bool SetIV(byte[] input);
        [OperationContract]
        byte[] GenerateRandomIV();


        [OperationContract]
        bool SetAlgorithmProperties(IDictionary<string, byte[]> specArguments);

        [OperationContract]
        byte[] Crypt(byte[] input);
        [OperationContract]
        byte[] Decrypt(byte[] output);
    }
}
