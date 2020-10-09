using System;
using System.Collections.Generic;

namespace Moenen
{
    public class TableOrders
    {
        private static List<Drinks> cafeDrinks = new List<Drinks>();
        private List<Drinks> tableDrinks = new List<Drinks>();
        
        public TableOrders(params Drinks[] drinks)
        {
            for (int i = 0; i < drinks.Length; i++)
            {
                // Static property for overview of all drinks in the whole cafe. (every single table)
                cafeDrinks.Add(drinks[i]);
                this.tableDrinks.Add(drinks[i]);
            }
        }

        public static void getCafeDrinks()
        {
            for (int i = 0; i < cafeDrinks.Count; i++)
            {
                Drinks currentDrink = cafeDrinks[i];
                Console.WriteLine("Drink name: {0} \n" +
                                                "Drink price: {1} \n" +
                                                "------------------- \n", currentDrink.Name, currentDrink.Price);
            }
        }

        public void getTableDrinks()
        {
            for (int i = 0; i < this.tableDrinks.Count; i++)
            {
                Drinks currentDrink = this.tableDrinks[i];
                Console.WriteLine("Drink name: {0} \n" +
                                                "Drink price: {1} \n" +
                                                "------------------- \n", currentDrink.Name, currentDrink.Price);
            }
        }

        public static void getTotalDrinksPrice()
        {
            double total = 0;
            for (int i = 0; i < cafeDrinks.Count; i++)
            {
                Drinks currentDrink = cafeDrinks[i];
                total += currentDrink.Price;
            }
            Console.WriteLine("Total prices of the drinks: {0}", total);
        }
    }
}