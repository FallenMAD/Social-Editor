const menuButton = document.querySelectorAll('.menu__button');

menuButton.forEach(btn => {
  btn.addEventListener('click', () => {
    menuButton.forEach(activeBtn => {
      activeBtn.classList.remove('menu__button--active')
    })
    btn.classList.add('menu__button--active');
  })
})

const toolsBtn = document.querySelectorAll('.tool');

toolsBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    toolsBtn.forEach(toolBtn => {
      toolBtn.classList.remove('tool--active');
    }) 

  btn.classList.add('tool--active');
  })
})