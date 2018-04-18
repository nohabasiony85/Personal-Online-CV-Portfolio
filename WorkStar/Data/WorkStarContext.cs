using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
namespace WorkStar.Data
{
    public class WorkStarContext : DbContext
    {
        public WorkStarContext(DbContextOptions<WorkStarContext> options) : base(options) { }
        public WorkStarContext() { }
        public DbSet<PersonalInformation> PersonalInformations { get; set; }
        public DbSet<WorkExperiance> WorkExperiances { get; set; }
    }
}
