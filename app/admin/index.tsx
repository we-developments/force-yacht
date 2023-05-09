import LoginForm from '@/src/components/Admin/LoginForm/login';
import React from 'react';

const AdminPage: React.FC = () => {
  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl">Painel Administrativo</h1>
      <LoginForm />
    </div>
  );
};

export default AdminPage;