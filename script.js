const card = document.getElementById('card');
const nopeBtn = document.getElementById('nope');
const likeBtn = document.getElementById('like');

let initialX = null;

card.addEventListener('touchstart', touchStart, false);
card.addEventListener('touchmove', touchMove, false);

function touchStart(event) {
  initialX = event.touches[0].clientX;
};

function touchMove(event) {
  if (initialX === null) {
    return;
  }

  var currentX = event.touches[0].clientX;
  var diffX = initialX - currentX;

  card.style.transform = 'translateX(' + (-diffX) + 'px)';

  if (Math.abs(diffX) > 50) {
    if (diffX > 0) {
      card.style.transform = 'translateX(-400px) rotate(-30deg)';
    } else {
      card.style.transform = 'translateX(400px) rotate(30deg)';
    }
  }
};

card.addEventListener('touchend', touchEnd, false);

function touchEnd() {
  initialX = null;
  card.style.transform = '';
};

nopeBtn.addEventListener('click', () => {
  card.style.transform = 'translateX(-400px) rotate(-30deg)';
  setTimeout(() => {
    card.style.transition = 'none';
    card.style.transform = '';
    setTimeout(() => {
      card.style.transition = 'transform 0.3s ease';
    }, 10);
  }, 300);
});

likeBtn.addEventListener('click', () => {
  card.style.transform = 'translateX(400px) rotate(30deg)';
  setTimeout(() => {
    card.style.transition = 'none';
    card.style.transform = '';
    setTimeout(() => {
      card.style.transition = 'transform 0.3s ease';
    }, 10);
  }, 300);
});
