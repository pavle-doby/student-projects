using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace CryptoLibrary
{
    [DataContract]
    public class XXTEA : ICryptoLibrary
    {
        byte[] iv;

        byte[] key;
        IDictionary<string, byte[]> sepcArguments;

        byte[] newIV;

        string pass;

        private const int blockSize = 16;

        #region Getters/Setters
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
        public IDictionary<string, byte[]> SepcArguments
        {
            get
            {
                return sepcArguments;
            }

            set
            {
                sepcArguments = value;
            }
        }

        [DataMember]
        public byte[] NewIV
        {
            get
            {
                return newIV;
            }

            set
            {
                newIV = value;
            }
        }

        [DataMember]
        public string Pass
        {
            get
            {
                return pass;
            }

            set
            {
                pass = value;
            }
        }

        [DataMember]
        public static int BlockSize
        {
            get
            {
                return blockSize;
            }
        }
        #endregion


        public XXTEA()
        {
            Iv = new byte[] { 0 };
            NewIV = new byte[] { 0 };
            Key = GenerateRandomKey();
        }

        public bool SetKey(byte[] input)
        {
            Key = input;
            string strKey = Encoding.Unicode.GetString(Key, 0, Key.Length);
            return strKey.Length >= 16;
        }
        public bool SetKey(string input)
        {
            Pass = input;
            return true;
        }

        public byte[] GenerateRandomKey()
        {
            Random rnd = new Random();
            int rndInt = rnd.Next(10000000, 99999999);
            int rndInt2 = rnd.Next(10000000, 99999999);
            string strRnd = rndInt + "" + rndInt2;
            this.Key = Encoding.Unicode.GetBytes(strRnd);
            return this.Key;
        }

        public bool SetIV(byte[] input)
        {
            Iv = input;
            return true;
        }

        public byte[] GenerateRandomIV()
        {
            this.Iv = new byte[] { 1, 0, 1, 1, 1 }; //23 :D 
            return this.Iv;
        }

        public bool SetAlgorithmProperties(IDictionary<string, byte[]> specArguments)
        {
            throw new NotImplementedException();
        }

        public byte[] CryptWithPCBC(byte[] input)
        {
            byte[] forCipher = new byte[8];
            byte[] cipher = new byte[input.Length];
            byte[] newIV = Iv;

            for (int i = 0; i < (input.Length / BlockSize) * BlockSize; i += BlockSize)
            {
                //forCipher = PCBCmod.xorIt(input, newIV, i, 8);
                forCipher = PCBCmod.xorIt(input, Iv, i, BlockSize);


                forCipher = this.Crypt(forCipher);
                Buffer.BlockCopy(forCipher, 0, cipher, i, BlockSize);

                //newIV = PCBCmod.xorIt(input, forCipher, i, 8);
                Iv = PCBCmod.xorIt(input, forCipher, i, BlockSize);

            }

            if (input.Length % 8 == 0)
            {
                return cipher;
            }
            else
            {
                int i = input.Length % 8;
                int n = input.Length;
                forCipher = PCBCmod.xorIt(input, Iv, n-i, i);

                forCipher = this.Crypt(forCipher);
                Buffer.BlockCopy(forCipher, 0, cipher, n-i, i);

                //newIV = PCBCmod.xorIt(input, forCipher, i, 8);
                Iv = PCBCmod.xorIt(input, forCipher, n-i, i);

            }
            return cipher;
        }
        public byte[] DecryptWithPCBC(byte[] input)
        {
            byte[] cipherText = new byte[8];
            byte[] oldCipherText = new byte[8];
            byte[] plain = new byte[input.Length];

            if (input.Length % 8 != 0)
            {
                int i = input.Length % 8; // i = 10 % 8  = 2
                int nGranica = input.Length - i;
                int n = input.Length;

                int k1 = 8;
                for (int k = n-1; k >= nGranica; k--)
                {
                    cipherText[k1--] = input[k];
                }
                oldCipherText = cipherText;

                cipherText = this.Decrypt(cipherText);
                cipherText = PCBCmod.xorIt(cipherText, Iv); //dekriptovan 
                string strDec = Encoding.Unicode.GetString(cipherText, k1+1, cipherText.Length);
                Buffer.BlockCopy(cipherText, 0, plain, i - 8, 8); //copy u plain

                Iv = PCBCmod.xorIt(oldCipherText, plain, i - 8, 8);
            }
            for (int i = (input.Length / 8) * 8 -1 ; i >= 0; i -= 8)
            {
                int k1 = i;
                for(int k = 7; k >= 0; k--)
                {
                    cipherText[k] = input[k1--];
                }
                oldCipherText = cipherText;

                cipherText = this.Decrypt(cipherText);
                cipherText = PCBCmod.xorIt(cipherText, Iv); //dekriptovan 

                string strDec = Encoding.Unicode.GetString(cipherText, 0, 8);
                Buffer.BlockCopy(cipherText, 0, plain, i-8 + 1, 8);

                Iv = PCBCmod.xorIt(oldCipherText, plain, i-8 + 1, 8);
            }

            
            return plain;
        }
        public byte[] Crypt(byte[] input)
        {
            if (Key == null)
                return new byte[] { 0 };

            string strInput = Encoding.Unicode.GetString(input, 0, input.Length) + " ";
            Pass = Encoding.Unicode.GetString(Key, 0, Key.Length);
            strInput = Encrypt(strInput, Pass);
            return Encoding.Unicode.GetBytes(strInput);
        }

        public byte[] Decrypt(byte[] output)
        {
            string strOutput = Encoding.Unicode.GetString(output, 0, output.Length) + " ";
            Pass = Encoding.Unicode.GetString(Key, 0, Key.Length);
            strOutput = Decrypt(strOutput, Pass);
            return Encoding.Unicode.GetBytes(strOutput);
        }

        private String Encrypt(String text, String password)
        {

            if (text.Length == 0)
                return "";  // nothing to encrypt

            // Check the user has passed a large enough salt to encrypt the data
            if (password.Length < 8)
            {
                throw new ArgumentException("The salt for encryption is too short");
            }

            // The salt needs to be at least 16 chars in size so if less than 16 double it until it reaches that size
            while (password.Length < 16) { password += password; }
            this.Pass = password;

            // Convert the text into UTF-8 encoding (byte size)
            var v = ToLongs(Encoding.Unicode.GetBytes(text));

            // algorithm doesn't work for n<2 so fudge by adding an ascii null
            if (v.Length == 1) { v[0] = 0; }

            // Simply convert first 16 chars of password as key
            var k = ToLongs(Encoding.Unicode.GetBytes(password.Substring(0, 16)));

            // Use UInt32 as the original is based on 'unsigned long' in C, which is equiv to UInt32 in .Net (and not ulong)
            UInt32 n = (UInt32)v.Length,
                   z = v[n - 1],
                   y = v[0],
                   delta = 0x9e3779b9,
                   e,
                   q = (UInt32)(6 + (52 / n)),
                   sum = 0,
                   p = 0;


            while (q-- > 0)
            {
                sum += delta;
                e = sum >> 2 & 3;


                for (p = 0; p < (n - 1); p++)
                {


                    y = v[(p + 1)];
                    z = v[p] += (z >> 5 ^ y << 2) + (y >> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
                }

                y = v[0];
                z = v[n - 1] += (z >> 5 ^ y << 2) + (y >> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);

            }

            return Convert.ToBase64String(ToBytes(v));
        }

        private String Decrypt(String ciphertext, String password)
        {
            password = Pass;
            if (ciphertext.Length == 0) { return ""; }

            var v = ToLongs(Convert.FromBase64String(ciphertext));

            var k = ToLongs(Encoding.Unicode.GetBytes(password.Substring(0, 16)));

            UInt32 n = (UInt32)v.Length,
                   z = v[n - 1],
                   y = v[0],
                   delta = 0x9e3779b9,
                   e,
                   q = (UInt32)(6 + (52 / n)),
                   sum = q * delta,
                   p = 0;


            while (sum != 0)
            {
                e = sum >> 2 & 3;

                for (p = (n - 1); p > 0; p--)
                {
                    z = v[p - 1];
                    y = v[p] -= (z >> 5 ^ y << 2) + (y >> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);
                }

                z = v[n - 1];
                y = v[0] -= (z >> 5 ^ y << 2) + (y >> 3 ^ z << 4) ^ (sum ^ y) + (k[p & 3 ^ e] ^ z);

                sum -= delta;
            }

            byte[] bytes = ToBytes(v);
            var plaintext = Encoding.Unicode.GetString(bytes, 0, bytes.Length);

            return plaintext;
        }


        private UInt32[] ToLongs(byte[] s)
        {

            // note chars must be within ISO-8859-1 (with Unicode code-point < 256) to fit 4/long
            var l = new UInt32[(int)Math.Ceiling((s.Length / 4))]; //izmena

            // Create an array of long, each long holding the data of 4 characters, if the last block is less than 4
            // characters in length, fill with ascii null values
            for (int i = 0; i < l.Length; i++)
            {
                // Note: little-endian encoding - endianness is irrelevant as long as it is the same in ToBytes()
                l[i] = ((s[i * 4])) +
                       ((i * 4 + 1) >= s.Length ? (UInt32)0 << 8 : ((UInt32)s[i * 4 + 1] << 8)) +
                       ((i * 4 + 2) >= s.Length ? (UInt32)0 << 16 : ((UInt32)s[i * 4 + 2] << 16)) +
                       ((i * 4 + 3) >= s.Length ? (UInt32)0 << 24 : ((UInt32)s[i * 4 + 3] << 24));
            }

            return l;
        }


        private byte[] ToBytes(UInt32[] l)
        {
            byte[] b = new byte[l.Length * 4];

            // Split each long value into 4 separate characters (bytes) using the same format as ToLongs()
            for (Int32 i = 0; i < l.Length; i++)
            {
                b[(i * 4)] = (byte)(l[i] & 0xFF);
                b[(i * 4) + 1] = (byte)(l[i] >> (8 & 0xFF));
                b[(i * 4) + 2] = (byte)(l[i] >> (16 & 0xFF));
                b[(i * 4) + 3] = (byte)(l[i] >> (24 & 0xFF));
            }
            return b;
        }
    }
}
