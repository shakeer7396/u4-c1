import data from '../data.json'

import GroceryItem from "./GroceryItem"




const GroceryDetails = ()=>{
console.log(data)

    return(

        <>
        <h1>Groceries</h1>
        <div className="container">
            {/* map through the data and display the cards */
              <GroceryItem/>
            }
            
        </div>
        </>
    )
}
export default GroceryDetails