import React from 'react';
import { RowHeader, Container, RowContainer, Title, TotalContainer } from './styles';
import { TableProps } from './types';

const Table: React.FC<TableProps> = (props) => {
    const { expenses, month } = props;
    const sum = expenses.reduce(function (acc, obj) { return acc + obj.value; }, 0);

    const formatCurrency = (value: number) => {
        return (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

    const renderItems = () => {
        return expenses.map((item, key) => (
            <RowContainer key={key}>
                <div style={{flexBasis: '20%'}}>{item.description}</div>
                <div style={{flexBasis: '20%'}}>{item.date}</div>
                <div style={{flexBasis: '20%'}}>{item.category}</div>
                <div style={{flexBasis: '20%'}}>R$ {formatCurrency(item.value)}</div>
            </RowContainer>
        ))
    }

    return (
        <Container>
            <Title>{month}</Title>
            <ul style={{marginTop: '10px'}}>
                <RowHeader>
                    <div style={{flexBasis: '20%'}}>Description</div>
                    <div style={{flexBasis: '20%'}}>Date</div>
                    <div style={{flexBasis: '20%'}}>Category</div>
                    <div style={{flexBasis: '20%'}}>Value</div>
                </RowHeader>
                {renderItems()}
            </ul>
            <TotalContainer>
                <span>Total</span>
                <span>R$ {formatCurrency(sum)}</span>
            </TotalContainer>
        </Container>
    )
}

export default Table;