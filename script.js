const hotelMenu = document.querySelector(".hotel-nav-item");
const hotelDropdown = document.querySelector(".hotel-nav-dropdown");

let timeout;

hotelMenu.addEventListener("mouseenter",()=>{

    clearTimeout(timeout);

    hotelDropdown.style.opacity="1";

    hotelDropdown.style.visibility="visible";

    hotelDropdown.style.pointerEvents="all";

    hotelDropdown.style.transform="translateX(-50%) translateY(0)";

});

hotelMenu.addEventListener("mouseleave",()=>{

    timeout=setTimeout(()=>{

        hotelDropdown.style.opacity="0";

        hotelDropdown.style.visibility="hidden";

        hotelDropdown.style.pointerEvents="none";

        hotelDropdown.style.transform="translateX(-50%) translateY(20px)";

    },150);

});

hotelDropdown.addEventListener("mouseenter",()=>{

    clearTimeout(timeout);

});

hotelDropdown.addEventListener("mouseleave",()=>{

    hotelDropdown.style.opacity="0";

    hotelDropdown.style.visibility="hidden";

    hotelDropdown.style.pointerEvents="none";

    hotelDropdown.style.transform="translateX(-50%) translateY(20px)";

});


// page -2
const hotelCards = document.querySelectorAll(".hotel-service-card");
const floatingImage = document.querySelector(".hotel-floating-image");
const previewImage = document.querySelector(".hotel-preview-image");

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    floatingImage.style.left = mouseX + "px";
    floatingImage.style.top = mouseY + "px";

});

hotelCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        floatingImage.style.transform =
            "translate(-50%,-50%) scale(1)";

        const image = card.getAttribute("data-image");

        previewImage.src = image;

    });

    card.addEventListener("mouseleave", () => {

        floatingImage.style.transform =
            "translate(-50%,-50%) scale(0)";

    });

});



/*page-3*/
const playBtn = document.querySelector(".play");
const icon = document.querySelector(".play i");
const video = document.querySelector(".hotelVideo");

let playing = false;

playBtn.addEventListener("click",()=>{

    if(!playing){

        video.style.opacity="1";
        video.play();

        icon.className="ri-pause-fill";

        playing=true;

    }else{

        video.pause();
        video.currentTime=0;

        video.style.opacity="0";

        icon.className="ri-play-fill";

        playing=false;
    }

});

const bookingButton=document.querySelector(".booking-submit-btn");

bookingButton.addEventListener("mouseenter",()=>{

    bookingButton.innerHTML="Reserve Now";

});

bookingButton.addEventListener("mouseleave",()=>{

    bookingButton.innerHTML="BOOK YOUR STAY";

});