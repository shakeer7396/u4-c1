// reusable card component
import CartButton from "./CartButton"


import data from '../data.json'

const GroceryItem = () => {

  
  
  return <>{   
     data.map(item=>
                    <>
                    <div className="name">
                    <img src={item.imgURL} alt="" />
                    <h3>{item.title}</h3>
                    <div className="">
                    <p>{item.sellingPrice}</p>
                    <strike>{item.mrp}</strike>

                    
                    </div>
                    <button className="btn">  ADD TO CART <CartButton/></button>
                    
                    {/* <div>ADD TO CART <button onClick={add}>+</button><button onClick={remove}>-</button><p>{Count}</p></div> */}
                    </div>
                    
                    </>
                    
                    
                )}
  </>;
};
export default GroceryItem;