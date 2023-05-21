import React from 'react';
import withAuth from '../../src/utils/withAuth';
import DashboardComponent from '@/src/components/Admin/Dashboard/dashboard';
import RootLayout from '@/app/layout';
import Layout from '@/src/components/Layout/layout';

const Dashboard: React.FC = () => {

  return (
    <Layout>
        <DashboardComponent panelName='boats'/>
    </Layout>

  );
};

export default withAuth(Dashboard);