function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  frameRate(1)
  printA(10, 10);
  printB(60, 10);
  printC(110, 10);
  printD(160, 10);
  printE(210, 10);
  printF(260, 10);
  printG(310, 10);
  printH(360, 10);
  printI(410, 10);
  printJ(460, 10);
  printK(510, 10);

  printL(10, 120);
  printM(60, 120);
  printN(110, 120);
  printO(160, 120);
  printP(210, 120);
  printQ(260, 120);
  printR(310, 120);
  printS(360, 120);
  printT(410, 120);
  printU(460, 120);
  printV(510, 120);

  printW(10, 230);
  printX(60, 230);
  printY(110, 230);
  printZ(160, 230);
}


// line(x,y,x,y+100) 左长竖
// line(x,y+5,x,y+95) 左短竖

// line(x+40,y,x+40,y+100) 右长竖
// line(x+40, y+5,x+40,y+95) 右短竖

// line(x,y,x+40,y) 顶长横
// line(x+10,y,x+30,y) 顶短横

// line(x,y+50,x+40,y+50) 中长横

// line(x,y+5,x+10,y) 顶左斜
// line(x+30,y,x+40,y+5) 顶右斜

//line(x,y+100,x+40,y+100) 底长横

function printA(x, y) {
  line(x, y + 5, x, y + 100)
  line(x, y + 5, x + 10, y)
  line(x + 10, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 5, x + 40, y + 100)
  line(x, y + 50, x + 40, y + 50)
}

function printB(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 5, x + 40, y + 45)
  line(x + 40, y + 45, x + 30, y + 50)
  line(x, y + 50, x + 30, y + 50)
  line(x + 30, y + 50, x + 40, y + 55)
  line(x + 40, y + 55, x + 40, y + 95)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 30, y + 100, x, y + 100)
}

function printC(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 30, y + 100, x, y + 100)
}

function printD(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 30, y + 100, x, y + 100)

  line(x + 40, y + 5, x + 40, y + 95)
}

function printE(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 40, y)
  line(x, y + 50, x + 40, y + 50)
  line(x, y + 100, x + 40, y + 100)
}

function printF(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 40, y)
  line(x, y + 50, x + 40, y + 50)
}

function printG(x, y) {
  line(x + 30, y, x + 40, y + 5)
  line(x, y, x + 30, y)
  line(x, y, x, y + 100)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 30, y + 100, x, y + 100)
  line(x + 40, y + 50, x + 40, y + 95)
  line(x + 20, y + 50, x + 40, y + 50)
}

function printH(x, y) {
  line(x, y, x, y + 100);
  line(x + 40, y, x + 40, y + 100);
  line(x, y + 50, x + 40, y + 50);
}

function printI(x, y) {
  line(x + 15, y, x + 25, y)
  line(x + 20, y, x + 20, y + 100)
  line(x + 15, y + 100, x + 25, y + 100)
}

function printJ(x, y) {
  line(x + 15, y, x + 25, y)
  line(x + 20, y, x + 20, y + 95)
  line(x + 20, y + 95, x + 15, y + 100)
  line(x + 15, y + 100, x, y + 100)
}

function printK(x, y) {
  line(x, y, x, y + 100)
  line(x + 40, y, x, y + 55)
  line(x + 8, y + 45, x + 40, y + 100)
}

function printL(x, y) {
  line(x, y, x, y + 100)
  line(x, y + 100, x + 40, y + 100)
}

function printM(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 20, y + 40)
  line(x + 21, y + 40, x + 40, y)
  line(x + 40, y, x + 40, y + 100)
}

function printN(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 40, y + 100)
  line(x + 40, y, x + 40, y + 100)
}

function printO(x, y) {
  line(x, y + 5, x, y + 95)
  line(x, y + 5, x + 10, y)
  line(x + 10, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 5, x + 40, y + 95)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 10, y + 100, x + 30, y + 100)
  line(x, y + 95, x + 10, y + 100)
}

function printP(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 5, x + 40, y + 45)
  line(x + 40, y + 45, x + 30, y + 50)
  line(x, y + 50, x + 30, y + 50)
}

function printQ(x, y) {
  line(x, y + 5, x, y + 95)
  line(x, y + 5, x + 10, y)
  line(x + 10, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 5, x + 40, y + 95)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 10, y + 100, x + 30, y + 100)
  line(x, y + 95, x + 10, y + 100)
  line(x, y + 100, x + 10, y + 95)
}

function printR(x, y) {
  line(x, y, x, y + 100)
  line(x, y, x + 30, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 40, y + 5, x + 40, y + 45)
  line(x + 40, y + 45, x + 30, y + 50)
  line(x, y + 50, x + 30, y + 50)
  line(x + 30, y + 50, x + 40, y + 100)
}

function printS(x, y) {
  line(x, y + 5, x, y + 45)
  line(x + 10, y, x + 30, y)
  line(x, y + 5, x + 10, y)
  line(x + 30, y, x + 40, y + 5)
  line(x + 10, y + 50, x + 30, y + 50) //中间横
  line(x + 30, y + 50, x + 40, y + 55)
  line(x + 40, y + 55, x + 40, y + 95)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 10, y + 100, x + 30, y + 100)
  line(x, y + 95, x + 10, y + 100)
  line(x, y + 45, x + 10, y + 50)
}

function printT(x, y) {
  line(x, y, x + 40, y)
  line(x + 20, y, x + 20, y + 100)
}

function printU(x, y) {
  line(x, y, x, y + 95)

  line(x + 40, y, x + 40, y + 95)
  line(x + 40, y + 95, x + 30, y + 100)
  line(x + 10, y + 100, x + 30, y + 100)
  line(x, y + 95, x + 10, y + 100)
}

function printV(x, y) {
  line(x, y, x + 20, y + 100)
  line(x + 21, y + 100, x + 40, y)
}

function printW(x, y) {
  line(x, y, x, y + 100)
  line(x, y + 100, x + 20, y + 60)
  line(x + 21, y + 60, x + 40, y + 100)
  line(x + 40, y, x + 40, y + 100)

}

function printX(x, y) {
  line(x, y, x + 40, y + 100)
  line(x + 40, y, x, y + 100)
}

function printY(x, y) {
  line(x, y, x + 20, y + 40)
  line(x + 40, y, x + 21, y + 40)
  line(x + 20.5, y + 40, x + 20.5, y + 100)
}

function printZ(x, y) {
  line(x, y, x + 40, y)
  line(x, y, x + 40, y + 100)
  line(x, y + 100, x + 40, y + 100)
}
