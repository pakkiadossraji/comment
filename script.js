
function myFunction(){
  var x = document.getElementById("reply-box").value;
  var y = document.getElementById("comment-div");
  var btns = document.getElementsByClassName("reply-btn");
 
  console.log(x)
    btns.forEach(my)
    if (y.style.display === "none") {
      y.style.display = "block";
      document.getElementById("para").innerHTML = x;
    } 
    else {
      y.style.display = "none";
      document.getElementById("para").innerHTML = x;
    }
    
    console.log(y)
    
 }
myFunction();
// function showSlides(j) {
//   for(let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dots[i].classList.remove('active');
//   }
//   slideIndex++;
//   if(slideIndex > slides.length) {
//     slideIndex = 1
//   }
  
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].classList.add('active');
// var button = document.querySelector('.reply-btn');
// button.addEventListener('click', change);
// var test = document.querySelector('#newComment');
//  var i = 0;
// function change(e) {
    
//     if(button[i]) button[i].classList[i].add("comment");
    
//     if (i == button.length) {   
//       i = 0;  
//     }      
//     button[i].classList.add("comment");
//     i++;
// }
// function addField(){
//   let div = document.createElement("div");
//   div.setAttribute("class", "field");

//   // Creating the input element.
//   let field = document.createElement("input");
//   field.setAttribute("type", "text");
//   field.setAttribute("name", "notes[]");

//   // Creating the plus span element.
//   let reply = document.createElement("button");
//   reply.setAttribute("onclick", "addField(this)");
//   let plusText = document.createTextNode("Reply");
//   reply.appendChild(plusText);

//   // Adding the elements to the DOM.
//   form.insertBefore(div);
//   div.appendChild(field);
//   div.appendChild(reply);
// }
// function addField();