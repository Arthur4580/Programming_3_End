class Grass extends KendaniEak {
    constructor(x, y) {
        super(x, y);
        if (sa == sz1) {
            this.multiply = 100;
        }
        else if (sa == sz2 || sa == sz4) {
            this.multiply = 120;
        }
        else if (sa == sz3) {
            this.multiply = 150;
        }
    }
    bazmanal() {
        this.multiply+=5;
        var norVandak = random(this.yntrelVandak(0));

        if (this.multiply >= 6 && norVandak) {
            Stats.achacXoter++;
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }

}