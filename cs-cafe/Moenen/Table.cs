using System;
using System.Collections;
using System.Runtime.CompilerServices;

namespace Moenen
{
    public class Table
    {
        private static Table[] Tables = new Table[100];
        private static Table[] Occupied = new Table[100];
        
        private int number;
        public int Number
        {
            get => number;
            set => number = value;
        }

        public static void createTables()
        {
            for (int i = 0; i < 100; i++)
            {
                Tables[i] = new Table();
            }
        }

        public static Table get(int tableNumber)
        {
            int input = tableNumber;
            while (Occupied[input] != null)
            {
                Console.WriteLine("Tafel is bezet! Probeer een ander nr...");
                input = Int16.Parse(Console.ReadLine());
            }
            Occupied[input] = Tables[input];
            Tables[input].Number = input;

            return Tables[input];
        }
    }
}