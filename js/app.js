function buscarCodigo() {
    let correo = document.getElementById("correo").value;
    let token  = document.getElementById("token").value;

    document.getElementById("resultado").innerHTML = "Buscando...";

    fetch("https://api.wolfnetcodigos.online/buscar.php", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body: "correo=" + correo + "&token=" + token
    })
    .then(r => r.json())
    .then(data => {
        if(data.codigo){
            document.getElementById("resultado").innerHTML =
                "Código Disney: <b>" + data.codigo + "</b>";
        } else {
            document.getElementById("resultado").innerHTML =
                "Error: " + data.error;
        }
    })
    .catch(err => {
        document.getElementById("resultado").innerHTML =
            "Error de conexión con el servidor.";
    });
}
