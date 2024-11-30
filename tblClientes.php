<?php
// Configuración para la conexión a la base de datos
$host = "localhost";
$user = "root";
$password = "";
$database = "dbClientes";

// Conexión a la base de datos
$conexion = mysqli_connect($host, $user, $password, $database);

// Verificar si la conexión fue exitosa
if (!$conexion) {
    die("La conexión a la base de datos ha fallado: " . mysqli_connect_error());
}

// Consulta SQL segura con sentencias preparadas (aunque no hay entradas de usuario en esta consulta)
$sql = "SELECT id, empresa, contacto, pais FROM tblClientes";
$result = mysqli_query($conexion, $sql);

// Verificar si la consulta se ejecutó correctamente
if (!$result) {
    die("Error en la consulta: " . mysqli_error($conexion));
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tabla de clientes</title>
    <link rel="shortcut icon" href="./img/JollyRoger.png" type="image/x-icon">
    <link rel="stylesheet" href="./CSS/tblClientes.css">
    <link rel="stylesheet" href="./CSS/normalize.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<a href="./index.html"><h1 class="header-main">Erick Lataa <span>Ingeniero en Computación en formación</span></h1></a>
<header class="header">
    <h2 class="header-1">Página de clientes</h2>
    <div class="imagen">
        <img src="./img/JollyRoger.png" width="100px" alt="tblClientes">
    </div>  
</header>
<div>
    <h3>Lista de clientes</h3>   
</div>   
<div class="container my-4">
<table class="table table-dark table-striped mi-table">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Empresa</th>
            <th scope="col">Contacto</th>
            <th scope="col">País</th>
        </tr>
    </thead>
    <tbody>
        <?php
        // Verificar si hay resultados
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                // Escapar los datos para evitar XSS
                $id = htmlspecialchars($row['id']);
                $empresa = htmlspecialchars($row['empresa']);
                $contacto = htmlspecialchars($row['contacto']);
                $pais = htmlspecialchars($row['pais']);
                
                echo "<tr>
                        <th scope='row'>$id</th>
                        <td>$empresa</td>
                        <td>$contacto</td>
                        <td>$pais</td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='4'>No se encontraron clientes.</td></tr>";
        }

        // Cerrar la conexión a la base de datos
        mysqli_free_result($result);
        mysqli_close($conexion);
        ?>
    </tbody>
</table>
<a style="text-decoration: none;" href="./cliente.html" class="boton">Formulario</a>
</div>
</body>
</html>
