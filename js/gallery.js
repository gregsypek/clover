const gallery = [...document.querySelectorAll('.gallery_icons div a img')];
let bigImg = document.querySelector('.gallery_bigImage img#image-chosen');
let bigPic = document.getElementById('big-pic');



const handleClick =(e)=> {
  e.preventDefault();
  
  
  let selected = e.target.dataset.pic;
  let index = selected.slice(3) - 1;
  
    if(window.innerWidth >= 768) {
  
    // index was taken from dataset attribut as a string and converted into number which reflect proper index in gallery array.
  
    bigImg.src = `/img/${selected}.jpg`;

    // change default source picture in DOM
    bigPic.srcset = `/img/${selected}.jpg`;
    
  } else {
    bigImg.src = `/img/${selected}_small.jpg`;
    bigPic.srcset = `/img/${selected}_small.jpg`;
   
  
}    
const activeDot = gallery.findIndex(img=>img.classList.contains('active-icon'));
gallery[activeDot].classList.remove('active-icon');
gallery[index].classList.add('active-icon');

}


gallery.forEach(item=>item.addEventListener('click', handleClick));






