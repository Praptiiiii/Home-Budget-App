
export const productAdd = (itemName, plannedAmount, actualAmount) =>{
    return  {
      type: "ADD_BUDGET_ITEM",
       payload:{ itemName, plannedAmount, actualAmount } 
    }
}
