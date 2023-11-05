// var bulb = document.querySelector(".bulb")
// var btn =  document.querySelector('.on')

// var flag = 0;

// btn.addEventListener("click", function(){
//     if(flag == 0){
//         bulb.style.backgroundColor = "yellow"
//         console.log("clicked")
//         flag = 1
//         bulb.style.border = "none"
//         btn.innerHTML = "OFF"
//     }else {
//         bulb.style.backgroundColor = "transparent"
//         btn.innerHTML = "ON"
//         bulb.style.border = "2px solid black"
//         flag = 0
//         console.log("checked")
//     }
// })
// -----------------------------------------------------

var h = document.querySelector("body")

var a = document.querySelector("svg")

var b = document.querySelector(".navbar")

var c = document.querySelector(".para")

var flag = 0;

a.addEventListener("click", function(){
    if (flag == 0){
        h.style.backgroundColor= "black"
        b.style.color = "white"
        c.style.color = "white"
        a.style.color = "white"
        a.style.border = "2px solid white"
        flag =1
    }else{
        h.style.backgroundColor = "transparent"
        b.style.color = "black"
        c.style.color = "black"
        a.style.color = "black"
        a.style.border = "2px solid black"
        flag=0
    }
})

