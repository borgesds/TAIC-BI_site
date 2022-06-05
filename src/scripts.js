const btns = document.querySelectorAll('.btn')
const dropMenus = document.querySelectorAll('.drop-menu')

btns.forEach(btn => {
    btn;addEventListener('click', () => {
        removeActive()
        btn.classList.add('active')
        document.querySelector(btn.dataset.target).classList.add('active')
    })
})

// drop windows where click anywhere on the page
const removeActive = () => {
    btns.forEach(btn => btn.classList.remove('active'))
    dropMenus.forEach(dropmenus => dropmenus.classList.remove('active'))
}

window.onclick = (e) => {
    if(!e.target.matches('.btn')) {
        removeActive()
    }
}