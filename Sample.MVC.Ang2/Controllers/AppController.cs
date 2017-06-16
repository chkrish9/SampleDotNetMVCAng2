using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;

namespace Sample.MVC.Ang2.Controllers
{
    public class AppController : Controller
    {
        // GET: App
        public ActionResult Logon()
        {
            return Json(new { Result = true }, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult Logon(string username,string password)
        {
            string configUsername=ConfigurationManager.AppSettings["username"];
            string configPassword = ConfigurationManager.AppSettings["password"];
            if (configUsername.Equals(username) && configPassword.Equals(password))
            {
                return Json(new { Result = true }, JsonRequestBehavior.AllowGet);
            }
            else {
                return Json(new { Result = false }, JsonRequestBehavior.AllowGet);
            }
            
        }

        public ActionResult Index()
        {
            return View();
        }
    }
}