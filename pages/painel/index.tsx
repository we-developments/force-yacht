import React from 'react';
import withAuth from '../../src/utils/withAuth';
import DashboardComponent from '@/src/components/Admin/Dashboard/dashboard';
import Layout from '@/src/components/Layout/layout';

const PainelAdmin: React.FC = () => {

  return (
    <Layout>
        <DashboardComponent panelName='formulario'/>
    </Layout>

  );
};

export default withAuth(PainelAdmin);