function toggleMode(){
    let mode = document.body;
    let cardBg = document.querySelectorAll(".card");
    cardBg.forEach(function(card){
        card.classList.toggle("card-bg");
    });
    mode.classList.toggle("dark-mode");
}

// Get the modal
var modal = document.getElementById("aboutModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; 
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Scroll transitions
var card = document.querySelectorAll('.card-trans');

function handleScroll() {
  const scrollPosition = window.scrollY;
  card.forEach(element => {
    if (scrollPosition > element.offsetTop - window.innerHeight / 2) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  });

}

window.addEventListener('scroll', handleScroll);

// Getting Form data and sending email
function sendMail(){
	var params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

  const serviceID = "service_s3l1eqp";
  const templateID = "template_8g73c7r";
  
  emailjs.send(serviceID, templateID, params)
  .then(
    res => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message was sent successfully");
    })
    .catch((err) => console.log(err));
}


// Loading animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");
  
  loader.classList.add("loader-hidden");
  
  loader.addEventListener("transitioned", () => {
    document.body.removeChild("loader-wrapper");
  });
  });
