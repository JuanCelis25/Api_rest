const cards1= document.getElementById('card');
const cards2 = document.getElementById('card2');
const cards3 = document.getElementById('card3');
const cards4 = document.getElementById('card4');

cards1.addEventListener('mousemove', ()=>{
      cards1.classList.add('card1');
});
cards1.addEventListener('mouseleave', ()=>{
      cards1.classList.remove('card1');
})

cards2.addEventListener('mousemove', ()=>{
      cards2.classList.add('card1');
});
cards2.addEventListener('mouseleave', ()=>{
      cards2.classList.remove('card1');
})

cards3.addEventListener('mousemove', ()=>{
      cards3.classList.add('card1');
});
cards3.addEventListener('mouseleave', ()=>{
      cards3.classList.remove('card1');
})

cards4.addEventListener('mousemove', ()=>{
      cards4.classList.add('card1');
});
cards4.addEventListener('mouseleave', ()=>{
      cards4.classList.remove('card1');
})