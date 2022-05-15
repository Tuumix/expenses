import React from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Link,
    Wrap,
    WrapItem,
} from '@chakra-ui/react'
import { Container, InfoContainer, RedirectionContainer, TitleHeader } from './styles';
import { Avatar } from '@chakra-ui/react'
import Main from '../../pages/Main';
import Expenses from '../../pages/Expenses';
import { useNavigate } from 'react-router-dom';
import AddExpense from '../../pages/AddExpense';

const Header: React.FC = () => {
    const paths = [
        { path: '/', component: Main, screen: 'Home' },
        { path: '/expenses', component: Expenses, screen: 'Expenses' },
        { path: '/createexpense', component: AddExpense, screen: 'Add Expenses'}
    ];
    const navigate = useNavigate();

    const renderBreadItems = () => {
        return paths.map((item, key) => {
            return (
                <BreadcrumbItem key={key}>
                    <BreadcrumbLink onClick={() => navigate(item.path)}>
                        {item.screen}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            )
        })
    }
    return (
        <Container>
            <InfoContainer>
                <TitleHeader>Cl Exp</TitleHeader>
                <RedirectionContainer>
                    <Breadcrumb style={{ marginRight: '10px' }}>
                        {renderBreadItems()}
                    </Breadcrumb>
                    <Wrap>
                        <WrapItem>
                            <Link as={Link} to='/teste'>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </Link>
                        </WrapItem>
                    </Wrap>
                </RedirectionContainer>
            </InfoContainer>
        </Container>
    )
}

export default React.memo(Header)