const usersList = document.getElementById('usersList');
const loading = document.getElementById('loading');


fetch('https://api.escuelajs.co/api/v1/users')
    .then(response => response.json())
    .then(users => {
       
        const usersHTML = users.map(user => `
            <div class="col-md-6 col-lg-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <div class="card-body text-center">
                        <img src="${user.avatar}" class="rounded-circle mb-3" width="128" height="128" alt="Avatar de ${user.name}">
                        <h5 class="card-title">${user.name}</h5>
                        <p class="card-text text-muted">${user.email}</p>
                        <p class="card-text small text-muted">🔑 ${user.password}</p>
                    </div>
                </div>
            </div>
        `).join('');
        
    
        usersList.innerHTML = usersHTML;
    })
    .catch(error => {
        usersList.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-danger" role="alert">
                    Error al cargar los usuarios. Por favor, intente nuevamente más tarde.
                </div>
            </div>
        `;
    })
    .finally(() => {
        loading.style.display = 'none';
    });