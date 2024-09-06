let imgArr =[ "./image/image1.jpg", "./image/image2.jpg", "./image/image3.jpg", "./image/image4.jpg"];

function radioImage (para) {
    document.getElementById("slider").src = imgArr[para];
};