import { Expense } from "../../pages/Expenses/types";

export interface TableProps{
    expenses: Array<Expense>
    month: string;
}