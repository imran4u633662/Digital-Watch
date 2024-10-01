// var time = new Date()


// var Hourssp = document.getElementById("Hours")
// var Minssp = document.getElementById("Mins")
// var secsp = document.getElementById("Sec")


// setInterval(() => {
//     var time = new Date()

//     Hourssp.innerText = time.getHours();
//     Minssp.innerText  = time.getMins();
//     Secsp.innerText  = time.getSeconds();

//     c = 12

//     if(time.getHours() > 12){
//         Hourssp.innerText = time.getHours() -c 
//         c++
//     }

//     if(time.getHours() > 24 && time.getHours < 12)
//         {
//             document.getElementById("AM").innerText="AM"
//      }

//     else{
//         document.getElementById = ("PM").innerText="PM"
//     }

// },1000)

function updatetime() {
    var datetime = new Date();
    var hour = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();
    var am_or_pm = document.getElementById("am_or_pm");
    var c = 12

    // if(time.gethours() > 12){
    //     hourssp.innerText = time.gethours() -c
    //     c++
    // }


    if (hour >= 12) {
        am_or_pm.innerText = "PM";
    } else {
        am_or_pm.innerText = "AM";
    }

    if(hours > 12){
        hours = hours - 12
    }

    document.getElementById("hours").innerText = hour;
    document.getElementById("minutes").innerText = min;
    document.getElementById("seconds").innerText = sec;
}

// Call the function every second
setInterval(updatetime, 1000);
