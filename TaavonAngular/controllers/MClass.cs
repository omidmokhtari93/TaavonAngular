using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Taavon_Web_Application
{
    public class MClass
    {
    }

    public class Companies
    {
        public int OfficeId { get; set; }
        public string OfficeName { get; set; }
        public string Address { get; set; }
        public string Tell { get; set; }
        public string Manager { get; set; }
        public string Comment { get; set; }
        public string Andicator { get; set; }
        public int Active { get; set; }
        public int Internal { get; set; }
        public string Logo { get; set; }
    }

    public class UsersModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string UsrLvl { get; set; }
        public int UserLevel { get; set; }
        public int Permit { get; set; }
        public int OfficeId { get; set; }
        public string OfficeName { get; set; }
        public string Tell { get; set; }
        public string Email { get; set; }
        public string Sign { get; set; }
    }
}
