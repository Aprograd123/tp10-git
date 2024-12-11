$(document).ready(function() {
    // Realizamos la solicitud AJAX para obtener los usuarios
    $.ajax({
        url: "https://reqres.in/api/users",
        method: "GET",
        dataType: "json",
        success: function(response) {
            const users = response.data; // Obtenemos el array de usuarios

            // Iteramos sobre los usuarios y creamos las tarjetas
            users.forEach(function(user) {
                // Crear el HTML de cada tarjeta
                const userCard = `
              <div class="col-sm-6 col-md-4 mb-4">
                    <div class="card h-100">
                      <img src="${user.avatar}" class="card-img-top" alt="Avatar de ${user.first_name}">
                       <div class="card-body">
                         <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                       <p class="card-text">${user.email}</p>
                   </div>
                </div>
              </div>
            `;

                // Agregar la tarjeta al contenedor
                $("#user-list").append(userCard);
            });
        },
        error: function() {
            console.error("No se pudo cargar la lista de usuarios.");
        },
    });
});