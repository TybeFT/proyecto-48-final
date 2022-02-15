// Paredes Lab1
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14,
    wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall21, wall22, wall23, wall24, wall25, wall26,
    wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38;

// Grupo de las paredes (for{collision}) 
var wallsGroup;

// Imagenes VAR
var playerAnm, npc1Anm, meta1Anm, menuImg, gameMenuImg, endImg;

// PC,NPC
var player, npc1, meta1;

//Estado inicial juego
var gameState = "serve";

// JS Codes
var menu, game, questions, system, answers;

// Vidas
var lifes = 10;

// Intentos pregunta
var trys = 3;

// Estado npc
var npcState = "combat";

//constantes
const playerSpawnX = 70;
const playerSpawnY = 80;

function preload() {
    menuImg = loadImage("MenuImg.jpg");

    meta1Anm = loadImage("Img/mt1.png", "Img/mt2.png", "Img/mt3.png", "Img/mt4.png");

    answerImg = loadImage("question1BG.jpg");

    playerAnm = loadImage("Img/wr2.png");

    npc1Anm = loadImage("Img/st1.png", "Img/st2.png", "Img/st3.png", "Img/st4.png", "Img/st5.png", "Img/st6.png", "Img/st7.png", "Img/st8.png", "Img/st9.png", "Img/st10.png",
        "img/st11.png", "Img/st12.png", "Img/st13.png", "Img/st14.png", "Img/st15.png", "Img/st16.png", "Img/st17.png", "Img/st18.png", "Img/st19.png", "Img/st20.png",
        "img/st21.png");

    gameMenuImg = loadImage("gameBG.jpg");

    endImg = loadImage("finishBG.jpg");
}


function setup() {
    createCanvas(displayWidth, displayHeight);

    alert("Presiona F11 para una mejor experiencia!");

    // Sprites 
    player = createSprite(playerSpawnX, playerSpawnY, 10, 10);
    player.addImage("Right Run", playerAnm);
    player.debug = false;
    player.setCollider("rectangle", 0, 1, 12, 30);
    player.scale = 1.8

    npc1 = createSprite(displayWidth / 2 + 90, 350, 50, 50);
    npc1.addImage("stand", npc1Anm);
    npc1.debug = false;
    npc1.setCollider("rectangle", 0, -110, 100, 470);

    meta1 = createSprite(1770, 800, 50, 50);
    meta1.addImage("Stand", meta1Anm);
    meta1.scale = 1.5;
    meta1.debug = false;
    meta1.setCollider("rectangle", 0, 0, 210, 60);

    edges = createEdgeSprites();

    menu = new Menu();
    game = new Game();
    questions = new Questions();
    system = new System();

    wallsGroup = new Group();
}

function draw() {
    background(answerImg);

    useQuadTree(true);

    player.collide(edges);

    if (gameState == "serve") {
        menu.display();
        questions.hide();
    } else if (gameState == "play") {
        trys = 3;
        game.display();
        menu.delete();
        drawSprites();
        questions.hide();
        questions.button1.style('background', 'gray');
        if (player.isTouching(meta1)) {
            npcState = "dead";
        }
    } else if (gameState == "question1") {
        questions.display();
        questions.show();
    }


    // console.log("npcState: ", npcState);
    // console.log("gameState: ", gameState);
    // console.log("X: ",player.x);
    // console.log("Y: ", player.y);


}

function createWalls(sprite, x, y, width, height) {
    sprite = createSprite(x, y, width, height);
    sprite.shapeColor = 16, 17, 2;
    wallsGroup.add(sprite);
}