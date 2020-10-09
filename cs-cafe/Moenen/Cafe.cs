using System;

namespace Moenen
{
    static class Cafe
    {
        private static String[] groupsInfo = new String[100];
        public static String[] GroupsInfo
        {
            get => groupsInfo;
            set => groupsInfo = value;
        }

        public static void getTables(params Group[] groups)
        {
            for (int i = 0; i < groups.Length; i++)
            {
                Group group = groups[i];
                GroupsInfo[i] = String.Format("Group info: \n" +
                                              "Name: {0} \n" +
                                              "Inside: {1} \n" +
                                              "Phone: {2} \n" +
                                              "Guests: {3} \n" +
                                              "Table: {4}", group.Name, group.Inside, group.Phone, group.Guests, group.TableNr);
                Console.WriteLine(GroupsInfo[i]);
            }
        }

        public static void addGroup(Group group)
        {
            
        }
    }
}