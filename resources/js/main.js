'use strict'

document.addEventListener('DOMContentLoaded', function () {
	
	if (window.height < 500) alert('Recomendación: Rota tu smartphone para una mejor experiencia.')
	let menuItems = Array.from(document.querySelectorAll('.menu-list-link')).filter(item => item.hash)
	
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
})
