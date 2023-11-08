using Microsoft.AspNetCore.DataProtection.AuthenticatedEncryption.ConfigurationModel;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Cryptography;

namespace diagnoser.Model
{
    public class Brukere
    {
        public int id { get; set; }
        public string fornavn { get; set; }
        public string etternavn { get; set; }
        public string alder { get; set; }
        public string email { get; set; }
        public string tlf { get; set; }
        public string kjonn { get; set; }
    }

    public class Diagnoser
    {
        internal object brukere;

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int did { get; set; }
        public string symptom { get; set; }
        public string diagnose { get; set; }
        virtual public Brukere Brukere { get; set; }
    }

    public class BrukerContext : DbContext
    {
        public BrukerContext(DbContextOptions<BrukerContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
   

        public DbSet<Brukere> Brukere { get; set; }
        public DbSet<Diagnoser> Diagnoser { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies();
        }
    }
}

