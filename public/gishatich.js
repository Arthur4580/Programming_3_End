class Gishatich extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        this.energy2 = 0;
        if (sa == sz1) {
            this.energy = 50;
        }
        else if (sa == sz2 || sa == sz4) {
            this.energy = 75;
        }
        else if (sa == sz3) {
            this.energy = 100;
        }
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



    sharjvel() {
        var norVandak = random(this.yntrelVandak(0));
        if (!norVandak) {
            var norVandak = random(this.yntrelVandak(1));
        }
        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if (this.energy > 0) {
                this.energy--;
            }
        }
    }

    utel() {

        var norVandak = random(this.yntrelVandak(2));

        if (norVandak) {
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            if (sa == sz1) {
                if (this.energy < 50) {
                    this.energy++;
                }
            }
            else if (sa == sz2 || sa == sz4) {
                if (this.energy < 75) {
                    this.energy++;
                }
            }
            else if (sa == sz3) {
                if (this.energy < 100) {
                    this.energy++;
                }
            }

            // if (this.energy < 200) {
            //     this.energy++;
            // }
            this.energy2++;
            return true;
        }


    }

    mahanal() {
        if (this.energy == 0) {
            for (var i in mecxotaker1) {
                if (mecxotaker1[i].x == this.x && mecxotaker1[i].y == this.y) {
                    mecxotaker1.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }

    bazmanal() {
        if (this.energy2 == 300) {
            this.energy2 = 0;
            var norvandak = random(this.yntrelVandak(0));
            if (norvandak) {
                var x = norvandak[0];
                var y = norvandak[1];
                var norXotaker = new Gishatich(x, y);
                mecxotaker1.push(norXotaker);
                matrix[y][x] = 3;
            }
        }
    }
}




