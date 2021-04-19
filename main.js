canvas =document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car2.png";
car2_x = 10;
car2_y = 100;

background_image = "racing.jpg";

function add(){
    background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; //setting a function, onloading this variable
    background_imgTag.src = backround_image;  //load image

    car1_imgTag = new Image(); //defining a variable with a new image
    car1_imgTag.onload = uploadcar1; //setting a function, onloading this variable
    car1_imgTag.src = car1_image;  //load image

    car2_imgTag = new Image(); //defining a variable with a new image
    car2_imgTag.onload = uploadcar1; //setting a function, onloading this variable
    car2_imgTag.src = car1_image;  //load image

}

function uploadBackground() {
    ctx.drawImage(background_image, 0, 0,0, canvas.width, canvas.height);

}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1.width, car1.height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2.width, car2.height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed =='38')
    {
        car1_up();
        console.log("up arrow key")
    }
    if(keyPressed =='40')
    {
        car1_down();
        console.log("down arrow key")
    }
    if(keyPressed =='37')
    {
        car1_left();
        console.log("left arrow key")
    }
    if(keyPressed =='39')
    {
        car1_right();
        console.log("right arrow key")
    }
    if(keyPressed =='87')
    {
        car2_up();
        console.log("key w")
    }
    if(keyPressed =='65')
    {
        car2_down();
        console.log("key a")
    }
    if(keyPressed =='66')
    {
        car2_left();
        console.log("key b")
    }
    if(keyPressed =='67')
    {
        car2_right();
        console.log("key c")
    }
}