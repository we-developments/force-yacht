import React from 'react';
import withAuth from '../../src/utils/withAuth';
import RootLayout from '@/app/layout';
import ForgotPasswordForm from '@/src/components/Admin/ForgotPassword/forgot';
import Layout from '@/src/components/Layout/layout';

const Dashboard: React.FC = () => {

  return (
    <Layout>
        <ForgotPasswordForm />
    </Layout>

  );
};

export default withAuth(Dashboard);