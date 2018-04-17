using Microsoft.AspNetCore.Mvc;

namespace CodeREDApp.Controllers
{
    public class HomeController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}