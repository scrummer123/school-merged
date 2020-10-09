namespace OV
{
    class Card
    {
        private int cardNumber;
        private double saldo;
        private bool checkedIn;

        // Constructor
        public Card(double Saldo, int CardNumber, bool CheckedIn)
        {
            this.saldo = Saldo;
            this.cardNumber = CardNumber;
            this.checkedIn = CheckedIn;
        }

        public double Saldo { get => saldo; set => saldo = value; }
        public int CardNumber { get => cardNumber; set => cardNumber = value; }
        public bool CheckedIn { get => checkedIn; set => checkedIn = value; }
    }
}
