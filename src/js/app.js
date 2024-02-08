const imagenes = document.querySelectorAll('.propiedad__imagen');

window.addEventListener('scroll', () => {
    const scroll = this.scrollY / 2000;

    imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`
    })
})