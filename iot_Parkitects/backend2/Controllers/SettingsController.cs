using Microsoft.AspNetCore;
using backend2.Data;
using backend2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend2.Controllers
{
    //(Noble, 2024)
    [ApiController] //attribute tells ASP NET Core that this class is an API controller 
    [Route("api/[controller]")]
    public class SettingsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public SettingsController(ApplicationDbContext context)
        {
            _context = context;
        }

        //Gets users saved preferences in settings
        [HttpGet("user/{userID}")]
        public async Task<ActionResult<Settings>> GetAllSettings(string userID)
        {
            var settings = await _context.Settings.FirstOrDefaultAsync(s => s.userID == userID);
            if (settings == null)
            {
                return Ok(new Settings { userID = userID }); //sets preferences to default values
            }
            return Ok(settings);
        }

        //Updates user preferences in settings
        [HttpPut("user/{userID}")]
        public async Task<ActionResult<Settings>> UpdateSettings(string userID, Settings settings)
        {
            //(Adeebabu, 2025)
            var preferences = await _context.Settings.FirstOrDefaultAsync(s => s.userID == userID);
            
            if (preferences == null) //default settings for new users
            {
                settings.userID = userID;
                _context.Settings.Add(settings);
                await _context.SaveChangesAsync(); //changes are saved to the DB
                return Ok(settings);
            }
           
            //updated is user changes their preferences in settings
            preferences.language = settings.language;
            preferences.location = settings.location;
            preferences.emailNotifications = settings.emailNotifications;
            preferences.pushNotifications = settings.pushNotifications;
            preferences.textSize = settings.textSize;
            preferences.theme = settings.theme;
            preferences.reduceMotion = settings.reduceMotion;
            preferences.screenReader = settings.screenReader;
            preferences.hapticFeedback = settings.hapticFeedback;

            await _context.SaveChangesAsync(); //changes are saved to the DB
            return NoContent();
        }
    }
}
/*
 * References
 * 
 * Adeebabu, 2025. A comprehensive guide to C# .NET Web API: GET, POST, PUT, DELETE Methods. [online] Available at: <`https://medium.com/@adeebabu655/a-comprehensive-guide-to-c-net-web-api-get-post-put-delete-methods-40e60aff91be > [Accessed 30 August 2026]
 * Noble, A., 2024. C#, .NET Core Web API with React (TypeScript) Frontend. [online] Available at: < https://github.com/AbrahamNobleOX/React_dotNET_ASP.NETCore > [Accessed 30 August 2026]
 * 
 */