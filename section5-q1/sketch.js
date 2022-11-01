// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(1200, 1200);
  background(255);
  balloon("I love keyakizaka46");
}

function balloon(t){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 20;
  let rect_w =  w + p * 2;
  let rect_h =  h + p * 2;
  fill(0);
  rect(p, p, rect_w, rect_h);
  fill(255);
  textAlign(CENTER,CENTER);
  text(t, p+rect_w/2, p+ (rect_h)/2);
}
