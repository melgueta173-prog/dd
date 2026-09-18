javascript
for (let i = 1; i <= 3; i++) {

    let estado = localStorage.getItem("estado" + i);

    if (!estado) {
        estado = "DISPONIBLE";
    }

    document.getElementById("estado" + i).textContent = estado;

    if (estado === "AGOTADO") {
        document.getElementById("boton" + i).disabled = true;
        document.getElementById("boton" + i).textContent = "AGOTADO";
        document.getElementById("link" + i).removeAttribute("href");
    }
}

