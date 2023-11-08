using diagnoser.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace diagnoser.Controllers
{
    [Route("[controller]/[action]")]
    public class BrukerController : ControllerBase
    {
        private readonly BrukerContext _db;

        public BrukerController(BrukerContext db)
        {
            _db = db;
        }

        public async Task<bool> Lagre(Bruker innBruker)
        {
            try
            {

                var DiagnoseRad = new Diagnoser();
                DiagnoseRad.symptom = innBruker.symptom;
                DiagnoseRad.diagnose = innBruker.diagnose;

              
                    var nyBrukerRad = new Brukere();
                    nyBrukerRad.fornavn = innBruker.fornavn;
                    nyBrukerRad.etternavn = innBruker.etternavn;
                    nyBrukerRad.alder = innBruker.alder;
                    nyBrukerRad.email = innBruker.email;
                    nyBrukerRad.tlf = innBruker.tlf;
                    nyBrukerRad.kjonn = innBruker.kjonn;
                    DiagnoseRad.Brukere=nyBrukerRad;

      
                _db.Diagnoser.Add(DiagnoseRad);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        /*
         
         
        public async Task<List<Bruker>> HentAlle()
        {
            try
            {
                List<Bruker> alleBrukere = await _db.Brukere.Select(k => new Bruker
                {
                    id = k.id,
                    fornavn = k.fornavn,
                    etternavn = k.etternavn,
                    alder = k.alder,
                    kjonn = k.alder,
                    email = k.alder,
                    tlf = k.tlf
                }).ToListAsync();
                return alleBrukere;
            }
            catch
            {
                return null;
            }
        }*/

        public async Task<List<Diagnoser>> HentAlleDiagnoser()
        {
            try
            {
                List<Diagnoser> alleDiagnoser = await _db.Diagnoser.ToListAsync();
                return alleDiagnoser;
            }
            catch
            {
                return null;
            }
        }

        public async Task<bool> Slett(int id)
        {
            try
            {
                Diagnoser enDBBruker = await _db.Diagnoser.FindAsync(id);
                _db.Diagnoser.Remove(enDBBruker);
                await _db.SaveChangesAsync();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public async Task<Brukere> HentEn(int id)
        {
            Brukere enBruker = await _db.Brukere.FindAsync(id);
            return enBruker;
        }

       /* public async Task<bool> Endre(Brukere endreBruker)
        {
            try
            {
                Brukere enBruker = await _db.Brukere.FindAsync(endreBruker.id);
                enBruker.fornavn = endreBruker.fornavn;
                enBruker.etternavn = endreBruker.etternavn;
                enBruker.alder = endreBruker.alder;
                enBruker.email = endreBruker.email;
                enBruker.tlf = endreBruker.tlf;
                enBruker.kjonn = endreBruker.kjonn;
                await _db.SaveChangesAsync();
            }
            catch
            {
                return false;
            }
            return true;
        }
       */
        public async Task<bool> Endre(Diagnoser endreDiagnose)
        {
            try{
                Diagnoser enDiagnose = await _db.Diagnoser.FindAsync(endreDiagnose.did);
                
                enDiagnose.Brukere.fornavn = endreDiagnose.Brukere.fornavn;
                enDiagnose.Brukere.etternavn = endreDiagnose.Brukere.etternavn;
                enDiagnose.Brukere.alder = endreDiagnose.Brukere.alder;
                enDiagnose.Brukere.email = endreDiagnose.Brukere.email;
                enDiagnose.Brukere.tlf = endreDiagnose.Brukere.tlf;
                enDiagnose.Brukere.kjonn = endreDiagnose.Brukere.kjonn;
                //Her er metoden for å endre både diagnoser og symptomer fra samme form, ja
                enDiagnose.diagnose = endreDiagnose.diagnose;
                enDiagnose.symptom = endreDiagnose.symptom; 
                await _db.SaveChangesAsync();
            }
            catch
            {
                return false;
            }
            return true;
        }
    }
}

