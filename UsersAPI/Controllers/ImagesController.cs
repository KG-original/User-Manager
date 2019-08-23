using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UsersAPI.Data;
using UsersAPI.Models;
using System.Drawing;

namespace UsersAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImagesController : ControllerBase
    {
        private readonly UsersAPIContext _context;


        public ImagesController(UsersAPIContext context)
        {
            _context = context;
        }

        // GET: api/Images
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Models.Image>>> GetImage()
        {
            return await _context.Image.ToListAsync();
        }

        // GET: api/Images/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Models.Image>> GetImage(int id)
        {
            var image = await _context.Image.FindAsync(id);

            if (image == null)
            {
                return NotFound();
            }

            return image;
        }

        // PUT: api/Images/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutImage(int id, Models.Image image)
        {
            if (id != image.ImageId)
            {
                return BadRequest();
            }

            _context.Entry(image).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ImageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Images
        [HttpPost]
        public async Task<ActionResult<Models.Image>> PostImage(Models.Image image)
        {
            _context.Image.Add(image);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetImage", new { id = image.ImageId }, image);
        }

        // DELETE: api/Images/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Models.Image>> DeleteImage(int id)
        {
            var image = await _context.Image.FindAsync(id);
            if (image == null)
            {
                return NotFound();
            }

            _context.Image.Remove(image);
            await _context.SaveChangesAsync();

            return image;
        }

        private bool ImageExists(int id)
        {
            return _context.Image.Any(e => e.ImageId == id);
        }
    }
}
