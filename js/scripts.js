//Menu Hamburguesa
const toggleMenuElement = document.getElementById('toggle-menu')
const mainMenuElement = document.getElementById('main-menu')

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('main-menu--show')
})

//Precios multiplcador Remeras
if (document.body.id === 'remera') {

    var cantidadSelect = document.getElementById('cantidadSelect');
    var precioH4 = document.getElementById('precio');

    cantidadSelect.addEventListener('change', function() {
        var cantidad = parseInt(cantidadSelect.value);
        var precioBase = 7580;
        var precioTotal = cantidad * precioBase;
        var precioFormateado = precioTotal.toLocaleString('es-ES');
        precioH4.textContent = "$" + precioFormateado  ;
    });
}
//Precios multiplcador Camperas
if (document.body.id === 'campera') {
    var cantidadSelectCampera = document.getElementById('cantidadSelectCampera');
    var precioh4Campera = document.getElementById('precioCampera');

    cantidadSelectCampera.addEventListener('change', function() {
        var cantidadCampera = parseInt(cantidadSelectCampera.value);
        var precioBaseCampera = 95580;
        var precioTotalCampera = cantidadCampera * precioBaseCampera;
        var precioFormateadoCampera = precioTotalCampera.toLocaleString('es-ES');
        precioh4Campera.textContent = "$" + precioFormateadoCampera;
    });
}
//Precios multiplcador Cargo
if (document.body.id === 'cargo') {
    var cantidadSelectCargo = document.getElementById('cantidadSelectCargo');
    var precioh4Cargo = document.getElementById('precioCargo');

    cantidadSelectCargo.addEventListener('change', function() {
        var cantidadCargo = parseInt(cantidadSelectCargo.value);
        var precioBaseCargo = 35580;
        var precioTotalCargo = cantidadCargo * precioBaseCargo;
        var precioFormateadoCargo = precioTotalCargo.toLocaleString('es-ES');
        precioh4Cargo.textContent = "$" + precioFormateadoCargo;
    });
}
//Precios multiplcador Buzo
if (document.body.id === 'buzo') {
    var cantidadSelectBuzo = document.getElementById('cantidadSelectBuzo');
    var precioh4Buzo = document.getElementById('precioBuzo');

    cantidadSelectBuzo.addEventListener('change', function() {
        var cantidadBuzo = parseInt(cantidadSelectBuzo.value);
        var precioBaseBuzo = 25580;
        var precioTotalBuzo = cantidadBuzo * precioBaseBuzo;
        var precioFormateadoBuzo = precioTotalBuzo.toLocaleString('es-ES');
        precioh4Buzo.textContent = "$" + precioFormateadoBuzo;
    });
}
//Precios multiplcador Camperas 2
if (document.body.id === 'campera2') {
    var cantidadSelectCampera2 = document.getElementById('cantidadSelectCampera2');
    var precioh4Campera2 = document.getElementById('precioCampera2');

    cantidadSelectCampera2.addEventListener('change', function() {
        var cantidadCampera2 = parseInt(cantidadSelectCampera2.value);
        var precioBaseCampera2 = 165580;
        var precioTotalCampera2 = cantidadCampera2 * precioBaseCampera2;
        var precioFormateadoCampera2 = precioTotalCampera2.toLocaleString('es-ES');
        precioh4Campera2.textContent = "$" + precioFormateadoCampera2;
    });
}
