import React from 'react';
import withAuth from '../../utils/withAuth';
import DashboardComponent from '@/src/components/Admin/Dashboard/dashboard';
import RootLayout from '@/app/layout';

const Dashboard: React.FC = () => {

  return (
    <RootLayout>
        <DashboardComponent panelName='painel'/>
    </RootLayout>

  );
};

export default withAuth(Dashboard);