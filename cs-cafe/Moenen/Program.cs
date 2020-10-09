using System;
using Microsoft.VisualBasic;

namespace Moenen
{
    class Program
    {
        static void Main(string[] args)
        {
            Table.createTables();
            
            Guest guest = new Guest();
            Guest guest1 = new Guest();

            Table table = Table.get(50);
            // new Group = reservering
            Group group = new Group(table, "test", guest, guest1);
            group.Name = "Testgroup";
            
            Drinks drink1 = Orders.Orderable["drinks"][0];
            Drinks drink2 = Orders.Orderable["drinks"][1];
            Drinks drink3 = Orders.Orderable["drinks"][5];
            Drinks drink4 = Orders.Orderable["drinks"][6];
            
            TableOrders tableOrder = new TableOrders(drink1, drink2, drink3);
            TableOrders tableOrder2 = new TableOrders(drink1, drink4, drink3);
            // Zelfbedachte functionaliteit
            // tableOrder.getTableDrinks();
            // tableOrder2.getTableDrinks();
            // TableOrders.getTotalDrinksPrice();
            // Cafe.getTables(group);
        }
    }
}