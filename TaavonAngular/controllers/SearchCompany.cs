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
  public class SearchCompany : Controller
  {
    private readonly SqlConnection _cnn = new SqlConnection("Data Source=.;Initial Catalog=Taavon;Integrated Security=True");
    // GET: api/<controller>
    [HttpGet("/api/SearchCompany")]
    public JsonResult Get(string company)
    {
      _cnn.Open();
      var coList = new List<Company>();
      var co1 = company.Replace("ک", "ك").Replace("ی", "ي");
      var co2 = company.Replace("ك", "ک").Replace("ي", "ی").Replace("ﯼ", "ی").Replace("ى", "ی").Replace("ة", "ه");
      var filterCo = new SqlCommand("SELECT [office_id],[office_name]" +
                                    "FROM [dbo].[office_list]where office_name like '%" + co1 + "%' " +
                                    " or office_name like '%" + co2 + "%' " +
                                    " or office_name like '%" + company + "%'", _cnn);
      var rd = filterCo.ExecuteReader();
      while (rd.Read())
      {
        coList.Add(new Company()
        {
          Id = Convert.ToInt32(rd["office_id"]),
          Name = rd["office_name"].ToString()
        });
      }
      _cnn.Close();
      return new JsonResult(coList);
    }
  }
}

public class Company
{
  public int Id { get; set; }
  public string Name { get; set; }

}
