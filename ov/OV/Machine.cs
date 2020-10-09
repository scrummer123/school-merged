namespace OV
{
    class Machine
    {
        public void AddSaldo(Card card, double Saldo)
        {
            card.Saldo = card.Saldo + Saldo;
        }

        public void PrintSaldo(Card card)
        {
            System.Console.WriteLine("Saldo: {0}", card.Saldo);
        }
    }
}
