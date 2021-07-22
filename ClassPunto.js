"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    ;
    Punto.prototype.getX = function () {
        return this.x;
    };
    ;
    Punto.prototype.setX = function (xIn) {
        this.x = xIn;
    };
    ;
    Punto.prototype.getY = function () {
        return this.y;
    };
    ;
    Punto.prototype.setY = function (yIn) {
        this.x = yIn;
    };
    ;
    Punto.prototype.toString = function () {
        var punto = ('(' + this.x + ', ' + this.y + ')');
        return punto;
    };
    ;
    Punto.prototype.distanciaAlOrigen = function () {
        var punto0 = new Punto(0, 0);
        var distanciaAlOrigen = this.calcularDistancia(punto0);
        return distanciaAlOrigen;
    };
    ;
    Punto.prototype.calcularDistancia = function (otroPunto) {
        var distanciaX = this.x - otroPunto.getX();
        var distanciaY = this.y - otroPunto.getY();
        var distancia = Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
        return distancia;
    };
    ;
    Punto.prototype.calcularCuadrante = function () {
        var cuadrante;
        this.y && this.x > 0 ? cuadrante = 1 :
            this.y && this.x < 0 ? cuadrante = 3 :
                this.y > 0 && this.x < 0 ? cuadrante = 4 :
                    this.y < 0 && this.x > 0 ? cuadrante = 2 :
                        cuadrante = 0;
        return cuadrante;
    };
    ;
    Punto.prototype.calcularMasCercano = function (arrayPuntos) {
        var menorDistanciaYPunto = [this.calcularDistancia(arrayPuntos[0]), arrayPuntos[0]];
        for (var puntoIndex = 1; puntoIndex < arrayPuntos.length; puntoIndex++) {
            if (this.calcularDistancia(arrayPuntos[puntoIndex]) < menorDistanciaYPunto[0]) {
                menorDistanciaYPunto[0] = this.calcularDistancia(arrayPuntos[puntoIndex]);
                menorDistanciaYPunto[1] = arrayPuntos[puntoIndex];
            }
            ;
        }
        ;
        var puntoMasCercano = menorDistanciaYPunto[1];
        return puntoMasCercano;
    };
    ;
    return Punto;
}());
exports.Punto = Punto;
;
