/* eslint-disable linebreak-style */
const btn = document.getElementById('animateBtn');
const toggle = document.getElementById('toggleAnimation');

// Load user preference from localStorage and set checkbox state
function loadPreference() {
  const animationEnabled = localStorage.getItem('animationEnabled');
  if (animationEnabled === null) {
    // Default to enabled
    localStorage.setItem('animationEnabled', 'true');
    toggle.checked = true;
  } else {
    toggle.checked = animationEnabled === 'true';
  }
}

// Save user preference to localStorage
function savePreference(isEnabled) {
  localStorage.setItem('animationEnabled', isEnabled.toString());
}

// Trigger the pulse animation on button if enabled
function triggerAnimation() {
  if (!toggle.checked) return; // Don't animate if disabled

  btn.classList.add('animate-pulse');

  // Remove animation class after animation ends so it can be triggered again
  btn.addEventListener('animationend', () => {
    btn.classList.remove('animate-pulse');
  }, { once: true });
}

// Event listeners
btn.addEventListener('click', triggerAnimation);
toggle.addEventListener('change', () => {
  savePreference(toggle.checked);
});

// Initialize on page load
loadPreference();
