using FURNITURE.Models;
using Microsoft.EntityFrameworkCore;

namespace FURNITURE.Data
{
    public class FurnitureDbContext : DbContext
    {
        public FurnitureDbContext(DbContextOptions<FurnitureDbContext> options) : base(options)
        {

        }

        public DbSet<FurnitureDataModel> FurnitureData { get; set; }
    }
}

