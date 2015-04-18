<?php 
error_reporting(E_ALL); ini_set("display_errors", 0);
header("Content-type: text/json");


$registros = array();
if (($fichero = fopen("http://gothi-k.com/contaminacion.csv", "r")) !== FALSE) {
    // Lee los nombres de los campos
    $nombres_campos = fgetcsv($fichero, 0, ",", "\"", "\"");
    $num_campos = count($nombres_campos);
    // Lee los registros
    while (($datos = fgetcsv($fichero, 0, ",", "\"", "\"")) !== FALSE) {
        // Crea un array asociativo con los nombres y valores de los campos
        for ($icampo = 0; $icampo < $num_campos; $icampo++) {
            $registro[$nombres_campos[$icampo]] = $datos[$icampo];
        }
        // Añade el registro leido al array de registros
        $registros[] = $registro;
    }
    fclose($fichero);
     
}

$registros;



echo json_encode($registros);
?>
