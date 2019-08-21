using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using UsersAPI.Models;


namespace UserManager.Models
{
    public class Users
    {
        [Key]
        public string Name { get; set; }
        public string Surname { get; set; }
        public string IdNumber { get; set; }
        public string PassportNumber { get; set; }

        public ICollection<ContactDetails> ContactDetails { get; set; }
    }
}
