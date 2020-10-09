using System;

namespace OV
{
    class Program
    {
        static void Main(string[] args)
        {
            Card card1 = new Card(12.34, 1, false);
            Card card2 = new Card(12.34, 2, false);
            Gate gate1 = new Gate(12.30);
            Machine machine1 = new Machine();

            Console.WriteLine(card1.CheckedIn);
            machine1.PrintSaldo(card1);

            machine1.AddSaldo(card1, 300);
            machine1.PrintSaldo(card1);

            gate1.CheckIn(card1);
            Console.WriteLine("Ingecheckt: {0}", card1.CheckedIn);

            Console.WriteLine(card1.CardNumber);
            Console.WriteLine(card2.CardNumber);

            Console.ReadLine();
        }
    }
}