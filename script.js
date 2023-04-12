var select = document.querySelectorAll('.reply-btn');
select.forEach((node,index) =>{
  node.addEventListener('click', ()=>{
        var x = document.querySelectorAll(".reply-box")[index].value;
        console.log(x)
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
        var insert = node.closest(".parent").querySelector(".getpara")
          newpara.innerHTML = x;
        // where.parentNode.insertBefore(newDiv,insert);  
          insert.appendChild(newpara);
        // where.parentNode.insertBefore(newpara,newDiv); 
          document.querySelectorAll(".reply-box")[index].value = '';
          insert.appendChild(newbtn);
        // where.parentNode.insertBefore(newbtn,newDiv)
        
      })
    })
