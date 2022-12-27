let changebtn = document.getElementById("btn")
let rectangle = document.getElementById("rect")

const rectColorChange = () =>{
    let bgColor = '#'
    let colorcode ="1234567890abcdef"
    for (let i =0; i<6; i++){
        bgColor = bgColor + colorcode[Math.floor(Math.random()*16)]
    }
    console.log(bgColor)
     
    return bgColor;
    
}



const changeColor = () =>{
    rectangle.style.backgroundColor = rectColorChange();
    console.log("This is clicked")
}

changebtn.addEventListener("click", changeColor);

