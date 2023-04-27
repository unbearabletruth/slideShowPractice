let slideIndex = 1;
showSlides();

const previous = document.querySelector("#previousButton");
previous.addEventListener("click", () => {
    moveSlide(-1);
});

const next = document.querySelector("#nextButton");
next.addEventListener("click", () => {
    moveSlide(1);
});

const dots = document.querySelectorAll(".dot");
dots.forEach(dot => {
    dot.addEventListener("click", () => {
        dotCurrentSlide(Number(dot.id))
    });
});

function moveSlide(n){
    slideIndex += n;
    showSlides();
}

function dotCurrentSlide(n){
    slideIndex = n;
    showSlides();
}

function showSlides(){
    console.log("at start", slideIndex)
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    if (slideIndex > slides.length){
        slideIndex = 1;
    }else if (slideIndex < 1){
        slideIndex = slides.length;
    }
    console.log("bellow", slideIndex)
    for (let slide of slides){
        slide.style.display = "none";
    }
    for (let dot of dots){
        dot.style.backgroundColor = "grey";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.backgroundColor = "#404040";
}

let toAuto = setTimeout(showSlidesAuto, 10000);

function showSlidesAuto(){
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    slideIndex++;
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    for (let slide of slides){
        slide.style.display = "none";
    }
    for (let dot of dots){
        dot.style.backgroundColor = "grey";
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].style.backgroundColor = "#404040";
    const autoSlider = setTimeout(showSlidesAuto, 3000);
    stopSlidesAuto(autoSlider);
}

function stopSlidesAuto(autoSlider){
    window.addEventListener("mousemove", () => {
        clearTimeout(autoSlider);
        clearTimeout(toAuto);
        toAuto = setTimeout(showSlidesAuto, 10000);
    })
}