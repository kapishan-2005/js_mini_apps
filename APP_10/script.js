const images = ["algorithmic-bias-social-networks.jpeg","download (1).jpeg","download.jpeg"];
let index=0;

setInterval(() => {
    document.getElementById("slider").src= images[index];
    index++;
    if(index===images.length){
        index=0;
    }
},2000);