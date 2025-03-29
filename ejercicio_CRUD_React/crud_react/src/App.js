import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import UserForm from './components/UserForm';
import UserTable from './components/UserTable';


import useUsers from './hooks/useUsers';
import useForm from './hooks/useForm';

function App() {
  
  const initialFormState = {
    email: '',
    password: '',
    name: '',
    avatar: 'https://api.escuelajs.co/api/v1/files/1.png',
    role: 'customer'
  };

 
  const { users, loading, fetchUsers, createUser, updateUser, deleteUser } = useUsers();

  
  const {
    values,
    errors,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    validateForm,
    setupEditMode,
    resetForm,
    editMode,
    currentId
  } = useForm(initialFormState);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    if (editMode) {
      
      await updateUser(currentId, {
        email: values.email,
        name: values.name,
        avatar: values.avatar,
        role: values.role
      });
    } else {
      
      await createUser(values);
    }
    
    resetForm();
    setIsSubmitting(false);
  };

  
  const handleEdit = (user) => {
    setupEditMode(user.id, {
      email: user.email,
      password: '',
      name: user.name,
      avatar: user.avatar,
      role: user.role
    });
  };

  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="fw-bold">Ejercicio CRUD React</h1>
        <p className="text-muted"></p>
      </header>
      
      <div className="row">
        <div className="col-md-4">
          <UserForm
            values={values}
            errors={errors}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            resetForm={resetForm}
            editMode={editMode}
            loading={isSubmitting}
          />
        </div>
        
        <div className="col-md-8">
          <UserTable
            users={users}
            loading={loading}
            onEdit={handleEdit}
            onDelete={deleteUser}
            onRefresh={fetchUsers}
          />
        </div>
      </div>

      <footer className="text-center mt-5 text-muted">
        <small>&copy; {new Date().getFullYear()} Wilmer Javier Sanchez  </small>
      </footer>
    </div>
  );
}

export default App;