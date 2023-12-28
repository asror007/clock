/* Clock start */
/* clock connect in js*/
const hours = document.querySelector(".hours")

/* minut connect in js*/
const minutes = document.querySelector(".minutes")

/* Clock lines connect in js*/
const h = document.querySelector(".h")
const m = document.querySelector(".m")
const s = document.querySelector(".s")


function clock() {
    let time = new Date();

    let hour = new Date().getHours()
    let minut = new Date().getMinutes()
    let sec = new Date().getSeconds()

    hours.innerText = hour
    minutes.innerText = minut

    if (minut < 10) {
        minutes.innerHTML = "0" + minut
    }else{
        minutes.innerHTML = minut
    }

    if (hour < 10) {
        hours.innerHTML = "0" + hour
    }else{
        hour.innerHTML = hour
    }

    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30} deg)`
    
    setTimeout(() => {
        clock()
    }, 1000);

}
clock() 

//tabs
const tabsItem = [...document.querySelectorAll(".tabsItem")]
const tabsContentItem = [...document.querySelectorAll(".tabsContentItem")]

        for (let i = 0; i < tabsItem.length; i++) {
            tabsItem[i].addEventListener("click",function () {
                for (let k = 0; k < tabsContentItem.length; k++) {
                    tabsItem[k].classList.remove('active')
                    tabsContentItem[k].classList.remove('active')
                }
                tabsItem[i].classList.add('active')
                tabsContentItem[i].classList.add('active')
            })
        }
const stopWatchBtn = document.querySelector(".stopwatch__btn")
const tabsLinkSpan = document.querySelector(".tabsLink__span")

/* Secundomer hour minute and Secund connect in js*/
const stopWatchSeconds = document.querySelector(".stopwatch__seconds")
const stopWatchMinutes = document.querySelector(".stopwatch__minutes")
const stopWatchHours = document.querySelector(".stopwatch__hours")

console.log(stopWatchSeconds.innerHTML)

stopWatchBtn.addEventListener("click",function () {
    if(this.innerHTML == 'start'){
        this.innerHTML = "stop"
        tabsLinkSpan.classList.add("active")
        Timer()
    }else if ( this.innerHTML == "stop") {
        this.innerHTML = "clear"
        tabsLinkSpan.classList.remove("active")
        tabsLinkSpan.classList.add("active_clear")
        clearInterval(stop)
    }else{
        this.innerHTML = "start"
        tabsLinkSpan.classList.remove("active_clear")
        stopWatchSeconds.innerHTML = 0
        stopWatchMinutes.innerHTML = 0
        stopWatchHours.innerHTML = 0 
    }
})

let stop;

function Timer() {
    
    stopWatchSeconds.innerHTML++
    stop = setTimeout(() => {
        if (stopWatchSeconds.innerHTML > 59) {
            stopWatchSeconds.innerHTML = 0
            stopWatchMinutes.innerHTML++
            if (stopWatchMinutes.innerHTML > 59) {
                stopWatchMinutes.innerHTML = 0
                stopWatchHours.innerHTML++
            }
        }
        Timer()
    }, 1000);
}
