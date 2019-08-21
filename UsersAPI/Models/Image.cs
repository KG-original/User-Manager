using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using UserManager.Models;

namespace UsersAPI.Models
{
    public class Image
    {
        [Key]
        public int ImageId { get; set; }
        public string AboutUser { get; set; }
        public string ImageName { get; set; }

        [ForeignKey("UsersName")]
        public string Name { get; set; }
        public Users Users { get; set; }
    }
}
