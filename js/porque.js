document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = [
        { selector: '.btn-primera', imgClass: 'hover-image', imgSrc: '../img/check.png' },
        { selector: '.btn-primera-extra', imgClass: 'hover-image-extra', imgSrc: '../img/delete.png' },
        { selector: '.btn-tercera', imgClass: 'hover-tercera', imgSrc: '../img/delete.png' },
        { selector: '.btn-tercera-extra', imgClass: 'hover-tercera-extra', imgSrc: '../img/delete.png' },
        { selector: '.btn-tercera-extra-extra', imgClass: 'hover-tercera-extra-extra', imgSrc: '../img/check.png' },
        { selector: '.btn-quinta', imgClass: 'hover-quinta', imgSrc: '../img/delete.png' },
        { selector: '.btn-quinta-extra', imgClass: 'hover-quinta-extra', imgSrc: '../img/check.png' },
        { selector: '.btn-quinta-extra-extra', imgClass: 'hover-quinta-extra-extra', imgSrc: '../img/delete.png' }
    ];

    buttons.forEach(button => {
        const btn = document.querySelector(button.selector);

        btn.addEventListener('click', function () {
            let img = document.querySelector(`.${button.imgClass}`);
            if (!img) {
                img = document.createElement('img');
                img.src = button.imgSrc;
                img.classList.add(button.imgClass);
                document.body.appendChild(img);

                setTimeout(() => {
                    img.remove();
                }, 2000);
            }
        });
    });
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registrado con éxito:', registration);
        })
        .catch((error) => {
            console.log('Error al registrar el Service Worker:', error);
        });
}
