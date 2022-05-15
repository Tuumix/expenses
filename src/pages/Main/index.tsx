import { Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Container } from './styles';
import Table from './Table'
import { Report } from './types'

const Main: React.FC = () => {
    const expenses: Report[] = require('../../auxiliar.json');
    const [selectedMonth, setSelectedMonth] = useState(0)
    // const [compare, setCompare] = useState(false);
    
    const renderSelectMonth = () => {
        return expenses.map((item, key) => (<Button key={key} color={'#3B3B98'} size='ls' variant='outline' marginLeft={5} onClick={() => selectMonth(key)}>{item.month}</Button>))
    }

    const selectMonth = (index: number) => {
        setSelectedMonth(index);
    }

    return (
        <Container>
            <div style={{ padding: '10px' }}>
                {renderSelectMonth()}
            </div>
            <Table expenses={expenses[selectedMonth].expenses} month={expenses[selectedMonth].month} />
            {/* <div>
                <Button bgColor={'pink'} onClick={() => setCompare(true)} >Compare</Button>
            </div> */}
        </Container>
    )
}

export default Main