import React from 'react';
import withAuth from '../../utils/withAuth';
import DashboardComponent from '@/src/components/Admin/Dashboard/dashboard';
import Layout from '@/app/layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
        <DashboardComponent/>
    </Layout>

  );
};

export default withAuth(Dashboard);