
namespace backend2
{

    public class Program
    {
        public static void Main(string[] args)
        {



            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi



            builder.Services.AddHttpClient();
            builder.Services.AddOpenApi(); // Keeps the native engine
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



            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();


            app.Run();
        }
    }
}