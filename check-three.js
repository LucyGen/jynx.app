/**
 * Utility script to validate THREE.js loading
 * Loads in a non-module context to check global availability
 */

(function() {
  // Check if THREE is available on window
  function checkTHREE() {
    if (typeof window.THREE !== 'undefined') {
      console.log('SUCCESS: THREE.js is available as a global variable');
      document.body.classList.add('three-loaded');
    } else {
      console.error('ERROR: THREE.js is not available as a global variable');
      document.body.classList.add('three-error');
    }
  }

  // Run check after a short delay to ensure modules have loaded
  setTimeout(checkTHREE, 1500);
})();
