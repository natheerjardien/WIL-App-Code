using backend2.Data;
using backend2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Azure.Storage.Blobs;

//Emeris School of Computer Science, 2025
namespace backend2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IConfiguration _configuration;

        public TicketsController(ApplicationDbContext context, IConfiguration config)
        {
            _context = context;
            _configuration = config;
        }

        // GET: api/Ticket
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ticket>>> GetAll()
        {
            return await _context.Tickets.ToListAsync();
        }

        // GET: api/Contract/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Ticket>> GetById(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);

            if (ticket == null)
            
                return NotFound();
            

            return ticket;
        }

        // POST: api/Tickets
        [HttpPost]
        public async Task<ActionResult<Ticket>> Create([FromBody] Ticket ticket)
        {
            ticket.createdAt = DateTime.UtcNow;
            ticket.status = "Pending";

            _context.Tickets.Add(ticket);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetById), new { id = ticket.ticketID }, ticket);
        }

//POST: api/ Tickets/upload-image
[HttpPost("upload-image")]
public async Task<IActionResult> UploadImage(IFormFile file)
        {
            ////Emeris School of Computer Science, 2025b
            if (file == null || file.Length == 0)
               return BadRequest("No image provided");

               string connectionString = _configuration.GetConnectionString("AzureBlobStorage");
               string containerName = "complaint-image";

               BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
               BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient(containerName);
               await containerClient.CreateIfNotExistsAsync(Azure.Storage.Blobs.Models.PublicAccessType.Blob);

               string fileName = $"{Guid.NewGuid()}_{file.FileName}";
               BlobClient blobClient =containerClient.GetBlobClient(fileName);

               using (var stream = file.OpenReadStream())
            {
                await blobClient.UploadAsync(stream, true);
            }

            return Ok(new { imageUrl = blobClient.Uri.ToString() });
        }

        //PUT: api/Tickets/5 Update
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id,[FromBody] Ticket ticket)
        {
            if (id != ticket.ticketID)
            
                return BadRequest();
            
              ticket.updatedAt = DateTime.UtcNow; //time updated
            _context.Entry(ticket).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Tickets.Any(e => e.ticketID == id))
                
                    return NotFound();
                
                
                
                    throw;
                }
          

            return NoContent();
        }

        // DELETE: api/Tickets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var ticket = await _context.Tickets.FindAsync(id);
            if (ticket == null)
                return NotFound();
            

            _context.Tickets.Remove(ticket);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
/** 
References
Emeris School of Computer Science. 2025. PROG7311 Docker part 1 - Getting started.[video online] (Version 10.0) [Source Code]. Available at: <https://youtu.be/ldfC-rTzHPY?si=znsmPz-ZSPaY-4Ii> [Accessed 5 June 2026]
Emeris School of Computer Science. 2025. PROG7311 Docker part 2- connecting between the two!. (Version 10.0) [Source Code]. Available at: <https://youtu.be/_0EhC3WauAc?si=nEazkCpBTV1YpHBp> [Accessed 5 June 2026]
Emeris School of Computer Science. 2025. PROG7311 Docker part 3- databases in docker.[video online] (Version 10.0) [Source Code]. Available at: <https://youtu.be/6tYEbngWY-E?si=10rSEEpfSNL5Kg8k> [Accessed 5 June 2026]
Emeris School of Computer Science. 2025. PROG7311 Docker part 4- connecting to database from the API.(Version 10.0) [Source Code]. Available at: <https://youtu.be/_PwpPMoeqzw?si=Q0ELlPZdN42dFU9q> [Accessed 5 June 2026]
Emeris School of Computer Science. 2025. PROG7311 Docker part 5- connecting them all together- DB -API -MVC. (Version 10.0) [Source Code]. Available at: <https://youtu.be/YlIajRMdLPk?si=D75XZKO-L6nQhR-3> [Accessed 5 June 2026]
Emeris School of Computer Science. 2025b. All about the blob storage - CLDV6211.[video online] (Version 10.0) [Source Code] . Available at:< https://www.youtube.com/watch?v=tCROBkSoi3Y&list=PL480DYS-b_kevhFsiTpPIB2RzhKPig4iK&index=9>  [Accessed 30 Aug. 2026].
*/
