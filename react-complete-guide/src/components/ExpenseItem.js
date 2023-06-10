import './ExpenseItem.css';

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{ '' + props.expenseData.date.getDate() + '-' + (props.expenseData.date.getMonth() + 1) + '-' + props.expenseData.date.getFullYear() }</div>
            <div className="expense-item__description">
                <h2>{props.expenseData.title}</h2>
                <div className="expense-item__price">${props.expenseData.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;