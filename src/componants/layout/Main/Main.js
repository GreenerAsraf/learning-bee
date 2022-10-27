import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import SideNav from '../../Shared/SIdeNav/SideNav';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Container>
        
            <Row>
                <Col lg='4'>
                    <SideNav></SideNav>
                </Col>

                <Col lg='8'>
                   <Outlet></Outlet>
                </Col>
            </Row>
            
        </Container>
        <Footer></Footer>
        </>
    );
};

export default Main;