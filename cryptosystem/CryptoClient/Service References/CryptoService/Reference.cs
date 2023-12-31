﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CryptoClient.CryptoService {
    using System.Runtime.Serialization;
    using System;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="CompositeType", Namespace="http://schemas.datacontract.org/2004/07/CryptoServis")]
    [System.SerializableAttribute()]
    public partial class CompositeType : object, System.Runtime.Serialization.IExtensibleDataObject, System.ComponentModel.INotifyPropertyChanged {
        
        [System.NonSerializedAttribute()]
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private bool BoolValueField;
        
        [System.Runtime.Serialization.OptionalFieldAttribute()]
        private string StringValueField;
        
        [global::System.ComponentModel.BrowsableAttribute(false)]
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData {
            get {
                return this.extensionDataField;
            }
            set {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool BoolValue {
            get {
                return this.BoolValueField;
            }
            set {
                if ((this.BoolValueField.Equals(value) != true)) {
                    this.BoolValueField = value;
                    this.RaisePropertyChanged("BoolValue");
                }
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string StringValue {
            get {
                return this.StringValueField;
            }
            set {
                if ((object.ReferenceEquals(this.StringValueField, value) != true)) {
                    this.StringValueField = value;
                    this.RaisePropertyChanged("StringValue");
                }
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="CryptoService.ICryptoService")]
    public interface ICryptoService {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/SetKey", ReplyAction="http://tempuri.org/ICryptoLibrary/SetKeyResponse")]
        bool SetKey(byte[] input);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/SetKey", ReplyAction="http://tempuri.org/ICryptoLibrary/SetKeyResponse")]
        System.Threading.Tasks.Task<bool> SetKeyAsync(byte[] input);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/GenerateRandomKey", ReplyAction="http://tempuri.org/ICryptoLibrary/GenerateRandomKeyResponse")]
        byte[] GenerateRandomKey();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/GenerateRandomKey", ReplyAction="http://tempuri.org/ICryptoLibrary/GenerateRandomKeyResponse")]
        System.Threading.Tasks.Task<byte[]> GenerateRandomKeyAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/SetIV", ReplyAction="http://tempuri.org/ICryptoLibrary/SetIVResponse")]
        bool SetIV(byte[] input);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/SetIV", ReplyAction="http://tempuri.org/ICryptoLibrary/SetIVResponse")]
        System.Threading.Tasks.Task<bool> SetIVAsync(byte[] input);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/GenerateRandomIV", ReplyAction="http://tempuri.org/ICryptoLibrary/GenerateRandomIVResponse")]
        byte[] GenerateRandomIV();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/GenerateRandomIV", ReplyAction="http://tempuri.org/ICryptoLibrary/GenerateRandomIVResponse")]
        System.Threading.Tasks.Task<byte[]> GenerateRandomIVAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/SetAlgorithmProperties", ReplyAction="http://tempuri.org/ICryptoLibrary/SetAlgorithmPropertiesResponse")]
        bool SetAlgorithmProperties(System.Collections.Generic.Dictionary<string, byte[]> specArguments);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/SetAlgorithmProperties", ReplyAction="http://tempuri.org/ICryptoLibrary/SetAlgorithmPropertiesResponse")]
        System.Threading.Tasks.Task<bool> SetAlgorithmPropertiesAsync(System.Collections.Generic.Dictionary<string, byte[]> specArguments);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/Crypt", ReplyAction="http://tempuri.org/ICryptoLibrary/CryptResponse")]
        byte[] Crypt(byte[] input);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/Crypt", ReplyAction="http://tempuri.org/ICryptoLibrary/CryptResponse")]
        System.Threading.Tasks.Task<byte[]> CryptAsync(byte[] input);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/Decrypt", ReplyAction="http://tempuri.org/ICryptoLibrary/DecryptResponse")]
        byte[] Decrypt(byte[] output);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoLibrary/Decrypt", ReplyAction="http://tempuri.org/ICryptoLibrary/DecryptResponse")]
        System.Threading.Tasks.Task<byte[]> DecryptAsync(byte[] output);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/isServiceReady", ReplyAction="http://tempuri.org/ICryptoService/isServiceReadyResponse")]
        bool isServiceReady();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/isServiceReady", ReplyAction="http://tempuri.org/ICryptoService/isServiceReadyResponse")]
        System.Threading.Tasks.Task<bool> isServiceReadyAsync();
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetReady", ReplyAction="http://tempuri.org/ICryptoService/SetReadyResponse")]
        bool SetReady(bool ready);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetReady", ReplyAction="http://tempuri.org/ICryptoService/SetReadyResponse")]
        System.Threading.Tasks.Task<bool> SetReadyAsync(bool ready);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/GetData", ReplyAction="http://tempuri.org/ICryptoService/GetDataResponse")]
        string GetData(int value);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/GetData", ReplyAction="http://tempuri.org/ICryptoService/GetDataResponse")]
        System.Threading.Tasks.Task<string> GetDataAsync(int value);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/GetDataUsingDataContract", ReplyAction="http://tempuri.org/ICryptoService/GetDataUsingDataContractResponse")]
        CryptoClient.CryptoService.CompositeType GetDataUsingDataContract(CryptoClient.CryptoService.CompositeType composite);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/GetDataUsingDataContract", ReplyAction="http://tempuri.org/ICryptoService/GetDataUsingDataContractResponse")]
        System.Threading.Tasks.Task<CryptoClient.CryptoService.CompositeType> GetDataUsingDataContractAsync(CryptoClient.CryptoService.CompositeType composite);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SaveBytes", ReplyAction="http://tempuri.org/ICryptoService/SaveBytesResponse")]
        bool SaveBytes(byte[] bytes, string dstFullPath);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SaveBytes", ReplyAction="http://tempuri.org/ICryptoService/SaveBytesResponse")]
        System.Threading.Tasks.Task<bool> SaveBytesAsync(byte[] bytes, string dstFullPath);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/DecryptAndSave", ReplyAction="http://tempuri.org/ICryptoService/DecryptAndSaveResponse")]
        bool DecryptAndSave(string srcFullPath, string dstFullPath);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/DecryptAndSave", ReplyAction="http://tempuri.org/ICryptoService/DecryptAndSaveResponse")]
        System.Threading.Tasks.Task<bool> DecryptAndSaveAsync(string srcFullPath, string dstFullPath);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibrarySimpleSubstitution", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibrarySimpleSubstitutionResponse")]
        void SetCryptoLibrarySimpleSubstitution(CryptoLibrary.SimpleSubstitution cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibrarySimpleSubstitution", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibrarySimpleSubstitutionResponse")]
        System.Threading.Tasks.Task SetCryptoLibrarySimpleSubstitutionAsync(CryptoLibrary.SimpleSubstitution cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibraryKnapsack", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibraryKnapsackResponse")]
        void SetCryptoLibraryKnapsack(CryptoLibrary.Knapsack cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibraryKnapsack", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibraryKnapsackResponse")]
        System.Threading.Tasks.Task SetCryptoLibraryKnapsackAsync(CryptoLibrary.Knapsack cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibraryXXTEA", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibraryXXTEAResponse")]
        void SetCryptoLibraryXXTEA(CryptoLibrary.XXTEA cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibraryXXTEA", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibraryXXTEAResponse")]
        System.Threading.Tasks.Task SetCryptoLibraryXXTEAAsync(CryptoLibrary.XXTEA cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibrarySHA2", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibrarySHA2Response")]
        void SetCryptoLibrarySHA2(CryptoLibrary.SHA2 cryptoLib);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/ICryptoService/SetCryptoLibrarySHA2", ReplyAction="http://tempuri.org/ICryptoService/SetCryptoLibrarySHA2Response")]
        System.Threading.Tasks.Task SetCryptoLibrarySHA2Async(CryptoLibrary.SHA2 cryptoLib);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface ICryptoServiceChannel : CryptoClient.CryptoService.ICryptoService, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class CryptoServiceClient : System.ServiceModel.ClientBase<CryptoClient.CryptoService.ICryptoService>, CryptoClient.CryptoService.ICryptoService {
        
        public CryptoServiceClient() {
        }
        
        public CryptoServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public CryptoServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public CryptoServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public CryptoServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        public bool SetKey(byte[] input) {
            return base.Channel.SetKey(input);
        }
        
        public System.Threading.Tasks.Task<bool> SetKeyAsync(byte[] input) {
            return base.Channel.SetKeyAsync(input);
        }
        
        public byte[] GenerateRandomKey() {
            return base.Channel.GenerateRandomKey();
        }
        
        public System.Threading.Tasks.Task<byte[]> GenerateRandomKeyAsync() {
            return base.Channel.GenerateRandomKeyAsync();
        }
        
        public bool SetIV(byte[] input) {
            return base.Channel.SetIV(input);
        }
        
        public System.Threading.Tasks.Task<bool> SetIVAsync(byte[] input) {
            return base.Channel.SetIVAsync(input);
        }
        
        public byte[] GenerateRandomIV() {
            return base.Channel.GenerateRandomIV();
        }
        
        public System.Threading.Tasks.Task<byte[]> GenerateRandomIVAsync() {
            return base.Channel.GenerateRandomIVAsync();
        }
        
        public bool SetAlgorithmProperties(System.Collections.Generic.Dictionary<string, byte[]> specArguments) {
            return base.Channel.SetAlgorithmProperties(specArguments);
        }
        
        public System.Threading.Tasks.Task<bool> SetAlgorithmPropertiesAsync(System.Collections.Generic.Dictionary<string, byte[]> specArguments) {
            return base.Channel.SetAlgorithmPropertiesAsync(specArguments);
        }
        
        public byte[] Crypt(byte[] input) {
            return base.Channel.Crypt(input);
        }
        
        public System.Threading.Tasks.Task<byte[]> CryptAsync(byte[] input) {
            return base.Channel.CryptAsync(input);
        }
        
        public byte[] Decrypt(byte[] output) {
            return base.Channel.Decrypt(output);
        }
        
        public System.Threading.Tasks.Task<byte[]> DecryptAsync(byte[] output) {
            return base.Channel.DecryptAsync(output);
        }
        
        public bool isServiceReady() {
            return base.Channel.isServiceReady();
        }
        
        public System.Threading.Tasks.Task<bool> isServiceReadyAsync() {
            return base.Channel.isServiceReadyAsync();
        }
        
        public bool SetReady(bool ready) {
            return base.Channel.SetReady(ready);
        }
        
        public System.Threading.Tasks.Task<bool> SetReadyAsync(bool ready) {
            return base.Channel.SetReadyAsync(ready);
        }
        
        public string GetData(int value) {
            return base.Channel.GetData(value);
        }
        
        public System.Threading.Tasks.Task<string> GetDataAsync(int value) {
            return base.Channel.GetDataAsync(value);
        }
        
        public CryptoClient.CryptoService.CompositeType GetDataUsingDataContract(CryptoClient.CryptoService.CompositeType composite) {
            return base.Channel.GetDataUsingDataContract(composite);
        }
        
        public System.Threading.Tasks.Task<CryptoClient.CryptoService.CompositeType> GetDataUsingDataContractAsync(CryptoClient.CryptoService.CompositeType composite) {
            return base.Channel.GetDataUsingDataContractAsync(composite);
        }
        
        public bool SaveBytes(byte[] bytes, string dstFullPath) {
            return base.Channel.SaveBytes(bytes, dstFullPath);
        }
        
        public System.Threading.Tasks.Task<bool> SaveBytesAsync(byte[] bytes, string dstFullPath) {
            return base.Channel.SaveBytesAsync(bytes, dstFullPath);
        }
        
        public bool DecryptAndSave(string srcFullPath, string dstFullPath) {
            return base.Channel.DecryptAndSave(srcFullPath, dstFullPath);
        }
        
        public System.Threading.Tasks.Task<bool> DecryptAndSaveAsync(string srcFullPath, string dstFullPath) {
            return base.Channel.DecryptAndSaveAsync(srcFullPath, dstFullPath);
        }
        
        public void SetCryptoLibrarySimpleSubstitution(CryptoLibrary.SimpleSubstitution cryptoLib) {
            base.Channel.SetCryptoLibrarySimpleSubstitution(cryptoLib);
        }
        
        public System.Threading.Tasks.Task SetCryptoLibrarySimpleSubstitutionAsync(CryptoLibrary.SimpleSubstitution cryptoLib) {
            return base.Channel.SetCryptoLibrarySimpleSubstitutionAsync(cryptoLib);
        }
        
        public void SetCryptoLibraryKnapsack(CryptoLibrary.Knapsack cryptoLib) {
            base.Channel.SetCryptoLibraryKnapsack(cryptoLib);
        }
        
        public System.Threading.Tasks.Task SetCryptoLibraryKnapsackAsync(CryptoLibrary.Knapsack cryptoLib) {
            return base.Channel.SetCryptoLibraryKnapsackAsync(cryptoLib);
        }
        
        public void SetCryptoLibraryXXTEA(CryptoLibrary.XXTEA cryptoLib) {
            base.Channel.SetCryptoLibraryXXTEA(cryptoLib);
        }
        
        public System.Threading.Tasks.Task SetCryptoLibraryXXTEAAsync(CryptoLibrary.XXTEA cryptoLib) {
            return base.Channel.SetCryptoLibraryXXTEAAsync(cryptoLib);
        }
        
        public void SetCryptoLibrarySHA2(CryptoLibrary.SHA2 cryptoLib) {
            base.Channel.SetCryptoLibrarySHA2(cryptoLib);
        }
        
        public System.Threading.Tasks.Task SetCryptoLibrarySHA2Async(CryptoLibrary.SHA2 cryptoLib) {
            return base.Channel.SetCryptoLibrarySHA2Async(cryptoLib);
        }
    }
}
