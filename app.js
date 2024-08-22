const openBtn = document.getElementById('modal__window__openBtn')
const openBtn1 = document.getElementById('modal__window__openBtn1')
const closeBtn = document.getElementById('modal__window__closeBtn')
const modalWindow = document.getElementById('modal__widow')

openBtn.addEventListener('click', function(){
  modalWindow.classList.add('modal__window__show')
})

closeBtn.addEventListener('click', function(){
  modalWindow.classList.remove('modal__window__show')
})

window.addEventListener('click', function(event) {
  if (event.target === modalWindow) {
      modalWindow.classList.remove('modal__window__show');
  }
});

openBtn1.addEventListener('click', function(){
  modalWindow.classList.add('modal__window__show')
})

closeBtn.addEventListener('click', function(){
  modalWindow.classList.remove('modal__window__show')
})

window.addEventListener('click', function(event) {
  if (event.target === modalWindow) {
      modalWindow.classList.remove('modal__window__show');
  }
});