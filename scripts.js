function setTime() {
    const hoursText = document.querySelector(".time.hours")
    const minutesText = document.querySelector(".time.minutes")
    const secondsText = document.querySelector(".time.seconds")

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()

    if(Number(hoursText.innerText) <= 9) {
        hoursText.innerText = "0" + hours
    } else {
        hoursText.innerText = hours
    }
    if(Number(minutesText.innerText) <= 9) {
        minutesText.innerText = "0" + minutes
    } else {
        minutesText.innerText = minutes
    }
    if(Number(secondsText.innerText) <= 9) {
        secondsText.innerText = "0" + seconds
    } else {
        secondsText.innerText = seconds
    }
   

}
setInterval(setTime,10)

 