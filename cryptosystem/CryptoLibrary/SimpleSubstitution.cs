using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace CryptoLibrary
{
    [DataContract]
    public class SimpleSubstitution : ICryptoLibrary
    {
        byte[] key;
        byte[] iv;
        IDictionary<string, byte[]> specArguments;

        #region Getters/Setters
        [DataMember]
        public byte[] Key
        {
            get
            {
                return key;
            }

            set
            {
                key = value;
            }
        }

        [DataMember]
        public byte[] Iv
        {
            get
            {
                return iv;
            }

            set
            {
                iv = value;
            }
        }

        [DataMember]
        public IDictionary<string, byte[]> SpecArguments
        {
            get
            {
                return specArguments;
            }

            set
            {
                specArguments = value;
            }
        }

        #endregion

        public SimpleSubstitution()
        {
            this.Key = new byte[] { 51, 0 }; // Cezarov kljuc
        }
        public SimpleSubstitution(byte[] key, byte[] iv, IDictionary<string, byte[]> specArguments)
        {
            this.Key = key;
            this.Iv = iv;
            this.SpecArguments = specArguments;
        }

        public byte[] Crypt(byte[] input)
        {
            string encrypt = Encoding.Unicode.GetString(input, 0, input.Length);
            string shift = "a";
            bool tbNull = encrypt == "";

            string keyString = Encoding.Unicode.GetString(Key,0,Key.Length);
            int keyInt = Convert.ToInt32(keyString);

            if (tbNull)
                return Encoding.Unicode.GetBytes("There is nothing to encrypt.");
            else
            {
                char[] array = encrypt.ToCharArray();

                for (int i = 0; i < array.Length; i++)
                {
                    int num = (int)array[i];
                    if (num >= 'a' && num <= 'z')
                    {

                        num += (Convert.ToInt32(shift.ToLower()[0]) - Convert.ToInt32('a') + keyInt);

                        if (num > 'z')
                        {
                            num = num - 26;
                        }
                    }
                    else if (num >= 'A' && num <= 'Z')
                    {
                        num += (Convert.ToInt32(shift.ToUpper()[0]) - Convert.ToInt32('A') + keyInt);

                        if (num > 'Z')
                        {
                            num = num - 26;
                        }
                    }
                    array[i] = (char)num;
                }

                return Encoding.Unicode.GetBytes(array);
            }
        }

        public byte[] Decrypt(byte[] output)
        {
            string decrypt = Encoding.Unicode.GetString(output,0,output.Length);

            string keyString = Encoding.Unicode.GetString(Key, 0, Key.Length);
            int keyInt = Convert.ToInt32(keyString);

            string shift = "a";

            bool tbNull = decrypt == "";

            if (tbNull)
                return Encoding.Unicode.GetBytes("There is nothing to decrypt.".ToCharArray());

            else
            {
                char[] array = decrypt.ToCharArray();
                for (int i = 0; i < array.Length; i++)
                {
                    int num = (int)array[i];
                    if (num >= 'a' && num <= 'z')
                    {
                        num -= (Convert.ToInt32(shift.ToLower()[0]) - Convert.ToInt32('a') + keyInt);

                        if (num > 'z')
                            num = num - 26;

                        if (num < 'a')
                            num = num + 26;
                    }
                    else if (num >= 'A' && num <= 'Z')
                    {
                        num -= (Convert.ToInt32(shift.ToString().ToUpper()[0]) - Convert.ToInt32('A') + keyInt);

                        if (num > 'Z')
                            num = num - 26;

                        if (num < 'A')
                            num = num + 26;
                    }
                    array[i] = (char)num;
                }

                return Encoding.Unicode.GetBytes(array);
            }
        }

        public byte[] GenerateRandomIV()
        {
            throw new NotImplementedException();
        }

        public byte[] GenerateRandomKey()
        {
            Random rnd = new Random();
            int br = rnd.Next(1, 26);
            Key = Encoding.Unicode.GetBytes(br.ToString());
            return Key;
        }

        public bool SetAlgorithmProperties(IDictionary<string, byte[]> specArguments)
        {
            throw new NotImplementedException();
        }

        public bool SetIV(byte[] input)
        {
            throw new NotImplementedException();
        }

        public bool SetKey(byte[] input)
        {
            int keyInt;
            string str = Encoding.Unicode.GetString(input, 0, input.Length);
            if (str.Length > 2)
                return false;
            try
            {
                keyInt = Convert.ToInt32(str);
            }
            catch (Exception ex)
            {
                return false;
            }
            if (keyInt > 26 || keyInt < 1)
                return false;

            this.Key = input;
            return true;
        }
    }
}
