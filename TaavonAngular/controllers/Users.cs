using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using Microsoft.AspNetCore.Mvc;
using rijndael;
using Taavon_Web_Application;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TaavonAngular.controllers
{
  [Route("api/[controller]")]
  public class Users : Controller
  {
    private readonly SqlConnection _cnn = new SqlConnection("Data Source=.;Initial Catalog=Taavon;Integrated Security=True");
    private const string InitVector = "F4568dgbdfgtt444";
    private const string Key = "rdf48JH4";
    // GET: api/<controller>
    [HttpGet("/api/Users")]
    public JsonResult GetUsers()
    {
      _cnn.Open();
      var re = new RijndaelEnhanced(Key, InitVector);
      var userList = new List<UsersModel>();
      var selectAll = new SqlCommand("SELECT dbo.sec_info.sign,dbo.sec_info.id,dbo.sec_info.usrlevel,ROW_NUMBER()over(order by dbo.sec_info.id)as rn " +
                                     ", dbo.sec_info.name,dbo.sec_info.username, dbo.sec_info.password,sec_info.tell,sec_info.email,sec_info.office_id, " +
                                     "CASE WHEN sec_info.usrlevel = 0 THEN 'مدیریت' WHEN sec_info.usrlevel = 1 " +
                                     "THEN 'دبیرخانه' ELSE 'شرکت تابعه' END AS uslevel, dbo.sec_info.permit, dbo.office_list.office_name " +
                                     "FROM dbo.sec_info INNER JOIN dbo.office_list ON dbo.sec_info.office_id = dbo.office_list.office_id", _cnn);
      var rd = selectAll.ExecuteReader();
      while (rd.Read())
      {
        var password = re.Decrypt(rd["password"].ToString());
        userList.Add(new UsersModel()
        {
          Id = Convert.ToInt32(rd["id"]),
          UserLevel = Convert.ToInt32(rd["usrlevel"]),
          Name = rd["name"].ToString()
          ,
          UserName = rd["username"].ToString(),
          Password = password,
          UsrLvl = rd["uslevel"].ToString(),
          Permit = Convert.ToInt32(rd["permit"]),
          OfficeId = Convert.ToInt32(rd["office_id"])
          ,
          OfficeName = rd["office_name"].ToString(),
          Tell = rd["tell"].ToString(),
          Email = rd["email"].ToString(),
          Sign = rd["sign"].ToString()
        });
      }
      _cnn.Close();
      return new JsonResult(userList);
    }
  }
}
