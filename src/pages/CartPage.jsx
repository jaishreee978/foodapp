import Cart from '../components/Cart';

const CartPage = ({ cartItems, removeFromCart, updateQuantity }) => {
  return (
    <div className="min-h-[80vh] flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl w-full">
        <Cart 
          cartItems={cartItems} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity} 
        />
      </div>
    </div>
  );
};

export default CartPage;
