using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WorkStar.Data
{
    [Table("WorkExperiance")]
    public class WorkExperiance
    {
        [Key]
        public int Id { get; set; }
        public string Company { get; set; }
        public string Title { get; set; }
        public string ExpYears { get; set; }
        public string Roles { get; set; }

        public int PersonalInformationId { get; set; }

        [ForeignKey("PersonalInformationId")]
        public virtual PersonalInformation PersonalInformation { get; set; }


    }
}
