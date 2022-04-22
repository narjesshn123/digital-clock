
function clockFunction(){
    let date = new Date(); 
    let clockHours = date.getHours();
    let clockMinuts = date.getMinutes();
    let clockSecound = date.getSeconds();
    let section = "AM";                      
    if(clockHours === 0){
        clockHours = 12;
    }
    if(clockHours>12){
        clockHours = clockHours - 12;
        section = "PM";                   
    }
    clockHours = (clockHours<10) ? `0${clockHours}` : clockHours;          
    clockMinuts = (clockMinuts<10) ? `0${clockMinuts}` : clockMinuts;          
    clockSecound = (clockSecound<10) ? `0${clockSecound}` : clockSecound;          

    
    let hours = `${clockHours} : ${clockMinuts} : ${clockSecound}  ${section}` ;        
    console.log(hours)
    document.querySelector(".clock").innerText = hours;
}

setInterval(clockFunction, 1000)
