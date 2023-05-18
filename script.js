const viewDetailsButtons = document.querySelectorAll('.view-details');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalCapacity = document.getElementById('modal-capacity');
const modalPrice = document.getElementById('modal-price');
viewDetailsButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = document.querySelectorAll('.product')[index];
    const title = product.querySelector('h2').textContent;
    const description = product.querySelector('p:nth-of-type(1)').textContent;
    const capacity = product.querySelector('p:nth-of-type(2)').textContent;
    const price = product.querySelector('p:nth-of-type(3)').textContent;

    modalImage.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalCapacity.textContent = capacity;
    modalPrice.textContent = price;
    modal.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
/*window.addEventListener('DOMContentLoaded', () => {
  const buyNowButton = document.querySelector('.buy-now');
  buyNowButton.style.display = 'none';
});*/

//Ellipsis DropDown Menu
function myFunction() {
  document.getElementById("dropDownCont").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction1() {
  document.getElementById("dropDownCont1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn1')) {
    var dropdowns = document.getElementsByClassName("dropdown1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("dropDownCont2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn2')) {
    var dropdowns = document.getElementsByClassName("dropdown2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction3() {
  document.getElementById("dropDownCont3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn3')) {
    var dropdowns = document.getElementsByClassName("dropdown3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction4() {
  document.getElementById("dropDownCont4").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn4')) {
    var dropdowns = document.getElementsByClassName("dropdown4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction5() {
  document.getElementById("dropDownCont5").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn5')) {
    var dropdowns = document.getElementsByClassName("dropdown5");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction6() {
  document.getElementById("dropDownCont6").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn6')) {
    var dropdowns = document.getElementsByClassName("dropdown6");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction7() {
  document.getElementById("dropDownCont7").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn7')) {
    var dropdowns = document.getElementsByClassName("dropdown7");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


//Reaction Button
function clicked(){
  document.getElementById("likedbtn").style.color="red";
}
function clicked1(){
  document.getElementById("likedbtn1").style.color="red";
}
function clicked2(){
  document.getElementById("likedbtn2").style.color="red";
}
function clicked3(){
  document.getElementById("likedbtn3").style.color="red";
}
function clicked4(){
  document.getElementById("likedbtn4").style.color="red";
}
function clicked5(){
  document.getElementById("likedbtn5").style.color="red";
}
function clicked6(){
  document.getElementById("likedbtn6").style.color="red";
}
function clicked7(){
  document.getElementById("likedbtn7").style.color="red";
}