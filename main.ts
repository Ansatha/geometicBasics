import { Punto } from "./ClassPunto";
import { Triangulo } from "./classTriangulo"
import { CartesianAxis } from "./classCartesianAxis";

function arrayNPuntosRandom(n:number):Punto[]
{
    let nPuntos:number = n;
    let arrayPuntos:Punto[] = [];
    for (let i = 0; i < nPuntos; i++)
    {
        let coordX:number = Math.round(Math.random() *
        (9 * Math.pow(-1, Math.round(Math.random()*2))));
        
        let coordY:number = Math.round(Math.random() *
        (9 * Math.pow(-1, Math.round(Math.random()*2))));
        
        arrayPuntos.push(new Punto(coordX, coordY));
    };
    return arrayPuntos;
};

//Punto 5.
//----------------------------------------------------------------------------------
console.log('\n\n\x1b[35m%s\x1b[0m','FUNDAMENTOS 4.\n')
console.log('\x1b[36m%s\x1b[0m','5.\nCrear y mostrar el punto A:');
let puntoA:Punto = new Punto (2, 4);
console.log(puntoA.toString());
//----------------------------------------------------------------------------------


//Punto 8a.
//----------------------------------------------------------------------------------
console.log('\n\x1b[36m%s\x1b[0m',
'8a.\nMostrar la distancia del punto A al origen:');
console.log('Distancia =', puntoA.distanciaAlOrigen());
//----------------------------------------------------------------------------------


//Punto 8b.
//----------------------------------------------------------------------------------
console.log('\n\x1b[36m%s\x1b[0m',
            '8b.\nMostrar la distancia del punto A al B:');
let puntoB:Punto = new Punto (-1, 8);
console.log('La distancia desde A:', puntoA.toString(),
            '\nhasta B:', puntoB.toString(),'es:', puntoA.calcularDistancia(puntoB));
//----------------------------------------------------------------------------------


//Punto 11a.
//----------------------------------------------------------------------------------
console.log('\n\x1b[36m%s\x1b[0m','11a.\nMostrar el cuadrante del punto B:');
console.log('Cuadrante:', puntoB.calcularCuadrante());
//----------------------------------------------------------------------------------


//Punto 11b.
//----------------------------------------------------------------------------------
console.log('\n\x1b[36m%s\x1b[0m','11b.\nMostar el punto mas cercano al punto A:');
let arrayPuntos:Punto[] = arrayNPuntosRandom(6);
console.log('Tomando el array:', arrayPuntos, '\n Este punto:',
            puntoA.calcularMasCercano(arrayPuntos).toString(),
            '\n es el mas cercano al punto', puntoA.toString());
//----------------------------------------------------------------------------------


//Punto 16.
//----------------------------------------------------------------------------------
let p1:Punto = arrayNPuntosRandom(1)[0];
let p2:Punto = arrayNPuntosRandom(1)[0];
let p3:Punto = arrayNPuntosRandom(1)[0];
let trianguloA:Triangulo = new Triangulo (p1, p2, p3);
console.log('\n\x1b[36m%s\x1b[0m',
            '16.\nMostar la longitud de los lados del triángulo A:');
console.log('El triángulo formado por los vércices:\na' + trianguloA.p1.toString(),
            'b' + trianguloA.p2.toString(), 'y c' + trianguloA.p3.toString());
console.log('tiene las siguientes longitudes de lados:','\nab = ' + 
            trianguloA.calcularLongitudLados()[0], '\nac = ' + 
            trianguloA.calcularLongitudLados()[1], '\nbc = ' +
            trianguloA.calcularLongitudLados()[2]);
//----------------------------------------------------------------------------------

