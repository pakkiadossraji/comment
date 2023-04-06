
    function myFunction(where) {
      var x = document.getElementById("reply-box").value;
      var newDiv = document.createElement('div');
      var newpara = document.createElement('p');
      newpara.classList.add('reply1');
     
      var newbtn = document.createElement('button');
      var text = document.createTextNode('Delete');
      newbtn.appendChild(text);
      newbtn.classList.add('btn');
      newbtn.onclick = function(){
        newpara.remove();
        if (newpara.style.display === "none") {
          newbtn.style.display = "none";
        } else {
          newbtn.style.display = "none";
        }
      }
     
      var insert = document.getElementById('getId');
      newpara.innerHTML = x;
        
        newDiv.appendChild(newpara);
        where.parentNode.insertBefore(newDiv,insert);  
        where.parentNode.insertBefore(newpara,newDiv); 
        document.getElementById("reply-box").value = '';
        where.parentNode.insertBefore(newbtn,newDiv)
        
      }