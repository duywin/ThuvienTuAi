using Microsoft.AspNetCore.Mvc;
using DoAnTH.Models;
namespace DoAnTH.Controllers
{
    public class AccountController : Controller
    {
        private readonly FirebaseService _firebaseService;

        public AccountController(FirebaseService firebaseService)
        {
            _firebaseService = firebaseService;
        }
        public IActionResult Index()
        {
            return View();
        }

    }
}
