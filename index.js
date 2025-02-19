
function validarCampos() {
    const inputs = ['producto1', 'producto2', 'producto3', 'producto4', 'producto5'];
    let valido = true;
    let mensaje = '';

    for (let input of inputs) {
        const valor = document.getElementById(input).value;
        if (valor === '') {
            mensaje = 'Por favor, llenar la lista de productos son 5 en total.';
            valido = false;
            break;
        }
        if (isNaN(valor) || parseFloat(valor) < 0) {
            mensaje = 'Por favor, ingrese solo números positivos';
            valido = false;
            break;
        }
    }

    if (!valido) {
        alerta(mensaje);
    }
    return valido;
}

function calcular() {
    if (!validarCampos()) return;

    const valores = ['producto1', 'producto2', 'producto3', 'producto4', 'producto5']
        .map(id => parseFloat(document.getElementById(id).value));

    const subtotal = valores.reduce((a, b) => a + b, 0);
    let porcentajeDescuento = 0;

    if (subtotal >= 13000) {
        porcentajeDescuento = 40;
    } else if (subtotal >= 9000) {
        porcentajeDescuento = 30;
    } else if (subtotal >= 5000) {
        porcentajeDescuento = 20;
    } else if (subtotal >= 1000) {
        porcentajeDescuento = 10;
    }

    const descuento = (subtotal * porcentajeDescuento) / 100;
    const total = subtotal - descuento;

    document.getElementById('subtotal').value = 'L' + subtotal.toFixed(2);
    document.getElementById('descuento').value = 'L' + descuento.toFixed(2);
    document.getElementById('total').value = 'L' + total.toFixed(2);
    document.getElementById('labelDescuento').textContent = `Descuento ${porcentajeDescuento}%:`;
}

function limpiar() {
                       
    const form = document.getElementById('calculadoraForm');
    form.reset();
    
    document.getElementById('subtotal').value = '';
    document.getElementById('descuento').value = '';
    document.getElementById('total').value = '';
    document.getElementById('labelDescuento').textContent = 'Descuento 0%:';
    alertaDos('Todos los datos han sido restablecidos!')
}

function alerta(mensaje) {
    Swal.fire({
        icon: "error",
        title: mensaje,
      });
}

function alertaDos(mensaje) {
    Swal.fire({
        icon: "success",
        title: mensaje,
      });
}