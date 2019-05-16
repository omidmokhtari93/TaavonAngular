using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaavonAngular.controllers
{
  [Route("api/[controller]")]
  public class login : Controller
  {
    [HttpGet("/api/login")]
    public JsonResult Auth(User obj)
    {
      if (obj.Username == "omid" && obj.Password == "123")
      {
        return new JsonResult(new Error() { Status = true, Message = "you're succefully logged in" });
      }
      return new JsonResult(new Error() { Status = false, Message = "Wrong username or paasword" });
    }

    [HttpGet("/api/logout")]
    public JsonResult Logout()
    {
      return new JsonResult(new Error() { Status = true, Message = "you're succefully logged out" });
    }
  }
}
public class User
{
  public string Username { get; set; }
  public string Password { get; set; }
}

public class Error
{
  public bool Status { get; set; } //false for error and true for success
  public string Message { get; set; }
}
