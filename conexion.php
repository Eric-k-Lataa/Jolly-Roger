<?php
$conexion = mysqli_connect("localhost","root","","dbClientes");
if (!$conexion) {
    echo 'No se pudo conectar a la base de datos';
    exit;
} else {
    echo 'Conexión exitosa';
}