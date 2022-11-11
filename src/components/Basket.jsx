import {useState} from "react";
import CheckoutForm from "./CheckoutForm"
function Basket(props) {
    const [showForm, setShowForm] = useState(false);
    function getTotal() {
        let total = 0;
        props.cart.forEach(item=> {
            total+=item.amount * item.price;
        });
        return total;
    }
    return(
    <section className="Basket">
        <ul>
            {props.cart.map(item=>
            <li key={item.id}>{item.productdisplayname} x {item.amount}, {" "} {item.amount * item.price},-
            <button onClick={() => props.removeFromCart(item.id)}>X</button>
            </li>
            )}
            
        </ul>
        <h3>Total: {getTotal()}</h3>
        {!showForm && <button onClick={() => setShowForm(true)}>Buy now</button>}
        {showForm && <CheckoutForm cart={props.cart} />}
    </section>)
}

export default Basket;