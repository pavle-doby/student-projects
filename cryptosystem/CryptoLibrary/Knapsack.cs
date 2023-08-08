using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;

namespace CryptoLibrary
{
    [DataContract]
    public class Knapsack : ICryptoLibrary
    {
        byte[] key;
        byte[] iv;
        IDictionary<string, byte[]> specArguments;

        int[] privateKeyInt ;
        int n ;
        int m ;
        int[] publicKeyInt;
        int im;
        int sum;


        #region Getters/Setters
        [DataMember]
        public byte[] proba;

        [DataMember]
        public int[] PrivateKeyInt
        {
            get
            {
                return privateKeyInt;
            }

            set
            {
                privateKeyInt = value;
            }
        }

        [DataMember]
        public int N
        {
            get
            {
                return n;
            }

            set
            {
                n = value;
            }
        }

        [DataMember]
        public int M
        {
            get
            {
                return m;
            }

            set
            {
                m = value;
            }
        }

        [DataMember]
        public int[] PublicKeyInt
        {
            get
            {
                return publicKeyInt;
            }

            set
            {
                publicKeyInt = value;
            }
        }

        [DataMember]
        public int Im
        {
            get
            {
                return im;
            }

            set
            {
                im = value;
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

        public int Sum
        {
            get
            {
                return sum;
            }

            set
            {
                sum = value;
            }
        }
        #endregion

        public Knapsack()
        {
            SpecArguments = new Dictionary<string, byte[]>();
            PrivateKeyInt = new int[8];
            PublicKeyInt = new int[8];
            Iv = new byte[]{ 0 };
        }
        public int GetIM(int m,int n)
        {
            int im = 1;

            while (((im * m) % n != 1) && (m < n))
            {
                im++;
            }

            if ((im * m) % n == 1)
                return im;
            return -1;
        }
        public int[] GetPublicKey(int[] privKey, int m,int n)
        {
            int[] pubKey = new int[privKey.Length];

            for (int i = 0; i < privKey.Length; i++)
                pubKey[i] = (privKey[i] * m) % n;

            return pubKey;
        }

        public Knapsack(byte[] key, byte[] iv, IDictionary<string, byte[]> specArguments)
        {
            this.Key = key;
            this.Iv = iv;
            this.SpecArguments = specArguments;
        }
        public static string FromDeciamlToBinary(byte binary)
        {
            if (binary < 0)
            {
                return null;
            }

            string binarystring = "";
            byte factor = 128;

            for (int i = 0; i < 8; i++)
            {
                if (binary >= factor)
                {
                    binary -= factor;
                    binarystring += "1";
                }
                else
                {
                    binarystring += "0";
                }
                factor /= 2;
            }

            return binarystring;
        }
        public byte[] Crypt(byte[] input)
        {
            string output = "";
            foreach (byte b in input)
            {
                if (b == 0)
                    continue;

                string s = FromDeciamlToBinary(b);

                output += this.Crypt(s) + " "; //magic happens

            }
            return Encoding.Unicode.GetBytes(output.ToCharArray());
        }
        private int Crypt(string byteStr)
        {
            int C = 0;

            for (int i = 0; i < byteStr.Length; i++)
            {
                char c = byteStr[i];
                if (c == '1')
                {
                    C += Convert.ToInt32(this.PublicKeyInt[i]);
                }
            }

            return C;
        }


        public byte[] Decrypt(byte[] input)
        {

            string inString = Encoding.Unicode.GetString(input, 0, input.Length);
            string[] codes = inString.Split(' ');

            string outputStr = "";
            foreach (string s in codes)
            {
                try
                {
                    int C = Convert.ToInt32(s);
                    outputStr += System.Convert.ToChar(System.Convert.ToInt32(this.Decrypt(C), 2));
                }
                catch { }

            }

            return Encoding.Unicode.GetBytes(outputStr.ToCharArray());
        }
        private string Decrypt(int C)
        {
            int d = (Im * C) % N;
            int startIndex = this.PrivateKeyInt.Length - 1;
            string decryptedStr = "";

            while (startIndex >= 0 && d > 0)
            {
                int val = (int)this.PrivateKeyInt[startIndex];
                if (val > d)
                {
                    decryptedStr = "0" + decryptedStr;
                }
                else
                {
                    decryptedStr = "1" + decryptedStr;
                    d -= val;
                }

                startIndex--;
            }

            return decryptedStr;
        }

        public byte[] GenerateRandomIV()
        {
            this.Iv = new byte[] { 1, 0, 1, 1, 1 }; //23 :D 
            return this.Iv;
        }

        public byte[] GenerateRandomKey()
        {
            return new byte[] { 0 };
        }

        public bool SetAlgorithmProperties(IDictionary<string, byte[]> specArg)
        {
            if (specArg.Count != 5)
                return false;
            this.SpecArguments = specArg; 
            string[] strArray;

            string strPrivKey = Encoding.Unicode.GetString(specArg["privateKey"], 0, specArg["privateKey"].Length);
            strArray = strPrivKey.Split(',');
            setIntKeyFromStringArray(strArray, strArray.Length, privateKeyInt);

            if (!isArraySuperRising(privateKeyInt, privateKeyInt.Length, 0, 0))
                return false;

            string strPublicKey = Encoding.Unicode.GetString(specArg["publicKey"], 0, specArg["publicKey"].Length);
            strArray = strPublicKey.Split(',');
            setIntKeyFromStringArray(strArray, strArray.Length, PublicKeyInt);

            this.M = Convert.ToInt32(Encoding.Unicode.GetString(specArg["m"], 0, specArg["m"].Length));
            if (!isPrime(m, 3))
                return false;
            this.Im = Convert.ToInt32(Encoding.Unicode.GetString(specArg["im"], 0, specArg["im"].Length));

            this.N = Convert.ToInt32(Encoding.Unicode.GetString(specArg["n"], 0, specArg["n"].Length));

            return areCoprime(n,m);
        }
        private bool areCoprime(int a, int b)
        {
            int veci = a > b ? a : b;
            int manji = a < b ? a : b;

            return (veci % manji != 0) && (isPrime(veci) || isPrime(manji)) ;

        }
        public int generateM(int n)
        {
            return generateM(n, generatePrimeNumber(7));
        }
        private int generateM(int n, int m)
        {
            if (n % m == 0)
                return generatePrimeNumber(m+1);
            return m;
        }
        public int generatePrimeNumber(int start)
        {
            Random rnd = new Random();
            int rndNum = rnd.Next(start, 232);
            return generatePrimeNumber2(rndNum);
        }
        private int generatePrimeNumber2(int rnd)
        {
            if (isPrime(rnd))
                return rnd;
            return generatePrimeNumber2(rnd + 1);
        }
        public bool isPrime(int number)
        {
            return isPrime(number, 3);
        }
        private bool isPrime(int number, int i)
        {
            if (number <= 1 || number % 2 == 0) return false;
            if (number == 2) return true;

            int boundary = (int)Math.Floor(Math.Sqrt(number));

            if (i > boundary)
                return true;
            else if (number % i == 0)
                return false;
            else
                return isPrime(number, i + 2);
        }
        public bool isArraySuperRising(int[] array, int n)
        {
            return isArraySuperRising(array, n, 0, 0);
        }
        private bool isArraySuperRising(int[] array, int n, int sum, int i)
        {
            if (n == 0)
                return true;
            if (sum < array[i])
                return isArraySuperRising(array, --n, sum + array[i], ++i);
            else
                return false;
        }
        public int[] generateSuperRisingArray(int[] array, int n)
        {
            Random rnd = new Random();
            int rndNum = rnd.Next(1, 5);
            return generateSuperRisingArray(array, rndNum, n, 0, 0, rnd);
        }
        private int[] generateSuperRisingArray(int[] array,int start, int n, int sum, int i,Random rnd)
        {
            if (n == 0)
                return array;
            start += this.sum + rnd.Next(1,5);
            this.sum += start;
            array[i] = start;
            return generateSuperRisingArray(array,start, --n, this.sum, ++i, rnd);

        }
        public bool setIntKeyFromStringArray(string[] strArray, int n, int[] key)
        {
            int nn = n - 1;
            if (nn == -1)
                return true;
            try
            {
                key[nn] = Convert.ToInt32(strArray[nn]);
            }
            catch (Exception ex)
            {
                return false;
            }
            return setIntKeyFromStringArray(strArray, nn, key);
        }
        public bool SetIV(byte[] input)
        {
            Iv = input;
            return true;
        }

        public bool SetKey(byte[] input)
        {
            bool good = false;
            string[] strArray;
            try
            {
                string strPublicKey = Encoding.Unicode.GetString(input, 0, input.Length);
                strArray = strPublicKey.Split(',');
                good = setIntKeyFromStringArray(strArray, strArray.Length, this.publicKeyInt);
            }
            catch (Exception ex)
            {
                return false;
            }

            if (strArray.Length != 8 || !good)
                return false;

            this.Key = input;
            SpecArguments["publicKey"] = input;

            return good;
        }
    }
}
