
class zinvor extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.index = 5;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }


    sharjvel() {
       
            var norVandak = random(this.yntrelVandak(0));
            if (!norVandak) {
                var norVandak = random(this.yntrelVandak(1));
            }

            if (norVandak) {
                matrix[norVandak[1]][norVandak[0]] = 5;
                matrix[this.y][this.x] = 0;
                this.x = norVandak[0];
                this.y = norVandak[1];
                for (var i in grassArr) {
                    if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }

            }


    }
    utel() {

        var norVandak = random(this.yntrelVandak(2));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 5;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            
        }
    }
}
