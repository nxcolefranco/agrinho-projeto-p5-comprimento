function setup() {
  createCanvas(800, 400); // define o tamanho do fundo
}
//definição dos perssonagens e suas posições de início
let xJogador1 = 650;
let xJogador2 = 0;

function draw() {
  background("#8BC34A"); //define a cor de fundo do jogo
  fill("#915038");
  rect(1, 1, 800, 200); //adiciona um retângulo marrom na parte superior do fundo
  fill("#737373");
  rect(1, 240, 800, 120); //adiciona um retângulo cinza na parte interior do fundo
  fill("#F9ED86");
  rect(1, 285, 60, 15); //adiciona nas linhas 15 a 22 pequenos retângultos amarelo em determinada posição do projeto
  rect(100, 285, 60, 15);
  rect(200, 285, 60, 15);
  rect(300, 285, 60, 15);
  rect(400, 285, 60, 15);
  rect(500, 285, 60, 15);
  rect(600, 285, 60, 15);
  rect(700, 285, 60, 15);
  fill("#CD8F7D");
  rect(1, 189, 800, 15); //adiciona nas linhas 24 a 41 pequenos retângulos marrons em determinada  posição do projeto
  rect(1, 143, 800, 12);
  rect(1, 155, 15, 35);
  rect(50, 155, 15, 35);
  rect(100, 155, 15, 35);
  rect(150, 155, 15, 35);
  rect(200, 155, 15, 35);
  rect(250, 155, 15, 35);
  rect(300, 155, 15, 35);
  rect(350, 155, 15, 35);
  rect(400, 155, 15, 35);
  rect(450, 155, 15, 35);
  rect(500, 155, 15, 35);
  rect(550, 155, 15, 35);
  rect(600, 155, 15, 35);
  rect(650, 155, 15, 35);
  rect(700, 155, 15, 35);
  rect(745, 155, 15, 35);
  textSize(80);
  text("🚜", xJogador1, 100); //adiciona os determinado personagen e sua posição na linha
  text("🚘", xJogador2, 320); //adiciona os determinado personagen e sua posição na linha
  xJogador1 = xJogador1 - 2; //define a velocidade de movimento do xJogador1
  xJogador2 = xJogador2 + 2; //define a velocidade de movimento do xJogador2

  //Nas linhas 49 a 57 ocorre a definição do texto que os jogadores vão falar quando vai aparecer o e seu tamanho
  if (xJogador1 < 400) {
    fill("black");
    textSize(50);
    text("-Tarde Sô!", 450, 100);
  }
  if (xJogador2 > 200) {
    fill("black");
    textSize(50);
    text("-Boa tarde!", 50, 285);
  }
}
