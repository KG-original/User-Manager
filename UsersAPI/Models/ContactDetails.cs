using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace UserManager.Models
{
    public class ContactDetails
    {
        [Key]
        public int Id { get; set; }
        public string MobileNumber { get; set; }
        public string EmailAddress { get; set; }
        
    }
}
