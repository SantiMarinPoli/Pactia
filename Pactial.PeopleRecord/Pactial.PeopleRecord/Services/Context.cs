using Pactial.PeopleRecord.Models;
using Microsoft.EntityFrameworkCore;

namespace Pactial.PeopleRecord.Services
{
    public class Context:DbContext
    {
        public Context(DbContextOptions<Context> options) : base(options) { }

        public DbSet<People> People { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<People>().Property(e => e.guiid).HasDefaultValueSql("NEWID()");
        }
    }
}
