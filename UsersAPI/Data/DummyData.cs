using UserManager.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UsersAPI.Data
{
    public class DummyData
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<UsersAPIContext>();
                context.Database.EnsureCreated();
                //context.Database.Migrate();

                // Look for any ailments
                if (context.ContactDetails != null && context.ContactDetails.Any())
                    return;   // DB has already been seeded

                var contacts = GetContactDetails().ToArray();
                context.ContactDetails.AddRange(contacts);
                context.SaveChanges();

                var users = GetUsers(context).ToArray();
                context.Users.AddRange(users);
                context.SaveChanges();
            }
        }

        public static List<ContactDetails> GetContactDetails()
        {
            List<ContactDetails> contactdetails = new List<ContactDetails>() {
              new ContactDetails { MobileNumber="0812345678", EmailAddress = "a@gmail.com"},
              new ContactDetails { MobileNumber="0832345678", EmailAddress = "c@gmail.com"},
              new ContactDetails { MobileNumber="0842345678", EmailAddress = "d@gmail.com"}
            };
            return contactdetails;
        }

        public static List<Users> GetUsers(UsersAPIContext db)
        {
            List<Users> users = new List<Users>() {
                new Users {
                Name = "Jim",
                Surname = "Doe",
                IdNumber = "2345678989098",
                PassportNumber = "0987670987325",
                ContactDetails = new List<ContactDetails>(db.ContactDetails.Take(1)),
                },
                new Users {
                Name = "John",
                Surname = "Doe",
                IdNumber = "2345678989098",
                PassportNumber = "0987670987325",
                ContactDetails = new List<ContactDetails>(db.ContactDetails.Skip(1).Take(1)),
                },
                new Users {
                Name = "Jane",
                Surname = "Doe",
                IdNumber = "2345678989098",
                PassportNumber = "0987670987325",
                ContactDetails = new List<ContactDetails>(db.ContactDetails.Skip(2).Take(1)),
                }
            };
            return users;
        }
    }
}