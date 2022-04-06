import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// we can write anything such as data in place of  props
// it contains all the data that is declared in the APP <ExpenseItem> component.
function ExpenseItem(props) {
  //     //step2()
//   const expenseDate = new Date(2021, 2, 28);
//   const expenseTitle = "Car Insurance";
//   const expenseAmount = 249.5;
const month=props.date.toLocaleString('en-US',{month:'long'});
const year=props.date.toLocaleString('en-US',{day:'2-digit'});
const day=props.date.getFullYear();

  return (
    //step1(basic)
    // <div className='expense-item '>
    //   <div>March 28th 2022</div>
    //   <div className='expense-item__description'>
    //     <h2>Car Insaurance</h2>
    //     <div className='expense-item__price'>$500</div>
    //   </div>
    // </div>

    // step 2
    //     <div className='expense-item '>
    //     <div>{expenseDate.toISOString()}</div>
    //     <div className='expense-item__description'>
    //       <h2>{expenseTitle}</h2>
    //       <div className='expense-item__price'>${expenseAmount}</div>
    //     </div>
    //   </div>

    // //step3
    <div className="expense-item ">
     <ExpenseDate  date={props.date}/>
      
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
