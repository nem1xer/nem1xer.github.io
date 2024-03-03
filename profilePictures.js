// Define an array of profile picture filenames
const profilePictures = [
  'retard.png',
  'placeholder1.png',
  'placeholder2.png',
  'placeholder3.png',
  'placeholder4.png',
   'placeholder5.png',
  // Add more filenames as needed
];

// Get references to elements
const profileImage = document.querySelector('#card img');
const card = document.querySelector('.card');

// Variables to track the previously displayed profile picture index
let previousIndex = -1;
let currentIndex;

// Function to load a random profile picture
function loadRandomProfilePicture(like) {
  // Generate a new random index different from the previous one
  do {
    currentIndex = Math.floor(Math.random() * profilePictures.length);
  } while (currentIndex === previousIndex);

  // Update the previous index
  previousIndex = currentIndex;

  // Construct the file path for the random profile picture
  const imagePath = profilePictures[currentIndex];

  // Determine the direction of the animation
  const animationClass = like ? 'slide-out-right' : 'slide-out-left';

  // Apply the animation class
  card.classList.add(animationClass);

  // After animation completes, load new profile picture and reset animation class
  setTimeout(() => {
    profileImage.src = imagePath;
    card.classList.remove(animationClass);
  }, 500); // Adjust the delay to match your animation duration
}

// Load a random profile picture when the page loads
window.onload = () => loadRandomProfilePicture(false);

// Get references to the like and nope buttons
const likeButton = document.getElementById('like');
const nopeButton = document.getElementById('nope');

// Event listeners for the like and nope buttons
likeButton.addEventListener('click', () => loadRandomProfilePicture(true));
nopeButton.addEventListener('click', () => loadRandomProfilePicture(false));