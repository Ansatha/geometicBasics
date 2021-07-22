"use strict";
exports.__esModule = true;
exports.CartesianAxis = void 0;
var ClassPunto_1 = require("./ClassPunto");
var CartesianAxis = /** @class */ (function () {
    function CartesianAxis(dim, pointsArray, symbolPoint, // ⊥ ⊤ ⊣ ⊢ ⨀ ⨁ ⨷
    symbolUp, symbolO, symbolDown, symbolLeft, symbolRight) {
        if (dim === void 0) { dim = 10; }
        if (pointsArray === void 0) { pointsArray = []; }
        if (symbolPoint === void 0) { symbolPoint = '⨂'; }
        if (symbolUp === void 0) { symbolUp = '|'; }
        if (symbolO === void 0) { symbolO = '+'; }
        if (symbolDown === void 0) { symbolDown = '|'; }
        if (symbolLeft === void 0) { symbolLeft = '-'; }
        if (symbolRight === void 0) { symbolRight = '-'; }
        this.dim = dim;
        this.symbolUp = symbolUp;
        this.symbolO = symbolO;
        this.symbolDown = symbolDown;
        this.symbolLeft = symbolLeft;
        this.symbolRight = symbolRight;
        this.symbolPoint = symbolPoint;
        this.pointsName = [];
        this.pointsArray = pointsArray;
    }
    ;
    CartesianAxis.prototype.setPointsName = function (pointsName) {
        this.pointsName = pointsName;
    };
    ;
    CartesianAxis.prototype.getPointsName = function () {
        return this.pointsName;
    };
    ;
    CartesianAxis.prototype.designCartesian = function () {
        var finalDesign = [];
        var lineDesign = [];
        var checkPoints = this.pointsArray.length != 0;
        var transArray = this.pointRelativePosition();
        //Cuadrante 2
        //--------------------------------------------------------------------------
        for (var line = 0; line < this.dim; line++) {
            for (var row = 0; row < (this.dim * 2) - 1; row += 2) {
                if (checkPoints) {
                    var indexPoint = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line)) {
                        indexPoint++;
                    }
                    ;
                    if (indexPoint < transArray.length) {
                        lineDesign.push(this.pointsNaming()[indexPoint] + this.symbolPoint);
                    }
                    else {
                        lineDesign.push('  ');
                    }
                    ;
                }
                else {
                    lineDesign.push('  ');
                }
                ;
            }
            ;
            finalDesign.push(lineDesign);
            lineDesign = [];
        }
        ;
        //--------------------------------------------------------------------------
        //Eje y+
        //--------------------------------------------------------------------------
        for (var line = 0; line < this.dim; line++) {
            if (checkPoints) {
                var indexPoint = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== this.dim * 2 ||
                        transArray[indexPoint].getY() !== line)) {
                    indexPoint++;
                }
                ;
                if (indexPoint < transArray.length) {
                    finalDesign[line].push(this.symbolPoint);
                }
                else {
                    finalDesign[line].push(this.symbolUp);
                }
                ;
            }
            else {
                finalDesign[line].push(this.symbolUp);
            }
            ;
        }
        ;
        //Cuadrante 1
        //--------------------------------------------------------------------------
        for (var line = 0; line < this.dim; line++) {
            for (var row = (this.dim * 2) + 1; row < (this.dim * 4) + 1; row += 2) {
                if (checkPoints) {
                    var indexPoint = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line)) {
                        indexPoint++;
                    }
                    ;
                    if (indexPoint < transArray.length) {
                        finalDesign[line].push(this.symbolPoint + this.pointsNaming()[indexPoint]);
                    }
                    else {
                        finalDesign[line].push('  ');
                    }
                    ;
                }
                else {
                    finalDesign[line].push('  ');
                }
                ;
            }
            ;
        }
        ;
        //--------------------------------------------------------------------------
        //Eje X-
        //--------------------------------------------------------------------------
        for (var row = 0; row < (this.dim * 2) - 1; row += 2) {
            if (checkPoints) {
                var indexPoint = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== row ||
                        transArray[indexPoint].getY() !== this.dim)) {
                    indexPoint++;
                }
                ;
                if (indexPoint < transArray.length) {
                    lineDesign.push(this.pointsNaming()[indexPoint] + this.symbolPoint);
                }
                else {
                    lineDesign.push(this.symbolLeft + this.symbolLeft);
                }
                ;
            }
            else {
                lineDesign.push(this.symbolLeft + this.symbolLeft);
            }
            ;
        }
        ;
        finalDesign.push(lineDesign);
        lineDesign = [];
        //--------------------------------------------------------------------------
        //Origen de Coordenadas
        //--------------------------------------------------------------------------
        if (checkPoints) {
            var indexPoint = 0;
            while (indexPoint < transArray.length &&
                (transArray[indexPoint].getX() !== this.dim * 2 ||
                    transArray[indexPoint].getY() !== this.dim)) {
                indexPoint++;
            }
            ;
            if (indexPoint < transArray.length) {
                finalDesign[this.dim].push(this.symbolPoint);
            }
            else {
                finalDesign[this.dim].push(this.symbolO);
            }
            ;
        }
        else {
            finalDesign[this.dim].push(this.symbolO);
        }
        ;
        //--------------------------------------------------------------------------
        //Eje X+
        //--------------------------------------------------------------------------
        for (var row = (this.dim * 2) + 1; row < (this.dim * 4) + 1; row += 2) {
            if (checkPoints) {
                var indexPoint = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== row ||
                        transArray[indexPoint].getY() !== this.dim)) {
                    indexPoint++;
                }
                ;
                if (indexPoint < transArray.length) {
                    finalDesign[this.dim].push(this.symbolPoint + this.pointsNaming()[indexPoint]);
                }
                else {
                    finalDesign[this.dim].push(this.symbolRight + this.symbolRight);
                }
                ;
            }
            else {
                finalDesign[this.dim].push(this.symbolRight + this.symbolRight);
            }
            ;
        }
        ;
        //--------------------------------------------------------------------------
        //Cuadrante 3
        //--------------------------------------------------------------------------
        for (var line = this.dim + 1; line < (this.dim + 1) * 2; line++) {
            for (var row = 0; row < this.dim * 2; row += 2) {
                if (checkPoints) {
                    var indexPoint = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line)) {
                        indexPoint++;
                    }
                    ;
                    if (indexPoint < transArray.length) {
                        lineDesign.push(this.pointsNaming()[indexPoint] + this.symbolPoint);
                    }
                    else {
                        lineDesign.push('  ');
                    }
                    ;
                }
                else {
                    lineDesign.push('  ');
                }
                ;
            }
            ;
            finalDesign.push(lineDesign);
            lineDesign = [];
        }
        ;
        //--------------------------------------------------------------------------
        //Eje y-
        //--------------------------------------------------------------------------
        for (var line = this.dim + 1; line < (this.dim * 2) + 1; line++) {
            if (checkPoints) {
                var indexPoint = 0;
                while (indexPoint < transArray.length &&
                    (transArray[indexPoint].getX() !== this.dim * 2 ||
                        transArray[indexPoint].getY() !== line)) {
                    indexPoint++;
                }
                ;
                if (indexPoint < transArray.length) {
                    finalDesign[line].push(this.symbolPoint);
                }
                else {
                    finalDesign[line].push(this.symbolDown);
                }
                ;
            }
            else {
                finalDesign[line].push(this.symbolDown);
            }
            ;
        }
        ;
        //Cuadrante 4
        //--------------------------------------------------------------------------
        for (var line = this.dim + 1; line < (this.dim * 2) + 1; line++) {
            for (var row = (this.dim * 2) + 1; row < (this.dim * 4) + 1; row += 2) {
                if (checkPoints) {
                    var indexPoint = 0;
                    while (indexPoint < transArray.length && (transArray[indexPoint].getX() !== row || transArray[indexPoint].getY() !== line)) {
                        indexPoint++;
                    }
                    ;
                    if (indexPoint < transArray.length) {
                        finalDesign[line].push(this.symbolPoint + this.pointsNaming()[indexPoint]);
                    }
                    else {
                        finalDesign[line].push('  ');
                    }
                    ;
                }
                else {
                    finalDesign[line].push('  ');
                }
                ;
            }
            ;
        }
        ;
        //--------------------------------------------------------------------------
        return finalDesign;
    };
    ;
    CartesianAxis.prototype.pointRelativePosition = function () {
        var pointsRelativePosition = [];
        for (var indexPoint = 0; indexPoint < this.pointsArray.length; indexPoint++) {
            var newXPos = 2 * (this.dim + this.pointsArray[indexPoint].getX());
            newXPos = newXPos > 21 ? newXPos - 1 : newXPos;
            var newYPos = this.dim - this.pointsArray[indexPoint].getY();
            pointsRelativePosition.push(new ClassPunto_1.Punto(newXPos, newYPos));
        }
        ;
        return pointsRelativePosition;
    };
    ;
    CartesianAxis.prototype.pointsNaming = function () {
        var pointsName = [];
        for (var index = 0; index < this.pointsArray.length; index++) {
            pointsName.push(String.fromCharCode(97 + index));
        }
        this.setPointsName(pointsName);
        return pointsName;
    };
    ;
    CartesianAxis.prototype.printCartesian = function (color) {
        if (color === void 0) { color = '33'; }
        console.log('\x1b[4m%s\x1b[0m', this.pointsArray.length + ' Puntos:\n');
        for (var i = 0; i < this.pointsArray.length; i++) {
            console.log(' ' + this.pointsNaming()[i] + this.pointsArray[i].toString());
        }
        ;
        for (var line = 0; line < this.designCartesian().length; line++) {
            ;
            console.log('\t\x1b[' + color + 'm%s\x1b[0m', this.designCartesian()[line].join(''));
        }
        ;
        console.log('\n\n\n');
    };
    ;
    return CartesianAxis;
}());
exports.CartesianAxis = CartesianAxis;
;
