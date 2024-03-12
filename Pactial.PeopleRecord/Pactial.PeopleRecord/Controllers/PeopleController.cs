using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Pactial.PeopleRecord.Models;
using Pactial.PeopleRecord.Services;
using Pactial.PeopleRecord.Services.Interface;

namespace Pactial.PeopleRecord.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class PeopleController : ControllerBase
    {
        private IPeopleService _peopleService;
        public PeopleController(IPeopleService peopleService)
        {
            _peopleService = peopleService;
        }

        [HttpGet("ListPeople")]
        public IActionResult List()
        {
            List<People> peoples = _peopleService.ListPeoples();
            return peoples.Count != 0 ? Ok(peoples) : BadRequest("Worng display list peoples");
        }

        [HttpGet("PeopleById/{*dni}")]
        public IActionResult GeById(string dni)
        {
            People people = _peopleService.GetById(dni);
            return people != null ? Ok(people) : BadRequest("Worng display people");
        }

        [HttpPost]
        public IActionResult Create([FromBody] People people)
        {
            bool exito = _peopleService.Create(people).Result;

            return exito ? Ok(exito) : BadRequest("Wrong insert people");
        }

        [HttpPut]
        public IActionResult Update([FromBody] People people)
        {
            bool exito = _peopleService.Update(people).Result;
            return exito ? Ok(exito) : BadRequest("Wrong update people");
        }

        [HttpDelete("{*guiid}")]
        public IActionResult Delete(string guiid)
        {
            bool exito = _peopleService.Delete(guiid);
            return exito ? Ok(exito) : BadRequest("Wrong delete people");
        }
    }
}
