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
import { Link as ReachLink } from "@reach/router"

const Header: React.FC = () => {
    return (
        <Container>
            <InfoContainer>
                <TitleHeader>Cl Exp</TitleHeader>
                <RedirectionContainer>
                    <Breadcrumb style={{ marginRight: '10px' }}>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='/main'>Home</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='/teste'>Expenses</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Wrap>
                        <WrapItem>
                            <Link as={ReachLink} to='/teste'>
                                <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                            </Link>
                        </WrapItem>
                    </Wrap>
                </RedirectionContainer>
            </InfoContainer>
        </Container>
    )
}

export default Header