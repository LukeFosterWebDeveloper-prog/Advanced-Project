// template_u1g0j7w
//service_mnecg0v
//kdBjSdKTL9fvwXdhZ
let isModalOpen = false
let contrastToggle = false

function toggleContrast() {
    event.preventDefault();
    contrastToggle = !contrastToggle
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    // show the loading overlay
    loading.classList.add('modal__overlay--visible');

    emailjs
        .sendForm(
            "service_mnecg0v",
            "template_u1g0j7w",
            event.target,
            "kdBjSdKTL9fvwXdhZ"
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly at luke.foster.web.developer@gmail.com");
        });
}

// TOGGLE MODAL

function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    console.log('toggleModal()')
    isModalOpen = !isModalOpen
    document.body.classList.add("modal--open");
}