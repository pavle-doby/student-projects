using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CryptoLibrary
{
    public class PCBCmod
    {
        static string key;
        static string text;

        PCBCmod() { }

        public static byte[] xorIt(byte[] text, byte[] key)
        {
            byte[] xor = new byte[text.Length];
            for (int i = 0; i < text.Length; i++)
            {
                xor[i] = (byte)(text[i] ^ key[i % key.Length]);
            }
            return xor;
        }
        public static byte[] xorIt(byte[] cipher, byte[] text, byte[] key, int i, int n)
        {
            for (int j = i; j < i + n; j++)
            {
                cipher[j] = (byte)(text[j] ^ key[j % key.Length]);
            }
            return cipher;
        }
        public static byte[] xorIt(byte[] text, byte[] key, int i, int n)
        {
            byte[] xor = new byte[n];
            int k = 0;
            for (int j = i; j < i+n-1; j++)
            {
                xor[k % xor.Length] += (byte)(text[j % text.Length] ^ key[j % key.Length]);
                k++;
            }
            return xor;
        }
        public static string xorIt(string text, byte[] key)
        {
            byte[] txtBytes = Encoding.Unicode.GetBytes(text);
            byte[] xor = new byte[txtBytes.Length];

            for (int i = 0; i < text.Length; i++)
            {
                xor[i] = (byte)(txtBytes[i] ^ key[i % key.Length]);
            }

            return Encoding.Unicode.GetString(xor,0,xor.Length);
        }
        public static byte[] xorIt(string text, string key)
        {
            byte[] txtBytes = Encoding.Unicode.GetBytes(text);
            byte[] keyBytes = Encoding.Unicode.GetBytes(key);
            byte[] xor = new byte[txtBytes.Length];

            for (int i = 0; i < text.Length; i++)
            {
                xor[i] = (byte)(txtBytes[i] ^ keyBytes[i % key.Length]);
            }

            return xor;
        }
    }
}
