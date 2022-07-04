const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', ()=> {
	console.log('aa')
	btn.classList.toggle('active')
	input.classList.toggle('active')
	input.focus()
})