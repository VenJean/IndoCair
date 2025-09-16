const usdInput = document.getElementById('usdAmount');
const idrInput = document.getElementById('idrAmount');
const adminFeeInput = document.getElementById('adminFee');
const dynamicTextElement = document.getElementById('dynamicText');



let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").classList.remove("navbar-hidden");
        document.getElementById("navbar").classList.add("navbar-visible");
    } else {
        document.getElementById("navbar").classList.remove("navbar-visible");
        document.getElementById("navbar").classList.add("navbar-hidden");
    }
    prevScrollpos = currentScrollPos;
}

function showAlert(event) {
    event.preventDefault(); // Prevent the default action of the link
    alert("Sedang dalam tahap pengembangan");
}


//FAVICON

// Create a new canvas element
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

// Set the canvas dimensions to the desired favicon size (usually 16x16 or 32x32 pixels)
canvas.width = 32;
canvas.height = 32;

// Load the image and draw it onto the canvas
const image = new Image();
image.src = 'myFavicon.png';
image.onload = () => {
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// Convert the canvas to a Data URL
const dataUrl = canvas.toDataURL('image/png');