const panels = document.querySelectorAll('.panel')
panels.forEach( e => {
  e.addEventListener('click', toggleOpen)
} )
panels.forEach( e => {
  e.addEventListener('transitionend', transition)
} )

function toggleOpen() {
    this.classList.toggle('open')
}

function transition(e) {
  let firstChild = this.children[0]
  let lastChild = this.children[this.children.length - 1]
  console.log(lastChild)


 if (e.propertyName.includes('flex') ) {
  firstChild.classList.toggle('openActive')
  lastChild.classList.toggle('openActive')
 }
}