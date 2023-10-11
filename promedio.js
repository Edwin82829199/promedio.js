var nombre = prompt("Ingresa tu nombre:");
var numeroMaterias=parseInt(prompt("Ingresa la cantidad de materias a calcular😇 :"));
var totalCalificaciones = 0;
for (var i = 1; i <= numeroMaterias; i++) {
var calificacion;
do {
calificacion = parseFloat(prompt("Ingrese la calificación de la materia #"+i+":"));
}while (calificacion<1 || calificacion>10);
totalCalificaciones+=calificacion;
}
var promedio = totalCalificaciones / numeroMaterias;
console.log("El promedio de " + nombre + " es: " + promedio+ " felicidades te esforzasate 👍");
