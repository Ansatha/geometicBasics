export class Punto
{
    private x:number;
    private y:number;

    constructor(x:number, y:number)
    {
        this.x = x;
        this.y = y;
    };

    public getX():number
    {
        return this.x
    };
    public setX(xIn:number):void
    {
        this.x = xIn;
    };

    public getY():number
    {
        return this.y
    };
    public setY(yIn:number):void
    {
        this.x = yIn;
    };

    public toString():string
    {
        let punto:string = ('(' + this.x + ', ' + this.y + ')')
        return punto
    };

    public distanciaAlOrigen():number
    {
        const punto0:Punto = new Punto (0, 0);
        let distanciaAlOrigen:number = this.calcularDistancia(punto0);      
        return distanciaAlOrigen
    };

    public calcularDistancia(otroPunto:Punto):number
    {   
        let distanciaX:number = this.x - otroPunto.getX();
        let distanciaY:number = this.y - otroPunto.getY();
        let distancia:number = Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
        return distancia;
    };

    public calcularCuadrante():number
    {
        let cuadrante:number;
        this.y && this.x > 0 ? cuadrante = 1:
        this.y && this.x < 0 ? cuadrante = 3:
        this.y > 0 && this.x < 0 ? cuadrante = 4:
        this.y < 0 && this.x > 0 ? cuadrante = 2:
        cuadrante = 0;
        return cuadrante;
    };

    public calcularMasCercano(arrayPuntos:Punto[]):Punto
    {
        let menorDistanciaYPunto:any[] = [this.calcularDistancia(arrayPuntos[0]), arrayPuntos[0]];
        for (let puntoIndex = 1; puntoIndex < arrayPuntos.length; puntoIndex++)
        {
            if (this.calcularDistancia(arrayPuntos[puntoIndex]) < menorDistanciaYPunto[0])
            {
                menorDistanciaYPunto[0] = this.calcularDistancia(arrayPuntos[puntoIndex]);
                menorDistanciaYPunto[1] = arrayPuntos[puntoIndex];
            };
        };
        let puntoMasCercano:Punto = menorDistanciaYPunto[1];
        return puntoMasCercano;
    };
};