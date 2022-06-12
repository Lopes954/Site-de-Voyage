const txtAnim = document.querySelector('h2');

let typewriter = new Typewriter(txtAnim,  {
    loop: false,
    deleteSpeed: 20
})

typewriter 
.pauseFor(1000)
.changeDelay(20)
.typeString('Bienvenue sur votre site de réservartion')
.pauseFor(300)
.typeString('<span style="color: #ff7a00;"> de vol</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #ff7a00;"> d\'hotel</span> !')
.pauseFor(1000)
.deleteChars(9)
.typeString('<span style="color: #ff7a00;"> et d\'activité en tout genre</span> !')

.start()

const navbar = document.querySelector('.navhover');
const article1 = document.querySelector('.select1');
const article2 = document.querySelector('.select2');



const TL1 = gsap.timeline({paused: true});

TL1 
.to(navbar, {margin: '0px', ease: Power3.easeOut, duration: 0.5})
.to(article1, {display: 'initial', ease: Power3.easeOut, duration: 0.5})
.to(article2, {display: 'initial', ease: Power3.easeOut, duration: 0.5})


window.addEventListener('load', () => {
    TL1.play();
})



// apparition en scroolant vers le bas


const carte = document.querySelectorAll('#possibilite')
const controller = new ScrollMagic.Controller();


const tlVoyage = new TimelineMax();

tlVoyage
.staggerFrom(carte, 1, {opacity: 0}, 0.2, '-=0.5')

const scene = new ScrollMagic.Scene({
    triggerElement: carte,
    triggerHook: 0.7,
    reverse: true
})
.setTween(tlVoyage)
// .addIndicators()
.addTo(controller)