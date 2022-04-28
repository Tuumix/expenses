import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Container } from './styles';
import Table from './Table'
import { Report } from './types'

const Main: React.FC = () => {
    const expenses: Report[] = require('../../auxiliar.json');
    const [selectedMonth, setSelectedMonth] = useState(0)

    const renderSelectMonth = () => {
        return expenses.map((item, index) => (<Button color={'#3B3B98'} variant='outline' marginLeft={5} onClick={() => setSelectedMonth(index)}>{item.month}</Button>))
    }

    return (
        <Container>
            <div style={{ padding: '10px' }}>
                {renderSelectMonth()}
            </div>
            <Table expenses={expenses[selectedMonth].expenses} month={expenses[selectedMonth].month} />
        </Container>
    )
}

export default Main