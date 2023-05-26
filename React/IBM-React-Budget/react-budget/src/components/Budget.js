import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency, currencyOptions } = useContext(AppContext);
    const [editMode, setEditMode] = useState(false);
    const [value, setValue] = useState(budget);

    const totalExpense = expenses.reduce((total, item) => total + item.cost, 0);

    const handleSave = () => {
        if (value < totalExpense) {
            alert('You cannot reduce the budget lower than the current spending');
        } else if (value > 20000) {
            alert('Invalid budget value. Your budget must be less than or equal to 20,000.');
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
            setEditMode(false);
        }
    };

    const increaseBudget = () => {
        if (value + 10 <= 20000) {
            setValue(value + 10);
        }
    };

    const decreaseBudget = () => {
        if (value - 10 >= totalExpense) {
            setValue(value - 10);
        }
    };

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyOptions.find(opt => opt.name === event.target.value)
        });
    };

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <div className='alert alert-success d-flex align-items-center justify-content-between'>
                <div>
                    <label htmlFor="currencySelect">Currency: </label>
                    <select id="currencySelect" onChange={handleCurrencyChange} value={currency.name}>
                        {currencyOptions.map(opt => <option key={opt.name} value={opt.name}>{opt.symbol} {opt.name}</option>)}
                    </select>
                </div>
            </div>
            <div className='alert alert-primary d-flex align-items-center justify-content-between'>
                {editMode ? (
                    <>
                        <div>
                            <button className='btn btn-primary mr-2' onClick={decreaseBudget}>-</button>
                            {currency.symbol}<input
                            type='number'
                            value={value}
                            onChange={(event) => setValue(parseInt(event.target.value, 10))}
                        />
                            <button className='btn btn-primary ml-2' onClick={increaseBudget}>+</button>
                        </div>
                        <div>
                            <button className='btn btn-success mr-2' onClick={handleSave}>Save</button>
                            <button className='btn btn-danger' onClick={() => setEditMode(false)}>Cancel</button>
                        </div>
                    </>
                ) : (
                    <>
                        <span>Budget: {currency.symbol}{budget}</span>
                        <button className='btn btn-light' onClick={() => setEditMode(true)}>Edit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Budget;
