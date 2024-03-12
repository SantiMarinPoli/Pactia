using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Pactial.PeopleRecord.Models
{
    [Table("People")]
    public class People
    {
        public People() { 
            guiid = Guid.NewGuid().ToString();
        }

        [Key]
        public string guiid { get; set; }
        [Required]
        public string dni { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string lastname { get; set; }
    }
}
