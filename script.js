const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const button = document.querySelector("button");
const fileExists = document.querySelector("p");

console.log(button.id);
button.addEventListener("click", imageSpin);

function imageSpin(){
    const image = document.querySelector("#picture");
    if(image.value.length > 0){
        fileExists.textContent = "BEHOLD";
    }
}



