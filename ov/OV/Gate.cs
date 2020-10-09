using System;

namespace OV
{
    class Gate
    {
        private double startPrice;

        public Gate(double StartPrice)
        {
            this.startPrice = StartPrice;
        }

        public void PrintSaldo(Card card)
        {
            Console.WriteLine("Your current saldo is: {0}", card.Saldo);
        }

        // Check in price = 1.50
        public void CheckIn(Card card)
        {
            card.Saldo = card.Saldo - 1.50;
            card.CheckedIn = true;
        }
    }
}
