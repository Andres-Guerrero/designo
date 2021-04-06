// UI Elements

// Mobile Menu
const menu_mobile = document.querySelector('.navigation');
const menu_btn = document.querySelector('#navigation__toggle');
const overlay = document.querySelector('.overlay');

// Contact form
const contact_form = document.querySelector('#contact_form');
const inputFields = document.querySelectorAll('#contact_form input[type="text"]');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const message = document.querySelector('#msg');
const submit = document.querySelector('#submit');
const fieldsToValidate = document.querySelectorAll('#name, #email, #tel, #msg');

/************
 Mobile Menu Behavior
 ************/
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

/************
Contact Form Validation
************/
fieldsToValidate.forEach((input) => {
	input.addEventListener('keyup', function(e) {
		if (input.value.trim() === '' && !this.nextElementSibling) {
			this.parentElement.appendChild(errorMessage("Can't be empty"));
		}
		if (input.value.trim() !== '' && this.nextElementSibling) {
			this.nextElementSibling.remove();
		}
	});

	input.addEventListener('focus', function() {
		this.previousElementSibling.style.display = 'none';
	});

	input.addEventListener('blur', function() {
		if (input.value === '') {
			this.previousElementSibling.style.display = 'block';
		}
	});
});

// Submit Contact Form
if (contact_form) {
	contact_form.addEventListener('submit', function(e) {
		fieldsToValidate.forEach((input) => {
			if (input.value.trim() === '' && !input.nextElementSibling) {
				input.parentElement.appendChild(errorMessage("Can't be empty"));
			}
			if (input.name === 'tel' && isNaN(input.value)) {
				tel.parentElement.appendChild(errorMessage('Type a valid number'));
			}
			if (input.name === 'email') {
				let validEmail = validateEmail(input.value);
				if (!validEmail && !input.nextElementSibling) {
					email.parentElement.appendChild(errorMessage('Type a valid email'));
				}
			}
		});

		e.preventDefault();
	});
}

function validateEmail(email) {
	const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}

// Create error messages
function errorMessage(message) {
	const errorContainer = document.createElement('div');
	errorContainer.innerHTML = message;
	errorContainer.classList = 'alert_empty';
	return errorContainer;
}
