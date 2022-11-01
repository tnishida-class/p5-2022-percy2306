// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let StartTime = Date.now();
let CurrentTime = 0;
let hearts = []

function setup() {
  createCanvas(windowWidth, windowHeight);

  let test = new Heart(width / 2, height / 2, 800, 150);
  hearts.push(test)
}

function draw() {
  // background(160, 192, 255);
  background(0, 0, 0);
  // noStroke();

  CurrentTime = Date.now() - StartTime;

  if (CurrentTime > random(400, 1200)) {
    let test = new Heart(random(100, width - 100), random(100, height - 100), random(600, 1200), random(100,300));
    hearts.push(test)
    StartTime = Date.now();
  }

  for (var i = 0; i < hearts.length; i++) {
    hearts[i].update();
    hearts[i].draw();
  }

  if (hearts.length > 20) {
    hearts.shift();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Heart {

  // コンストラクタ
  constructor(x, y, beat, max_size) {
    this.x = x;
    this.y = y;
    this.size = 30;
    this.max_size = max_size;
    this.vsize = 10;
    this.beat_sw = false;
    this.beat = beat;
    this.StartTime = Date.now();
    this.CurrentTime = 0;
    fill(124, 10, 2);
  }
  // メソッドの定義
  update() {
    this.size -= this.vsize;
    
    // this.StartTime = Date.now();
    this.CurrentTime = Date.now() - this.StartTime;

    if (this.beat_sw == true) {
      if (this.CurrentTime > this.beat) {
        this.size = this.max_size;
        this.StartTime = Date.now();
        this.beat_sw = false;
        fill(124, 10, 2);
      }
    }
    else {
      if (this.CurrentTime > this.beat / 2) {
        this.size = 2*this.max_size/3;
        this.StartTime = Date.now();
        this.beat_sw = true;
        fill(173, 40, 40);
      }
    }

    this.size = constrain(this.size, this.max_size/5, this.max_size);

  }



  // メソッドの定義（クラスの外に同名の関数等があっても OK）
  draw() {
    if (this.beat_sw == false) {
      ellipse(this.x, this.y, this.size);
    }
    else {
      square(this.x - this.size / 2, this.y - this.size / 2, this.size);
    }
  }
}
