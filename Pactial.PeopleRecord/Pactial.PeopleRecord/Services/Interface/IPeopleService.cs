using Pactial.PeopleRecord.Models;

namespace Pactial.PeopleRecord.Services.Interface
{
    public interface IPeopleService
    {
        public Task<bool> Create(People people);

        public List<People> ListPeoples();

        public People GetById(string dni);

        public Task<bool> Update(People employee);

        public bool Delete(string id);
    }
}
