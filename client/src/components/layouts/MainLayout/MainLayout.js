import React from 'react';
import PageContainer from '../../layouts/PageContainer/PageContainer';
import NavBar from '../../features/NavBar/NavBar';

const MainLayout = ({children, isLogin, loggedUser}) => (
    <PageContainer>
        <NavBar isLogin={isLogin} loggedUser={loggedUser}/>
        {children}
    </PageContainer>
);

export default MainLayout;
