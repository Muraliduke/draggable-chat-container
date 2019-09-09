
function create(){ // create the new div
        // var newNodeContainer = document.createElement("div");

        var para = document.createElement("div"); 
        para.id='chat-bot';       
      document.body.appendChild(para);  

     
      

}

document.getElementById('loadChat').addEventListener('click', create)



 document.addEventListener('mousedown',function(e){
     var ele = document.getElementById('chat-bot')
    if(e.target && e.target.id== 'chat-bot'){
        console.log(e,ele)
          //do something
          var offsetX = e.clientX - parseInt(window.getComputedStyle(ele).left);
          var offsetY = e.clientY - parseInt(window.getComputedStyle(ele).top);
          
          function mouseMoveHandler(e) {
            ele.style.top = (e.clientY - offsetY) + 'px';
            ele.style.left = (e.clientX - offsetX) + 'px';
          }
      
          function reset() {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.removeEventListener('mouseup', reset);
          }
      
          window.addEventListener('mousemove', mouseMoveHandler);
          window.addEventListener('mouseup', reset);
     }
 });





