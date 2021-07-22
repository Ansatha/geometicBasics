"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(p1, p2, p3) {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }
    ;
    Triangulo.prototype.calcularLongitudLados = function () {
        var longitudesLadosTriangulo = [];
        longitudesLadosTriangulo.push(this.p1.calcularDistancia(this.p2));
        longitudesLadosTriangulo.push(this.p1.calcularDistancia(this.p3));
        longitudesLadosTriangulo.push(this.p2.calcularDistancia(this.p3));
        return longitudesLadosTriangulo;
    };
    ;
    return Triangulo;
}());
exports.Triangulo = Triangulo;
;
