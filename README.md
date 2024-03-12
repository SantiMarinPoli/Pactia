# Pactia
# Proyecto de Angular y .NET Core

Este es un proyecto que utiliza Angular 13 en el frontend y .NET Core 6.0 en el backend. Asegúrate de seguir los siguientes pasos para configurar correctamente el entorno de desarrollo.

## Requisitos

- Node.js: Versión 16.x o superior. Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
- Angular CLI: Para instalarlo globalmente, ejecuta `npm install -g @angular/cli@13`.
- .NET Core SDK: Versión 6.0. Puedes descargarlo desde [dotnet.microsoft.com](https://dotnet.microsoft.com/download).

## Configuración del Backend

1. Abre el proyecto en la carpeta `Pactial.PeopleRecord` con Visual Studio 2022.
2. Asegúrate de tener configurada una instancia local de SQL Server o un servidor accesible.
3. En la carpeta `QuerySql`, ejecuta el script `Query.sql` en tu instancia de SQL Server para crear la base de datos `DBPeople`.
4. Abre el archivo `appsettings.json` en la raíz del proyecto backend.
5. En la sección `ConnectionStrings`, modifica el valor de `Server` con el nombre de tu servidor de base de datos. Por ejemplo:

   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=<Tu-Servidor-Local>;Database=DBPeople;Integrated Security=True;"
   }

## Configuración del Frontend

1. Abre la carpeta `Pactial.PeopleRecordFrontend/Patial.PeopleRecord` en tu terminal.
2. Instala las dependencias ejecutando `npm install`.
3. Una vez instaladas las dependencias, puedes iniciar la aplicación Angular con el comando `ng serve`.

## Acceso a la Aplicación

Una vez que el backend esté en funcionamiento y el frontend esté servido, podrás acceder a la aplicación desde tu navegador en http://localhost:4200/.

Recuerda adaptar las instrucciones según sea necesario para reflejar la estructura de tu proyecto y cualquier configuración específica que pueda tener. Además, puedes agregar más detalles según lo consideres necesario para los usuarios que puedan utilizar tu proyecto.