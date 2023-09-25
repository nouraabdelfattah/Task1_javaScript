var allbuttons= document.querySelectorAll(" #btn1")
var div= document.querySelector("#content")
var btn=document.querySelector("#btn")
var div2=document.querySelector("#total-price")
var totalprice=0
allbuttons.forEach(function(item){
   item.onclick = function(){
       div.innerHTML+=item.getAttribute("head")+"+"
       totalprice +=+(item.getAttribute("price"))
       if(div.innerHTML !=""){
           btn.style.display = "block"
       }
   }
})
btn.onclick = function(){
   div2.innerHTML="Total Price:" +" "+ totalprice
}