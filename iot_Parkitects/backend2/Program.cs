using Microsoft.EntityFrameworkCore; // Added for Database
using backend2.Data; // Added for ApplicationDbContext

namespace backend2
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            //Chandra, S 2026.
            // Add services to the container.

            builder.Services.AddDbContext<ApplicationDbContext>(options =>
               options.UseSqlServer(Environment.GetEnvironmentVariable("SQL_CONNECTION_STRING")));

            builder.Services.AddControllers();
            builder.Services.AddHttpClient();
            builder.Services.AddOpenApi(); // Keeps the native engine

            // DB configuration
            // This connects our app to the SQL db using the connection string in appsettings.json (Microsoft, 2026)
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // This allows our Expo mobile app to send POST requests to this backend (Microsoft, 2026)
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowMobileApp", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

            var app = builder.Build();

            if (true)
            {
                app.MapOpenApi(); // Generates /openapi/v1.json

                app.UseSwaggerUI(options =>
                {
                    // Tell Swagger UI to look at the native .NET OpenAPI endpoint
                    options.SwaggerEndpoint("/openapi/v1.json", "Parkitects v1");
                    options.RoutePrefix = "swagger";
                });
            }


            app.UseCors("AllowMobileApp");

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();


            app.Run();
        }
    }
}

/* Reference list:

   Microsoft, 2026. Enable Cross-Origin Requests (CORS) in ASP.NET Core. [online] Available at: <https://learn.microsoft.com/en-us/aspnet/core/security/cors> [Accessed 30 August 2026].

*/