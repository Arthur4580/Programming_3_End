var socket = io.connect();
var pr = prompt("Choose the seazon (winter spring summer autumn)");
var sz1 = "winter";
var sz2 = "spring";
var sz3 = "summer";
var sz4 = "autumn";
var sa=pr;
// var achacXoter=0;
// var cnvacXotakerner=0;
// var keracXoter=0;
// var mahacacXotakerner=0;
var Stats={
    achacXoter:0,
    keracXoter:0,
    cnvacXotakerner:0,
    mahacacXotakerner:0,
}
if (pr == sz1) {
    sa = pr;
}
else if (pr == sz2) {
    sa = pr;
}
else if (pr == sz3) {
    sa = pr;
}
else if (pr ==sz4) {
    sa = pr;
}
else {
    sa = sz1;
}


// document.getElementById('season').innerHTML=sa;

var matrix = [
   [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,3,0,0,0,0,0],
   [0,0,0,0,1,0,0,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,2,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,4,4,0,0,2,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,1,0,1,0,0,4,0,0,0,0,3,0,0,0,0,2,0,1,1,1,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,4,0,4,0,0,0],
   [0,0,0,0,0,4,4,4,0,2,0,0,0,0,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,0,0,0,0,0,4,4,4,0,0,1],
   [0,0,0,2,0,0,4,0,0,0,1,1,0,0,0,4,4,0,1,1,0,0,1,0,4,4,0,0,2,0,0,0,0,1,0,0,4,0,4,0,0,0],
   [0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,0,4,0,0,0,0,0,0,4,4,4,4,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0],
   [0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
   [0,0,0,2,0,1,0,0,0,0,2,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,1,0,0],
   [0,0,0,4,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,5,0,0,0,0,4,4,0,0,2,0,0,0,0],
   [0,1,0,4,4,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,4,4,4,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],
   [0,0,0,4,0,0,1,0,0,2,0,0,0,0,0,0,0,0,2,0,0,4,0,0,0,2,0,0,0,0,0,0,2,0,2,0,0,1,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,4,4,0,2,0,0,0,0,1,0,0,4,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,0,0,1,0,2,0,0,0,4,4,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,4,4,4,0,0,1,1,0,0,0,0,0,0,4,0,2],
   [0,0,0,0,0,0,0,2,0,0,0,1,1,1,2,0,0,2,0,1,0,2,0,1,0,0,0,4,0,0,0,0,0,0,0,0,0,0,4,4,0,0],
   [0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,4,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0],
   [0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,4,4,0,1,1,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,2,0,0,0,0],
   [0,0,0,0,0,1,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,4,0,0,0,0,1,0,0,2],
   [0,0,0,0,2,0,0,0,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,4,4,4,0,2,0,0,0,0,0],
   [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
   [0,2,0,0,4,0,0,1,0,0,0,0,0,1,0,0,0,0,0,2,0,0,0,0,0,0,4,4,0,0,0,1,0,0,0,4,4,4,0,0,1,0],
   [0,0,0,1,0,0,0,0,0,2,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,4,4,4,0,0,0,0,0,0,4,1,4,0,0,0,0],
   [0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,6,0,0,0,0,0,2,1,0,0,0,4,4,4,0,3,0,0],
   [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
];

// var matrix = [
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
// ];


// var matrix = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 5, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

// ];

var side = 30;
var emptyCells = [];
var grassArr = [];
var xotakerner = [];
var zinvorner = [];
var mecxotaker1 = [];
var pe = [];
var pat1 = [];
var tshnaminer=[];

setInterval(function () {

    if (sa == sz1) {
        sa = sz2;
    }
    else if (sa == sz2) {
        sa = sz3;
    }
    else if (sa == sz3) {
        sa = sz4;
    }
    else if (sa == sz4) {
        sa = sz1;
    }

}, 10000);

function setup() {

    frameRate(5);
    createCanvas(matrix[0].length * side + 1, matrix.length * side + 1);
    background('#acacac');

    var xot = new Grass(1, 2);
    var datarkvandakner = xot.yntrelVandak(0);

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);

            }
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y, Math.floor(random(0, 2))));
            }
            else if (matrix[y][x] == 3) {
                var mx = new Gishatich(x, y);
                mecxotaker1.push(mx);
            }
            else if (matrix[y][x] == 4) {
                var pe = new pat(x, y);
                pat1.push(pe);
            }
            else if (matrix[y][x] == 5) {
                var xb = new zinvor(x, y);
                zinvorner.push(xb);
            }
            else if (matrix[y][x] == 6) {
                var tsh = new tshnami(x, y);
                tshnaminer.push(tsh);
            }
        }
    }

}




function draw() {
    if (frameCount%40 == 0) {
        socket.emit("send obj",Stats);
    }



    if (sa == sz1) {
        document.getElementById('season').innerHTML = sa;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                strokeWeight(0);
                if (matrix[y][x] == 1) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("#3FC57A");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("white");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("#4E4EFA");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("#D800EE");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("#72200F");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill("white");
                    rect(x * side, y * side, side, side);
                    fill("#4E6260");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }



    else if (sa == sz2) {
        document.getElementById('season').innerHTML = sa;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                strokeWeight(0);
                if (matrix[y][x] == 1) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("green");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("#acacac");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("yellow");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("blue");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("#72200F");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("red");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill("#acacac");
                    rect(x * side, y * side, side, side);
                    fill("#6F6840");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
            }
        }
    }


    else if (sa == sz3) {
        document.getElementById('season').innerHTML = sa;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                strokeWeight(0);
                if (matrix[y][x] == 1) {
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("#87C72F");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("#FFFFFF");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("#0E229E");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 4) {

                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("#72200F");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("red");
                    rect(x * side, y * side, side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill("#885702");
                    rect(x * side, y * side, side, side);
                    fill("#4E6260");
                    rect(x * side, y * side, side, side);
                }
            }
        }
    }


    else if (sa == sz4) {
        document.getElementById('season').innerHTML = sa;
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                strokeWeight(0);
                if (matrix[y][x] == 1) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("#0BBC00");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 0) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("#CBD093");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 2) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("#D02828");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 3) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("#000000");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 4) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("#72200F");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 5) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("grey");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
                else if (matrix[y][x] == 6) {
                    fill("#CBD093");
                    rect(x * side, y * side, side, side);
                    fill("F0F628");
                    ellipse(x * side + (side / 2), y * side + (side / 2), side, side);
                }
            }
        }
    }










    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (i in xotakerner) {
        xotakerner[i].bazmanal();
        if (!xotakerner[i].utel()) {
            xotakerner[i].sharjvel();
        }
        xotakerner[i].mahanal();
    }
    for (i in mecxotaker1) {
        mecxotaker1[i].bazmanal();
        if (!mecxotaker1[i].utel()) {
            mecxotaker1[i].sharjvel();
        }
        mecxotaker1[i].mahanal();
    }


    for (i in zinvorner) {
        zinvorner[i].sharjvel();
        zinvorner[i].utel();
        break;
    }
    for (i in tshnaminer) {
        tshnaminer[i].bazmanal();
        if (!tshnaminer[i].utel()) {
            tshnaminer[i].sharjvel();
        }
        break;
    }



}