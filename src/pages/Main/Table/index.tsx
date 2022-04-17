import React from 'react';
import { TD, TH } from './styles';
import { TableProps } from './types';

const Table: React.FC<TableProps> = (props) => {
    const { expenses } = props;

    const renderItems = () => {
        return expenses.map(item => (
            <tr>
                <TD>{item.description}</TD>
                <TD>{item.date}</TD>
                <TD>{item.category}</TD>
                <TD>{item.value}</TD>
            </tr>
        ))
    }

    return (
        <div>
            <table>
                <tr>
                    <TH>Description</TH>
                    <TH>Date</TH>
                    <TH>Category</TH>
                    <TH>Value</TH>
                </tr>
               {renderItems()}
            </table>
        </div>
    )
}

export default Table;