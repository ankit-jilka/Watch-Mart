const addIt = [];

const addItem = (state = addIt, action) => {
    
    switch (action.type){
        case "ADDITEM" : return [...state,action.payload];         
            break;
         
         case "DELITEM" : return state = state.filter((x)=>{
                return x.product.id !== action.payload.id
            })
            break;

         case "CHECKOUT" : return [];
            break;

         case "REPLACEQTY" :
                let updatedCart = [...state].map((y,index) => {
                    
                  if(y.product.id === action.payload.product.product.id){
                        return {...y,qty : action.payload.qty};         
                    }
                  return {...y}; 
                  
                }         
         )
            
             return updatedCart;

         default: return state;
            break;
    }
} 

export default addItem;
