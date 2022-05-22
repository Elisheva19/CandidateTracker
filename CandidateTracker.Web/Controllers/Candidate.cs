using CandidateTracker.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateTracker : ControllerBase
    {
        public readonly string _connectionstring;
        public CandidateTracker(IConfiguration configuration)
        {
            _connectionstring = configuration.GetConnectionString("ConStr");
        }

        [Route("getpending")]
        [HttpGet]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepository(_connectionstring);
            return repo.GetPending();
        }
        //[HttpGet]
        //[Route("getconfirmed")]
        //public List<Candidate> GetConfirmed(bool typecandidates)
        //{
        //    var repo = new CandidateRepository(_connectionstring);
        //    if(typecandidates==true)
        //        {
        //        return repo.GetConfirmed();
        //    }
        //    else
        //    {
        //        return repo.GetRefused();
        //    }
            [HttpGet]
            [Route("getconfirmed")]
            public List<Candidate> GetConfirmed()
            {
                var repo = new CandidateRepository(_connectionstring);
                  
                    return repo.GetConfirmed();
               

            }
        [HttpGet]
        [Route("getrefused")]
        public List<Candidate> GetRefused()
        {
            var repo = new CandidateRepository(_connectionstring);
            return repo.GetRefused();
        }
        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate newcandidate)
        {
            var repo = new CandidateRepository(_connectionstring);
            repo.AddCandidate(newcandidate);
            
        }
        [HttpGet]
        [Route("getconfirmedcount")]
        public object GetConfirmedCount()
        {
            var repo = new CandidateRepository(_connectionstring);
            return new { count = repo.GetConfirmedCount() };
        }
        [HttpGet]
        [Route("getrefusedcount")]
        public object GetRefusedCount()
        {
            var repo = new CandidateRepository(_connectionstring);
            return new { count = repo.GetRefusedCount() };
        }
        [HttpGet]
        [Route("getpendingcount")]

        public object GetPendingCount()
        {
            var repo = new CandidateRepository(_connectionstring);
            return new { count = repo.GetPendingCount() };

        }
        [HttpGet]
        [Route("getbyid")]
        public Candidate GetById(int id)
        {
            var repo = new CandidateRepository(_connectionstring);
            return repo.GetById(id);
        }
        [HttpPost]
        [Route("confirm")]
        public void Confirm(CandidateId candid)
        {
            var repo = new CandidateRepository(_connectionstring);
            repo.Confirm(candid.Id);
        }
        [HttpPost]
        [Route("refuse")]
        public void Refuse(CandidateId candid)
        {
            var repo = new CandidateRepository(_connectionstring);
            repo.Refuse(candid.Id);
        }

    }
}
