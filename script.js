// Header Burger Menu
const headerMenuBtn = document.getElementById('menu');
const headerMenuBlock = document.querySelector('.headerMenu');

headerMenuBtn.addEventListener('click', () => {
  headerMenuBlock.classList.toggle('active');
});

// Sticky column elements
const leftColumn = document.querySelector('#sticky');
const rightColumn = document.querySelector('#notSticky');

rightColumn.addEventListener('scroll', function () {
  const scrollY = rightColumn.scrollTop;
  const rightColumnHeight = rightColumn.scrollHeight;
  const containerHeight = window.innerHeight;

  if (scrollY + containerHeight >= rightColumnHeight) {
    leftColumn.style.top = rightColumnHeight - containerHeight + 'px';
  } else {
    leftColumn.style.top = '0';
  }
});
