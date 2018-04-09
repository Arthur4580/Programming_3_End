class Xotaker extends KendaniEak {
    constructor(x, y, ser) {
        super(x, y);
        this.tariq = 0;
        this.energy2 = 0;
        if (sa == sz1) {
            this.energy = 5;
        }
        else if (sa == sz2 || sa == sz4) {
            this.energy = 4;
        }
        else if (sa == sz3) {
            this.energy = 3;
        }
        this.ser = ser;


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
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            if (this.energy > 0) {
                this.energy--;
                this.energy2 = 0;
            }
        }
    }

    utel() {

        var norVandak = random(this.yntrelVandak(1));
        if (norVandak) {
            Stats.keracXoter++;
            matrix[this.y][this.x] = 0;
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.x = norVandak[0];
            this.y = norVandak[1];
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (sa == sz1) {
                if (this.energy < 5) {
                    this.energy++;
                }
            }
            else if (sa == sz2 || sa == sz4) {
                if (this.energy < 4) {
                    this.energy++;
                }
            }
            else if (sa == sz3) {
                if (this.energy < 3) {
                    this.energy++;
                }
            }

            this.energy2++;
            return true;
        }
    }

    mahanal() {
        if (this.energy == 0) {
            for (var i in xotakerner) {
                if (xotakerner[i].x == this.x && xotakerner[i].y == this.y) {
                   Stats.mahacacXotakerner++;
                   xotakerner.splice(i, 1);
                    matrix[this.y][this.x] = 0;
                    break;
                }
            }
        }
    }

    bazmanal() {

            // this.stanalNorKordinatner();
            // var norVandak = random(this.yntrelVandak(2));
            // if (norVandak) {
            //     if (xotakerner[i].ser != this.ser) {
            //         var norVandak = random(this.yntrelVandak(0));
            //         if (norVandak) {
            //             var norXotaker = new Xotaker(norVandak[0], norVandak[1], Math.floor(random(0, 2)));
            //             xotakerner.push(norXotaker);
            //             matrix[norVandak[1]][norVandak[0]] = 2;
            //         }
            //     }
            // }




                this.stanalNorKordinatner();
                var norvandak = random(this.yntrelVandak(2));
                if(norvandak){
                var resr;
                for( var i in xotakerner){
                  if(xotakerner[i].x==norvandak[0] && xotakerner[i].y==norvandak[1]){
                    resr =i;
                    break;
                  }
                }
                if(xotakerner[resr].ser!=this.ser){
                   Stats.cnvacXotakerner++;
                var norVandak = random(this.yntrelVandak(0));
                if (norVandak) {
                  var norXotaker = new Xotaker(norVandak[0], norVandak[1],2,Math.floor(random(0,2)));
                  xotakerner.push(norXotaker);
                  matrix[norVandak[1]][norVandak[0]] = 2;
                }
              }
            }
            
    }
}

