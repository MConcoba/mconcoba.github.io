'use strict'

document.addEventListener('DOMContentLoaded', function () {
	
	if (window.height < 500) alert('Recomendación: Rota tu smartphone para una mejor experiencia.')

	let menuItems = Array.from(document.querySelectorAll('.menu-list-link')).filter(item => item.hash)
	let mySelfMenuItems = Array.from(document.querySelectorAll('.myself-menu-link')).filter(item => item.hash)
	let btnMenu = document.querySelector('.myself-menu-action')
	let ControlActions = document.querySelector('.control-actions')
	let ControlBtnMenu = document.querySelector('.control-actions-menu')
	let blanketBody = document.querySelector('.blanketBody')
	let containerMenu = document.querySelector('.myself-containe-menu')
	let containerMySelf = document.querySelector('.container-myself')

	function ActiveMenuItems (classActive, classMenuItem) {
		
		if (!this.classList.contains(classActive)) {
			let menu = Array.from(document.querySelectorAll(classMenuItem))
			let selectedItem = menu.find(item => item.classList.contains(classActive))
			if (this.hash === '#home') {
				let selectedArticle = document.querySelector(selectedItem.hash)
				selectedItem.classList.remove(classActive)
				selectedArticle.classList.remove('article--show')
				selectedArticle.classList.add('article--hide')
				setTimeout(function () {
					selectedArticle.style.display = 'none'
				}, 510)
			} else {
				selectedItem.classList.remove(classActive)
				if (selectedItem.hash !== '#home') {
					let selectedArticle = document.querySelector(selectedItem.hash)
					selectedArticle.classList.remove('article--show')
					selectedArticle.classList.add('article--hide')
					setTimeout(function () {
						selectedArticle.style.display = 'none'
					}, 510)
				}

				let article = document.querySelector(this.hash)
				article.classList.add('article--show')
				article.classList.remove('article--hide')
				setTimeout(() => {
					article.style.display = 'flex'
				}, 520)
			}
			this.classList.add(classActive)
		}
	}

	menuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			ActiveMenuItems.apply(this, ['menu-list-link--active', '.menu-list-link'])
		})
	})

	mySelfMenuItems.forEach(function (m_item) {
		m_item.addEventListener('click', function (e) {
			e.preventDefault()

			if (this.hash === '#home') {
				containerMySelf.style.display = "block"
				blanketBody.style.display = "none"
				containerMenu.style.left = "-100%"
				containerMenu.style.transition = "left .5s ease"
				setTimeout(() => {
					containerMySelf.style.opacity = "1"
					ControlActions.style.display = "none"
				}, 1)
			} else {
				blanketBody.style.display = "none"
				containerMenu.style.left = "-100%"
				containerMenu.style.transition = "left .5s ease"
				containerMySelf.style.transition = "opacity .5s ease-in"
				containerMySelf.style.opacity = "0"
				setTimeout(() => {
					containerMySelf.style.display = "none"
					ControlActions.style.display = "flex"
				}, 505)
			}

			ActiveMenuItems.apply(this, ['myself-menu-link--active', '.myself-menu-link'])
		})
	})

	btnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})
	ControlBtnMenu.addEventListener('click', function () {
		blanketBody.style.display = "block"

		containerMenu.style.left = 0
		containerMenu.style.transition = "left .5s ease"
	})

	blanketBody.addEventListener('click', function () {
		blanketBody.style.display = "none"

		containerMenu.style.left = "-100%"
		containerMenu.style.transition = "left .5s ease"
	})
})


window.addEventListener('load', e => {
	let loader = document.querySelector('.start')
	let message = document.querySelector('.start-message')

	setTimeout(function () {
		message.textContent = '¡Portafolio Listo!'
		clearTimeout(this)
	}, 1500)

	setTimeout(function () {
		loader.style.transition = 'opacity .8s ease-out'
		loader.style.opacity = '0'
		clearTimeout(this)
	}, 1700)

	setTimeout(function () {
		loader.style.display = 'none'
		clearTimeout(this)
	}, 2500)
})
