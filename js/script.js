// UI Elements

// Mobile Menu
const menu_mobile = document.querySelector('.navigation');
const menu_btn = document.querySelector('#navigation__toggle');
const overlay = document.querySelector('.overlay');

// Contact form
const contact_form = document.querySelector('#contact_form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const message = document.querySelector('#msg');
const submit = document.querySelector('#submit');

// Mobile Menu Behavior
menu_btn.addEventListener('click', function() {
	displayMenu();
	bgMobileMenuBtn();
});

overlay.addEventListener('click', function() {
	displayMenu();
	bgMobileMenuBtn();
});

window.addEventListener('scroll', function() {
	if (menu_btn.classList.contains('mobile-btn-close')) {
		displayMenu();
		bgMobileMenuBtn();
	}
});

function displayMenu() {
	menu_mobile.classList.toggle('visible');
	menu_mobile.classList.toggle('mobile-in');
	overlay.classList.toggle('visible');
}

function bgMobileMenuBtn() {
	if (!menu_btn.classList.contains('mobile-btn-close')) {
		menu_btn.classList.add('mobile-btn-close');
	} else if (menu_btn.classList.contains('mobile-btn-close')) {
		menu_btn.classList.add('mobile-btn-open');
		menu_btn.classList.remove('mobile-btn-close');
	}
}

// Contact Form Validation
contact_form.addEventListener('submit', function(e) {
	if (name.value === '' || email.value === '' || tel.value === '' || message.value === '') {
		console.log('Not');
	}

	e.preventDefault();
});

function focusField() {}
