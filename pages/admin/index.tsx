import LoginForm from '@/src/components/Admin/LoginForm/login';
import React from 'react';
import "../../styles/globals.css"
import Layout from '@/src/components/Layout/layout';

const AdminPage: React.FC = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default AdminPage;