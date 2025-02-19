
fetch('https://api.escuelajs.co/api/v1/categories')

    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(categoria => {
            html += `
                <div class="col-md-4 mb-4">
                    <div class="card  bg-info">
                        <img src="${categoria.image}" class="card-img-top">
                        <div class="card-body ">
                            <h5 class="card-title text-center">${categoria.name}</h5>
                            
                        </div>
                    </div>
                </div>
            `;
        });
        document.getElementById('categorias').innerHTML = html;
    })


    .catch(error => {
        document.getElementById('categorias').innerHTML = `
            <div class="col-12">
                <div class="alert alert-danger">
                    Error al cargar las categorías
                </div>
            </div>
        `;
    });
