        document.addEventListener('DOMContentLoaded', function() {
           
            function validateInput(input) {
                if (input.value < 0 || input.value === '') {
                    input.classList.add('is-invalid');
                    return false;
                }
                input.classList.remove('is-invalid');
                return true;
            }

            // Kilómetros a Metros
            const kmInput = document.getElementById('kmInput');
            kmInput.addEventListener('input', function() {
                if (validateInput(this)) {
                    document.getElementById('mOutput').value = (this.value * 1000).toFixed(2);
                }
            });

            // Metros a Centímetros
            const mInput = document.getElementById('mInput');
            mInput.addEventListener('input', function() {
                if (validateInput(this)) {
                    document.getElementById('cmOutput').value = (this.value * 100).toFixed(2);
                }
            });

            // Pies a Pulgadas
            const ftInput = document.getElementById('ftInput');
            ftInput.addEventListener('input', function() {
                if (validateInput(this)) {
                    document.getElementById('inchOutput').value = (this.value * 12).toFixed(2);
                }
            });

            // Yardas a Pulgadas
            const ydInput = document.getElementById('ydInput');
            ydInput.addEventListener('input', function() {
                if (validateInput(this)) {
                    document.getElementById('inchYdOutput').value = (this.value * 36).toFixed(2);
                }
            });

            // Limpiar formulario
            document.getElementById('conversionForm').addEventListener('reset', function() {
                const outputs = document.querySelectorAll('input[readonly]');
                outputs.forEach(output => output.value = '');
                const inputs = document.querySelectorAll('input:not([readonly])');
                inputs.forEach(input => input.classList.remove('is-invalid'));
            });
        });
    