const stagesItem = document.querySelectorAll('.stages__item-title')

const accordionHandler = (e) => {
   e.currentTarget.classList.toggle('active')
  const item = e.currentTarget.nextElementSibling
  if (e.currentTarget.classList.contains('active')) {
    item.style.maxHeight = item.scrollHeight + 'px'
  } else {
    item.style.maxHeight = 0
  }
}

stagesItem.forEach(el=> {
  el.addEventListener('click', accordionHandler)
})