function obtenerDatos(){
    fetch("https://datasoftok.herokuapp.com/")
    .then(function (respuesta) {
        return respuesta.json();
    }).then(function(respuesta){
        var products = document.getElementById('products');
        products.innerHTML = respuesta.products;
    } 
    )
}
