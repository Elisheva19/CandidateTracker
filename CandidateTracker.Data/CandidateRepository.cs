using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CandidateTracker.Data
{
  public  class CandidateRepository
    {
        public readonly string _connection;
        public CandidateRepository(string connect)
        {
            _connection = connect;

        }

        public List<Candidate> GetPending()
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).ToList();
        }
        public List<Candidate> GetConfirmed()
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).ToList();
        }
        public List<Candidate> GetRefused()
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).ToList();
        }
        public void AddCandidate(Candidate newcandidate)
        {
            var context = new CandidateDataContext(_connection);
            newcandidate.RegistrationStatus = RegistrationStatus.Pending;
            context.Candidates.Add(newcandidate);
            context.SaveChanges();
        }
        public int GetPendingCount()
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Pending).Count();


        }
        public int GetConfirmedCount()
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count();


        }
        public int GetRefusedCount()
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).Count();


        }
        public Candidate GetById(int id)
        {
            var context = new CandidateDataContext(_connection);
            return context.Candidates.FirstOrDefault(c => c.Id == id);
        }

        public void Confirm(int id)
        {
            var context = new CandidateDataContext(_connection);
           Candidate update= context.Candidates.FirstOrDefault(c => c.Id == id);
            update.RegistrationStatus = RegistrationStatus.Confirmed;
            context.Candidates.Update(update);
            context.SaveChanges();

        }
        public void Refuse(int id)
        {
            var context = new CandidateDataContext(_connection);
            Candidate update = context.Candidates.FirstOrDefault(c => c.Id == id);

            update.RegistrationStatus = RegistrationStatus.Refused;
            context.Candidates.Update(update);
            context.SaveChanges();



        }
    }
}
