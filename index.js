var a=document.querySelector("h1")
var btn=document.querySelector("#add")
// var remove=document.querySelector("#remo")
var count=0
add.addEventListener("click",function(){
    if(count==0){
    a.style.color="blue"
    a.innerHTML="Friend"
    btn.innerHTML="Unfriend"
    count=1
    }
    else{
        a.style.color="green"
        a.innerHTML="Satyendra"
        btn.innerHTML="Add Friend"
        count=0
            
    }
    
})