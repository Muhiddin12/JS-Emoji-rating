const starEl = document.querySelectorAll('.star');
const emojisEl = document.querySelectorAll('.angry');
const colorsArray = ['#ef5151', 'orange', 'lightblue', 'lightgreen', '#00ff00'];

updateRating(0);

starEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    updateRating(index)
  })
})

function updateRating(index) {
  starEl.forEach((starEl, idx) => {
    if(idx < index +1 ){
      starEl.classList.add('active'); 
    } else {
      starEl.classList.remove('active');
    }
  });

  emojisEl.forEach(emojiEl=> {
    emojiEl.style.transform = `translateX(-${index * 60}px)`;
    emojiEl.style.backgroundColor = colorsArray[index];
  });
  
}