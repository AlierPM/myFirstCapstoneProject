const slideNavMenu = document.querySelector('.nav-menu');
const hamburger = document.querySelector('.hamburger');
const linkAction = document.querySelectorAll('.nav-link');
const speakerContainer = document.querySelector('.feat-speaker');
const showMore = document.querySelector('#show-more');
const myButton = document.getElementById('myBtn');

hamburger.addEventListener('click', () => {
  slideNavMenu.classList.toggle('slide');
  hamburger.classList.toggle('slide');
});

linkAction.forEach((n) => {
  n.addEventListener('click', () => {
    linkAction.forEach((n) => n.classList.remove('active'));
    n.classList.add('active');
    slideNavMenu.classList.remove('slide');
    hamburger.classList.remove('slide');
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
topFunction();
const speakers = [
  {
    name: 'Nathaniel Bassy',
    gift: 'Pastor and a Worship Leader',
    bio: 'Nathaniel Bassy is an anointed minister of the Gospel with spiritgilled worship and praise songs',
    image: '../images/Nathaniel-Bassy.png',
  },
  {
    name: 'Sinachi',
    gift: 'Gospel Music Artist',
    bio: 'Sinachi has a worshiper Leader has a number of praise and worship songs being used around the world',
    image: '../images/Sinachi.png',
  },
  {
    name: 'Don Mon ',
    gift: 'An anointed Worship Leader',
    bio: 'Don Mon has blessed the Body of Christ with his spirit-filled alltime hiting songs',
    image: '../images/Don-mon.png',
  },
  {
    name: 'Adudu Gabriel',
    gift: 'A Gospel Minister',
    bio: 'An anointed Gospel Artist whose songs are changing lives in the Republic of The Sudan and South Sudan.',
    image: '../images/Adudu-Gabriel.png',
  },
  {
    name: 'Musa John',
    gift: 'President of Musa John Music-South Sudan',
    bio: 'A Gospel artist with a difference; full of the Holy Ghost',
    image: '../images/Musa-John.png',
  },
  {
    name: 'Theopilus Sunday',
    gift: 'An Apostle of Worship',
    bio: 'A man who break the cages and chain of demoinic schemics with his Holy Ghost chant',
    image: '../images/Theopilus.png',
  },
  {
    name: 'Victoria Orenze',
    gift: 'An Anointed Worship Leader',
    bio: 'She is a blessing to this generation with her healing and igniting worship songs. She is emptying hell and expanding the Kingdom.',
    image: '../images/Victoria.png',
  },
  {
    name: 'Ada Eli',
    gift: 'An Anointed Gospel Artist',
    bio: 'She is a composer to a hundred of Gospel songs. She is one of the blessed and laeding Gospel Artists in Nigeria',
    image: '../images/Ada-Eli.png',
  },
];

function createSpeakers() {
  speakers.forEach((n) => {
    speakerContainer.innerHTML += `
    <div class="feat-card flex">
    <img src="${n.image}" alt="${n.name}"/>   
    <div class="speaker-details">
      <div class="intro">
        <h2>${n.name}</h2>
      <p class="career">${n.gift}</p>
      </div>
      <p>${n.bio}</p>
    </div>
  </div>`;
  });
}

createSpeakers();

showMore.addEventListener('click', (e) => {
  e.preventDefault();
  speakerContainer.classList.toggle('hide');

  if (!showMore.textContent.includes('Show More')) {
    showMore.innerText = 'Show More';
  } else {
    showMore.innerText = 'Show Less';
  }
});

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = 'block';
  } else {
    myButton.style.display = 'none';
  }
}

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', () => {
  scrollFunction();
});