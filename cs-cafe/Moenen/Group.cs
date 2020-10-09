using System;
 using System.Collections.Generic;
 
 namespace Moenen
 {
     public class Group
     {
         private bool inside = false;
         public bool Inside
         {
             get => inside;
             set => inside = value;
         }

         private string name;
         public string Name
         {
             get => name;
             set => name = value;
         }

         private int phone;
         public int Phone
         {
             get => phone;
             set => phone = value;
         }
         
         private int guests;
         public int Guests
         {
             get => guests;
             set => guests = value;
         }
         
         private int tableNr;
         public int TableNr
         {
             get => tableNr;
             set => tableNr = value;
         }


         public Group(Table table, string group, params Guest[] collectedGuests)
         {
             if(group == null)
             {
                 Console.WriteLine("Geen naam opgegeven.");
                 Console.ReadLine();
             }
             this.TableNr = table.Number;
             for (int i = 0; i < collectedGuests.Length; i++)
             {
                 this.guests++;
             }
         }
     }
 }