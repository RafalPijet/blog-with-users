import React from 'react';
import PageContainer from '../../layouts/PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBar';

const MainLayout = ({children, isLogin}) => (
    <PageContainer>
        <NavBar isLogin={isLogin}/>
        {children}
    </PageContainer>
);

export default MainLayout;
