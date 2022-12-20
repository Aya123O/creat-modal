let img = document.getElementsByClassName("img");
let myimg=document.getElementById("myimg");
let modal=document.getElementById('modals')
let caption=document.getElementById('caption');
let close=document.getElementById('close')
console.log(img)
for (let i=0; i<img.length;i++){
     img[i].onclick=function(){
        modal.style.display="block";
        myimg.src=this.src;
        caption.innerHTML=this.alt;
    }
}
close.onclick=function(){
    modal.style.display="none";

}
document.onkeydown=function(ev){
    if(ev.keyCode=="27"){modal.style.display="none";}
}