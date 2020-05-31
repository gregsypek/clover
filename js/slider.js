
const slideList = [ 
  {
    id: 1,
    text: "Miód wzmacnia serce, koi nerwy, ożywia mózg, goi rany. Ma właściwości antybakteryjne - niektóre bakterie zwalcza lepiej niż antybiotyki."
  },
  {
    id: 2,
    text: " Zawarta w miodzie acetylocholina wzmacnia wydolność mięśnia sercowego. Także obecny w nim potas zbawiennie działa na serce."
  },
  {
    id: 3,
    text: "Miód zawiera duże ilości mikroelementów: potas, chlor, fosfor, magnez, wapń, żelazo, molibden, mangan i kobalt oraz witamin: A, B1, B2, B6, B12, C, kwas foliowy, pantotenowy i biotynę."
  },
  {
    id: 4,
    text: "W Polsce najczęściej kupowany jest miód lipowy. Jest produktem bardzo łatwo przyswajalnym, całkowicie trawi się w ciągu niepełnych 2 godzin (dla porównania: szynka w 4 godziny)."
  },
  {
    id: 5,
    text: "Miód od dawna służył pielęgnacji urody. Znane są jego właściwości nawilżające, rozjaśniające i uelastyczniające skórę."
  },
  {
    id: 6,
    text: "Jeżeli zamknięty słoiczek będziemy przechowywać w chłodnym miejscu (najwłaściwsza jest temperatura 6-10 st. Celsjusza), nie straci swych wartości przez 23 lata."
  },
  
]


const quote = document.querySelector('p.quote');
const dots = [...document.querySelectorAll('.slide-dots span')];

// Interface

const time = 5000;
let active = 0;


// Implementation

  const changeDot = ()=> {
    const activeDot = dots.findIndex(dot=>dot.classList.contains('active-dot'));
    dots[activeDot].classList.remove('active-dot');
    dots[active].classList.add('active-dot');
  }
  
  const changeSlide = ()=> {
    active++;
    if(active === slideList.length){
      active = 0;
    }
    quote.textContent = slideList[active].text;
    changeDot();
  }
  let indexInterval = setInterval(changeSlide, time);

  const keyChangeSlide = (e) => {
    // console.log(e.keyCode);
  
    if(e.keyCode == 37 || e.keyCode == 39) {
      
      clearInterval(indexInterval);
      e.keyCode == 37 ? active-- : active++;
      if(active === slideList.length) {
        active = 0;
      } else if (active < 0) {
        active = slideList.length - 1;
      }
      quote.textContent = slideList[active].text;
      changeDot();
      indexInterval = setInterval(changeSlide, time);
    }
  }


  const clickChangeSlide = (e) => {
    let clicked = e.target.dataset.key;
    clearInterval(indexInterval);
    const activeDot = dots.findIndex(dot=>dot.classList.contains('active-dot'));

    dots[activeDot].classList.remove('active-dot');
    dots[clicked].classList.add('active-dot');

    quote.textContent = slideList[clicked].text;
    indexInterval = setInterval(changeSlide, time);
    }
  

  window.addEventListener('keydown', keyChangeSlide);

  console.log(dots);


dots.forEach(item => item.addEventListener('click', clickChangeSlide));
