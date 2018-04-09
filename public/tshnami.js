class tshnami extends KendaniEak {
    constructor(x, y, ser) {
        super(x, y);
        this.energy=0;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }


    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
        }
    }

    utel() {
        this.energy++;
        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 6;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }

            }
            return true;
        }
    }
    bazmanal() {
        if (this.energy == 5) {
            this.energy = 0;
            var norVandak = random(this.yntrelVandak(1));
            if (norVandak) {
                Stats.cnvacXotakerner++;
                var norXotaker = new Xotaker(norVandak[0], norVandak[1],2,Math.floor(random(0,2)));
                xotakerner.push(norXotaker);
                matrix[norVandak[1]][norVandak[0]] = 2;
              }
        }
    }

}

