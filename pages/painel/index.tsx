import React from 'react';
import withAuth from '../../utils/withAuth';
import DashboardComponent from '@/src/components/Admin/Dashboard/dashboard';
import RootLayout from '@/app/layout';

const PainelAdmin: React.FC = () => {

  return (
    <RootLayout>
        <DashboardComponent children='formulario'/>
    </RootLayout>

  );
};

export default withAuth(PainelAdmin);