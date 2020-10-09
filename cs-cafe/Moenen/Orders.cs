using System;
using System.Collections.Generic;

namespace Moenen
{
    static class Orders
    {
        private static Dictionary<string, Drinks[]> orderable = new Dictionary<string, Drinks[]>()
        {
            {
                "drinks",
                new Drinks[]
                {
                    new Drinks("Hertog Jan karakter", 3.90),
                    new Drinks("La Trappe", 4.50),
                    new Drinks("PauwelKwak", 4.60),
                    new Drinks("Orval", 5.30),
                    new Drinks("Vedett IPA", 3.90),
                    new Drinks("Jopen Mooie Nel", 4.90),
                    new Drinks("Troubadour Magma", 3.80),
                    new Drinks("Duvel, Jupiler", 2.90),
                    new Drinks("Hoegaarden", 3.10),
                    new Drinks("Corona", 3.90),
                }
            }
        };
        public static Dictionary<string, Drinks[]> Orderable
        {
            get => orderable;
            set => orderable = value;
        }
        
        static Orders()
        {
            
        }
    }
}