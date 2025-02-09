document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rectangleForm');
    const baseInput = document.getElementById('base');
    const heightInput = document.getElementById('height');
    const resultDiv = document.getElementById('result');
    const areaSpan = document.getElementById('area');
    const clearBtn = document.getElementById('clearBtn');

    // Función para calcular el área
    function calculateArea(base, height) {
        return (base * height).toFixed(2);
    }

    // Función para validar que los inputs sean números positivos
    function validateInput(value) {
        return value > 0 && !isNaN(value);
    }

    // Función para limpiar el formulario
    function clearForm() {
        form.reset();
        resultDiv.classList.add('d-none');
        form.classList.remove('was-validated');
        baseInput.classList.remove('is-invalid');
        heightInput.classList.remove('is-invalid');
    }


    form.addEventListener('submit', function(event) {
        event.preventDefault();
       
        form.classList.add('was-validated');

        const base = parseFloat(baseInput.value);
        const height = parseFloat(heightInput.value);

        if (validateInput(base) && validateInput(height)) {
            const area = calculateArea(base, height);
            areaSpan.textContent = area;
            resultDiv.classList.remove('d-none');
        } else {
            resultDiv.classList.add('d-none');
            if (!validateInput(base)) baseInput.classList.add('is-invalid');
            if (!validateInput(height)) heightInput.classList.add('is-invalid');
        }
    });

   
    clearBtn.addEventListener('click', clearForm);

       baseInput.addEventListener('input', function() {
        if (this.value && validateInput(parseFloat(this.value))) {
            this.classList.remove('is-invalid');
        }
    });

    heightInput.addEventListener('input', function() {
        if (this.value && validateInput(parseFloat(this.value))) {
            this.classList.remove('is-invalid');
        }
    });
});