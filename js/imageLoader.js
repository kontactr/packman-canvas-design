document.addEventListener("DOMContentLoaded" , (e) => {

    let image = new Image();
//console.log(image);
let flag = false;


image.src = "./pacman.png";
image.addEventListener("error" , (e) => {
    //console.log(e);
})



//document.body.appendChild(image);

function getImageData(){
    return [image,flag];
}


});

