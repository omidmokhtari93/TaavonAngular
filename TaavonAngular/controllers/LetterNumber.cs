using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaavonAngular.controllers
{
  [Route("api/[controller]")]
  public class LetterNumber : Controller
  {
    // GET: api/<controller>
    [HttpGet("/api/LetterNumber")]
    public IEnumerable<string> Get()
    {
      return new string[] { "22/الف 52" };
    }
  }
}
