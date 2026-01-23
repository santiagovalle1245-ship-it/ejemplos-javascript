class Imagen {
    constructor(url) {
        this.url = url;
    }

    mostrar() {
        return `
            <div class="imagen-card">
                <img src="${this.url}" alt="Imagen">
            </div>
        `;
    }
}

//Funcion para renderizar
const renderImagenes = (imagenes) => {
    const contenedor = document.getElementById("galeria");
    contenedor.innerHTML = imagenes.map(i => i.mostrar()).join("");
}

const obtenerImagenes = async() => {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=6")
    const datos = await res.json();

    listaImagenes = [];

    datos.map ((img) => {
        listaImagenes.push(new Imagen(img.download_url));
    });

    renderImagenes(listaImagenes);

    document.getElementById("galeria").innerHTML
    = lista.map(i => i.mostrar()).join("");
}

let button = document.getElementById("btnAction");
button.addEventListener("click", obtenerImagenes);