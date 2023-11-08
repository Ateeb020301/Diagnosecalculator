using diagnoser.Model;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Threading.Tasks;

namespace diagnoser.Model
{
    public static class DBInit
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<BrukerContext>();

                // må slette og opprette databasen hver gang når den skalinitieres (seed`es)
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();

                Brukere Bruker1 = new Brukere { fornavn = "Ole", etternavn = "Hassan", kjonn = "male", alder = "82", email = "Olsloveien@82.no", tlf = "66 66 66 66"};
                Brukere Bruker2 = new Brukere { fornavn = "Mohammed", etternavn = "Mehmood", kjonn = "female", alder = "21", email = "Hamodi@hotmail.com", tlf = " 66 64 20 00"};
                
                Diagnoser Diagnose1 = new Diagnoser { symptom = "Sweats", diagnose = "Heart Failure", Brukere = Bruker1};
                Diagnoser Diagnose2 = new Diagnoser { symptom = "Dry skin", diagnose = "Eksem", Brukere = Bruker2};
                

                context.Brukere.Add(Bruker1);
                context.Brukere.Add(Bruker2);
                context.Diagnoser.Add(Diagnose1);
                context.Diagnoser.Add(Diagnose2);

                context.SaveChanges();
            }
        }
    }
       
}
