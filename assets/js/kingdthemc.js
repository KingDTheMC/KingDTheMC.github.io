
//<script>
//New code for night mode added 2026/07/02
//(() => {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');

  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : 'light';
  }

if (btn){
  btn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  });
}
  // Initialize on load
  setTheme(getInitialTheme());
//})();
//</script>
//Edited out old js for night mode
//creating dark theme toggle switch
/*
const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;

//Function to enable dark mode
	function enableDarkMode() {
		body.classList.add('dark-mode');
		localStorage.setItem('theme', 'dark');
	}

//Function to dsiable dark mode
	function disableDarkMode() {
		body.calssList.remove('dark-mode');
		localStorage.setItem('theme', 'light');
	}

//Check for saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
	enableDarkMode();
} else {
	disableDarkMode(); //Ensure light mode is active if no preference
}

//Add event listener to the button
toggleButton.addEventListener('click', () => {
	if (body.classList.contains('dark-mode')) {
		disableDarkMode();
	} else {
		enableDarkMode();
	}
});
*/

//Copy to clipboard fucntion
	function copyToClipboard(element) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).text()).select();
		document.execCommand("copy");
		$temp.remove();
		}





// Open the Modal
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
