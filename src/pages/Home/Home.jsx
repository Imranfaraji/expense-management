import React from 'react';
import DisplayExpense from '../../component/homeComponent/DisplayExpense';
import ExpenseHistory from '../../component/homeComponent/ExpenseHistory';
import DailyExpenseComparison from '../../component/homeComponent/DailyExpenseComparison';
import TodayExpense from '../../component/homeComponent/TodayExpense';

const Home = () => {
    return (
        <div>
            <DisplayExpense></DisplayExpense>
            <TodayExpense></TodayExpense>
            <ExpenseHistory></ExpenseHistory>
            <DailyExpenseComparison></DailyExpenseComparison>
        </div>
    );
};

export default Home;