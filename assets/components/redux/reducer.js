const initialState = {
    budgetItems: [ ],
  };
  
  export const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_BUDGET_ITEM':
        return {
          ...state,
          budgetItems: [...state.budgetItems, action.payload],
        };
        

      default:
        return state;
    }
  };
  
  