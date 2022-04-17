export interface Report {
    month: string;
    expenses: Array<Expense>
}

export interface Expense {
    id: number;
    description: string;
    category: string;
    date: string;
    value: number;
}