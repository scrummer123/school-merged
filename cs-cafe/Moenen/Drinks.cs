namespace Moenen
{
    public class Drinks
    {
        private string name;
        public string Name
        {
            get => name;
            set => name = value;
        }
        
        private double price;
        public double Price
        {
            get => price;
            set => price = value;
        }

        public Drinks(string name, double price)
        {
            this.name = name;
            this.price = price;
        }
    }
}