document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('gradeForm');
    const resultado = document.getElementById('result');
    const notaFinal = document.getElementById('finalGrade');
    const categoria = document.getElementById('gradeCategory');

 
    document.getElementById('clearBtn').onclick = () => {
        form.reset();
        resultado.classList.add('d-none');
        alertaDos('Los valores fueron restablecidos, puedes volver a calcular')
    };

    
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const nota1 = parseFloat(document.getElementById('grade1').value);
        const nota2 = parseFloat(document.getElementById('grade2').value);
        const nota3 = parseFloat(document.getElementById('grade3').value);

       
        if (nota1 > 30 || nota2 > 30 || nota3 > 40 || 
            isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
            alerta('Por favor verifique los valores ingresados');
            return;
        }

      
        const total = nota1 + nota2 + nota3;
        notaFinal.textContent = total.toFixed(2);

       
        let categoriaTexto, alertClass;
        if (total >= 90) {
            categoriaTexto = 'Sobresaliente';
            alertClass = 'alert-success';
        } else if (total >= 80) {
            categoriaTexto = 'Muy Bueno';
            alertClass = 'alert-info';
        } else if (total >= 60) {
            categoriaTexto = 'Bueno';
            alertClass = 'alert-warning';
        } else {
            categoriaTexto = 'Reprobado';
            alertClass = 'alert-danger';
        }

        
        categoria.textContent = categoriaTexto;
        resultado.className = `alert ${alertClass}`;
        resultado.classList.remove('d-none');
    };
});

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