using UserManager.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UsersAPI.Data
{
    public class UsersAPIContext : DbContext
    {
        public UsersAPIContext(DbContextOptions options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<ContactDetails> ContactDetails { get; set; }
    }
}