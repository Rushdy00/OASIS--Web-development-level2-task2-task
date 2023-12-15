const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click" ,() => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide")
const Contents = document.querySelectorAll(".Content")

var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active");
});

slides.forEach((slide) => {
    slide.classList.remove("active");
});

Contents.forEach((Content) => {
    Content.classList.add("active");
});

btns[manual].classList.add("active");
slides[manual].classList.add("active");
Contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);
    });
});

// Animation 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting)  {
        entry.target.classList.add('show');        
    } else {
        entry.target.classList.remove('show');
    
    }

    });
});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));



// Animation 2
const observers = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting)  {
        entry.target.classList.add('show');        
    } else {
        entry.target.classList.remove('show');
    
    }

    });
});


const vanishsElements = document.querySelectorAll('.vanish')
vanishsElements.forEach((el) => observers.observe(el));


