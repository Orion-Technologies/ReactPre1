import cart from './assets/cart.png'

const CartWidget = () => {
    return (
        <>
        <figure className='image is-48x48'>
            <img src={cart} alt="cart-widget"/>
        </figure>
        <p>0</p>
        </>
    )
}

export default CartWidget;