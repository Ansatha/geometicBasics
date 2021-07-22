import { Punto } from "./ClassPunto";

export class CartesianAxis
{
    public dim:number;
    public symbolUp:string;
    public symbolO:string;
    public symbolDown:string;
    public symbolLeft:string;
    public symbolRight:string;
    public symbolPoint:string;
    private pointsName:string[];
    public pointsArray:Punto[];

    constructor (dim = 10, pointsArray = [], symbolPoint = '⨂',   // ⊥ ⊤ ⊣ ⊢ ⨀ ⨁ ⨷
    symbolUp = '|', symbolO = '+', symbolDown = '|', symbolLeft = '-', symbolRight = '-')
    {
    this.dim = dim;
    this.symbolUp = symbolUp;
    this.symbolO = symbolO;
    this.symbolDown = symbolDown;
    this.symbolLeft = symbolLeft;
    this.symbolRight = symbolRight;
    this.symbolPoint = symbolPoint;
    this.pointsName = [];
    this.pointsArray = pointsArray;
    };

    public setPointsName(pointsName:string[]):void
    {
        this.pointsName = pointsName;
    };
    public getPointsName():string[]
    {
        return this.pointsName;
    };

    public designCartesian():string[][]
    {
        let finalDesign:string[][] = [];
        let lineDesign:string[] = [];
        let checkPoints:boolean = this.pointsArray.length != 0;
        let transArray:Punto[] = this.pointRelativePosition();
        
        
        //Cuadrante 2
        //--------------------------------------------------------------------------
        for (let line:number = 0; line < this.dim; line++)
        {
            for (let row:number = 0; row < (this.dim * 2) - 1; row += 2)
            {
                if (checkPoints)
                {
                    let indexPoint:number = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line))
                    {
                        indexPoint++;      
                    };
                    if (indexPoint < transArray.length)
                    {
                        lineDesign.push(this.pointsNaming()[indexPoint] + this.symbolPoint);
                    }
                    else
                    {
                        lineDesign.push('  ');
                    };
                }
                else
                {
                    lineDesign.push('  ');   
                };
            };
            finalDesign.push(lineDesign);
            lineDesign = [];
        };
        //--------------------------------------------------------------------------


        //Eje y+
        //--------------------------------------------------------------------------
        for (let line:number = 0; line < this.dim; line++)
        {
            if (checkPoints)
            {
                let indexPoint:number = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX()  !== this.dim * 2 ||
                    transArray[indexPoint].getY() !== line))
                {
                    indexPoint++;      
                };
                if (indexPoint < transArray.length)
                {
                    finalDesign[line].push(this.symbolPoint);
                }
                else
                {
                    finalDesign[line].push(this.symbolUp);
                };
            }
            else
            {
                finalDesign[line].push(this.symbolUp);   
            };
        };

        
        //Cuadrante 1
        //--------------------------------------------------------------------------
        for (let line:number = 0; line < this.dim; line++)
        {
            for (let row:number = (this.dim * 2) + 1; row < (this.dim * 4) + 1; row += 2)
            {
                if (checkPoints)
                {
                    let indexPoint:number = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line))
                    {
                        indexPoint++;      
                    };
                    if (indexPoint < transArray.length)
                    {
                        finalDesign[line].push(this.symbolPoint + this.pointsNaming()[indexPoint]);
                    }
                    else
                    {
                        finalDesign[line].push('  ');
                    };
                }
                else
                {
                    finalDesign[line].push('  ');   
                };
            };
        };
        //--------------------------------------------------------------------------


        //Eje X-
        //--------------------------------------------------------------------------
        for (let row:number = 0; row < (this.dim * 2) - 1; row += 2)
        {
            if (checkPoints)
            {
                let indexPoint:number = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== row ||
                    transArray[indexPoint].getY() !== this.dim))
                {
                    indexPoint++;      
                };
                if (indexPoint < transArray.length)
                {
                    lineDesign.push(this.pointsNaming()[indexPoint] + this.symbolPoint);
                }
                else
                {
                    lineDesign.push(this.symbolLeft + this.symbolLeft);
                };
            }
            else
            {
                lineDesign.push(this.symbolLeft + this.symbolLeft);   
            };
        };
        finalDesign.push(lineDesign);
        lineDesign = [];
        //--------------------------------------------------------------------------


        //Origen de Coordenadas
        //--------------------------------------------------------------------------
        if (checkPoints)
        {
            let indexPoint:number = 0;
            while (indexPoint < transArray.length &&
                (transArray[indexPoint].getX() !== this.dim * 2 ||
                transArray[indexPoint].getY() !== this.dim))
            {
                indexPoint++;      
            };
            if (indexPoint < transArray.length)
            {
                finalDesign[this.dim].push(this.symbolPoint);
            }
            else
            {
                finalDesign[this.dim].push(this.symbolO);
            };
        }
        else
        {
            finalDesign[this.dim].push(this.symbolO);   
        };
        //--------------------------------------------------------------------------


        //Eje X+
        //--------------------------------------------------------------------------
        for (let row:number = (this.dim * 2) + 1; row < (this.dim * 4) + 1; row += 2)
        {
            if (checkPoints)
            {
                let indexPoint:number = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== row ||
                    transArray[indexPoint].getY() !== this.dim))
                {
                    indexPoint++;      
                };
                if (indexPoint < transArray.length)
                {
                    finalDesign[this.dim].push(this.symbolPoint + this.pointsNaming()[indexPoint]);
                }
                else
                {
                    finalDesign[this.dim].push(this.symbolRight + this.symbolRight);
                };
            }
            else
            {
                finalDesign[this.dim].push(this.symbolRight + this.symbolRight);   
            };
        };
        //--------------------------------------------------------------------------


        //Cuadrante 3
        //--------------------------------------------------------------------------
        for (let line:number = this.dim + 1; line < (this.dim + 1) * 2; line++)
        {
            for (let row:number = 0; row < this.dim * 2; row += 2)
            {
                if (checkPoints)
                {
                    let indexPoint:number = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line))
                    {
                        indexPoint++;      
                    };
                    if (indexPoint < transArray.length)
                    {
                        lineDesign.push(this.pointsNaming()[indexPoint] + this.symbolPoint);
                    }
                    else
                    {
                        lineDesign.push('  ');
                    };
                }
                else
                {
                    lineDesign.push('  ');   
                };
            };
            finalDesign.push(lineDesign);
            lineDesign = [];
        };
        //--------------------------------------------------------------------------

        //Eje y-
        //--------------------------------------------------------------------------
        for (let line:number = this.dim + 1; line < (this.dim * 2) + 1; line++)
        {
            if (checkPoints)
            {
                let indexPoint:number = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== this.dim * 2 ||
                    transArray[indexPoint].getY() !== line))
                {
                    indexPoint++;      
                };
                if (indexPoint < transArray.length)
                {
                    finalDesign[line].push(this.symbolPoint);
                }
                else
                {
                    finalDesign[line].push(this.symbolDown);
                };
            }
            else
            {
                finalDesign[line].push(this.symbolDown);   
            };
        };
        
        //Cuadrante 4
        //--------------------------------------------------------------------------
        for (let line:number = this.dim + 1; line < (this.dim * 2) + 1; line++)
        {
            for (let row:number = (this.dim * 2) + 1; row < (this.dim * 4) + 1; row += 2)
            {
                if (checkPoints)
                {
                    let indexPoint:number = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line))
                    {
                        indexPoint++;      
                    };
                    if (indexPoint < transArray.length)
                    {
                        finalDesign[line].push(this.symbolPoint + this.pointsNaming()[indexPoint]);
                    }
                    else
                    {
                        finalDesign[line].push('  ');
                    };
                }
                else
                {
                    finalDesign[line].push('  ');   
                };
            };
        };
        //--------------------------------------------------------------------------

        return finalDesign;
    };

    public pointRelativePosition():Punto[]
    {
        let pointsRelativePosition:Punto[] = [];
        for (let indexPoint:number = 0; indexPoint < this.pointsArray.length; indexPoint++)
        {
            let newXPos:number = 2 * (this.dim + this.pointsArray[indexPoint].getX());
            newXPos = newXPos > 21 ? newXPos - 1 : newXPos;
            let newYPos:number = this.dim - this.pointsArray[indexPoint].getY();
            pointsRelativePosition.push(new Punto(newXPos, newYPos));  
        };
        return pointsRelativePosition;
    };

    private pointsNaming():string[]
    {
        let pointsName:string[] = [];
        for (let index:number = 0; index < this.pointsArray.length; index++)
        {
            pointsName.push(String.fromCharCode(97 + index));
        }
        this.setPointsName(pointsName);
        return pointsName;
    };

    public printCartesian(color:string = '33'):void
    {
        console.log('\x1b[4m%s\x1b[0m', this.pointsArray.length + ' Puntos:\n');
        for(let i:number = 0 ; i < this.pointsArray.length; i++)
        {
            console.log(' ' + this.pointsNaming()[i] + this.pointsArray[i].toString());
        };

        for (let line:number = 0; line < this.designCartesian().length; line++)
        {;
            console.log('\t\x1b[' + color + 'm%s\x1b[0m', this.designCartesian()[line].join(''));  
        };
        console.log('\n\n\n');
    };
};
