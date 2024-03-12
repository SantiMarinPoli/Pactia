using Microsoft.JSInterop.Infrastructure;
using Pactial.PeopleRecord.Models;
using Pactial.PeopleRecord.Services.Interface;

namespace Pactial.PeopleRecord.Services
{
    public class PeopleService: IPeopleService
    {
        private readonly Context _connection;

        public PeopleService(Context connection)
        {
            _connection = connection;
        }

        //metodo crear una persona
        public async Task<bool> Create(People people)
        {
            bool exito = true;
            try
            {
                _connection.People.Add(people);
                _connection.SaveChanges();

            }
            catch (Exception ex)
            {
                var message = ex.Message;
                exito = false;
            }

            return exito;


        }

        //listar todos las personas existente en el sistema
        public List<People> ListPeoples()
        {
            List<People> peoples = new List<People>();

            try
            {
                peoples = _connection.People.ToList();

            }
            catch (Exception ex)
            {
                var messsage = ex.Message;
            }

            return peoples;
        }

        //metodo seleccionar una persona por dni
        public People GetById(string dni)
        {
            People people = new People();
            try
            {
                people = _connection.People.Where(x => x.dni == dni).FirstOrDefault();

            }
            catch (Exception ex)
            {
                var message = ex.Message;
            }

            return people;
        }

        //metodo actualizar una persona
        public async Task<bool> Update(People people)
        {
            bool exito = false;
            try
            {
                People changePeople = _connection.People.Where(x => x.guiid == people.guiid).FirstOrDefault();
                if (changePeople != null)
                {
                    changePeople.dni = people.dni;
                    changePeople.name = people.name;
                    changePeople.lastname = people.lastname;

                    _connection.SaveChanges();
                    exito = true;
                }

            }
            catch (Exception ex)
            {
                var message = ex.Message;
                exito = false;
            }
            return exito;
        }

        //Metodo eliminar una persona
        public bool Delete(string id)
        {
            bool exito = false;
            try
            {
                People peopleDeleted = _connection.People.Where(x => x.guiid == id).FirstOrDefault();

                if (peopleDeleted != null)
                {
                    _connection.Remove(peopleDeleted);
                    _connection.SaveChanges();
                    exito = true;
                }

            }
            catch (Exception ex)
            {
                var message = ex.Message;
                exito = false;
            }

            return exito;
        }
    }
}
