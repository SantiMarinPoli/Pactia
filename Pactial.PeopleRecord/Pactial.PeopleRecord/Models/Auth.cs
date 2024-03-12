namespace Pactial.PeopleRecord.Models
{
    public class Auth
    {
        public Auth(string token) {
            this.token= token;
        }
        public string token { get; set; }
    }
}
