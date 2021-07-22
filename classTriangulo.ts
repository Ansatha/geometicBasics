import { Punto } from "./ClassPunto";

export class Triangulo
{
    p1:Punto;
    p2:Punto;
    p3:Punto;

    constructor (p1, p2, p3)
    {
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    };

    public calcularLongitudLados():number[]
    {
        let longitudesLadosTriangulo:number[] = [];
        longitudesLadosTriangulo.push(this.p1.calcularDistancia(this.p2));
        longitudesLadosTriangulo.push(this.p1.calcularDistancia(this.p3));
        longitudesLadosTriangulo.push(this.p2.calcularDistancia(this.p3));
        return longitudesLadosTriangulo;
    };
};