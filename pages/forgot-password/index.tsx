import React from 'react';
import withAuth from '../../utils/withAuth';
import RootLayout from '@/app/layout';
import ForgotPasswordForm from '@/src/components/Admin/ForgotPassword/forgot';

const Dashboard: React.FC = () => {

  return (
    <RootLayout>
        <ForgotPasswordForm />
    </RootLayout>

  );
};

export default withAuth(Dashboard);