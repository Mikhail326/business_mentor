const btns = document.querySelectorAll('.btn')

const showTariff = (e) => {
  const parent = e.target.offsetParent.offsetParent
  const title = parent.querySelector('h4').innerText
  console.log(title)
}

btns.forEach(b => {
  b.addEventListener('click', showTariff)
})

let startH = 0
let startM = 0
let startS = 5

const timerWrapper = document.querySelector('.item__timer')
const timer = document.querySelector('.item__timer-num')

const handlerTimer = () => {
  startS--

  if (startS == 0 && startM == 0 && startH == 0) {
    clearInterval(t)
    timerWrapper.classList.add('disabled')
  } else if (startS == 0) {
    if (startM > 0) {
      startM--
      startS = 59
    } else if (startM == 0) {
      startH--
      startM = 59
      startS = 59
    } else if (startH = 0) {
      startM = 59
      startS = 59
    } else if (startM = 0 && startH == 0) {
      startS = 59
    }
  }

  timer.innerHTML = `${startH > 10 ? startH : '0' + startH} : ${startM > 10 ? startM : '0' + startM} : ${startS > 10 ? startS : '0' + startS}`
}

const t = setInterval(handlerTimer, 1000)