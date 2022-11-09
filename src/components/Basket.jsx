
function Basket(props) {
    function getTotal() {
        let total = 0;
        props.cart.forEach(item=> {
            total+=item.amount * item.price;
        });
        return total;
    }
    <section className="Basket">
        <ul>
            {props.cart.map(item=><li>{item.productdisplayname} x {item.amount}, {item.amount * item.price};</li>)}
            
        </ul>
        <h3>Total: {getTotal()}</h3>
        <button>Buy now</button>
    </section>
}

export default Basket;