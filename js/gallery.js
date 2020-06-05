const gallery = [...document.querySelectorAll('.gallery_icons li a img')];
const bigImg = document.querySelector('.gallery_bigImage img');


const changeImage =(e)=> {
  e.preventDefault();
  
  const selected = e.target.dataset.pic;

  // index was taken from dataset attribut as a string and converted into number which reflect proper index in gallery array.

  let index = selected.slice(3) - 1;
  bigImg.src = `./img/${selected}.jpg`;


const activeDot = gallery.findIndex(img=>img.classList.contains('active-icon'));
    gallery[activeDot].classList.remove('active-icon');
    gallery[index].classList.add('active-icon');
    gallery[activeDot].style.backgroundColor = 'red';
    
  gallery[index].style.backgroundColor = "red";
}
gallery.forEach(item=>item.addEventListener('click', changeImage));







