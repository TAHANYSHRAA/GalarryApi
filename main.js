
let arr1 = [];
let page=1;
document.getElementById("myModal").style.visibility = "hidden";
fetch('http://localhost:3000/photos/'+page, {
  method: 'GET',
})
.then(response => response.json())
.then((data) => {
  page++;
  for(let i=0; i<data.length;i++){
    document.getElementById('row1').innerHTML += '<div class="column"><img class="StylePic" src="'+data[i]+' " ></div>';
  }

});

/*function renderGallary(){
    const html = arr.map((item, index) => {
        return  '<div class="column"><img src="'+item.thumbnail+'" class="StylePic" onclick="openModal();currentSlide"('+index+')" class="hover-shadow cursor"  onClick="togglePhotoUrl(event)"></div>'
    });
    document.getElementById('row1').innerHTML = html.join('');
}
 
*/
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
      //slides[slideIndex-1].style.display = "block";
      //dots[slideIndex-1].className += " active";
     // captionText.innerHTML = dots[slideIndex-1].alt;
    }