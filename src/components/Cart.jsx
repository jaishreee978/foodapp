import { FiTrash2, FiPlus, FiMinus, FiArrowLeft, FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-[2rem] shadow-xl p-12 text-center">
        <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiShoppingCart size={48} className="text-slate-400" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Your Cart is Empty</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Discover our fresh beverages and treats!</p>
        <Link to="/menu" className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-1">
          Explore Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[2rem] shadow-xl p-6 md:p-10 border border-slate-100">
      <div className="flex items-center justify-between border-b border-slate-100 pb-6 mb-8">
        <h2 className="text-3xl font-extrabold text-slate-800">Shopping Cart</h2>
        <span className="bg-green-100 text-green-700 font-bold px-4 py-1 rounded-full">{cartItems.length} Items</span>
      </div>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-slate-50 rounded-2xl gap-6">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl shadow-sm" />
              <div>
                <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                <p className="text-sm text-slate-500 font-medium">{item.category}</p>
                <p className="text-green-600 font-extrabold mt-1">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full sm:w-auto gap-8">
              <div className="flex items-center bg-white rounded-full p-1 shadow-sm border border-slate-200">
                <button 
                  onClick={() => updateQuantity(item.id, -1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors bg-white font-bold"
                >
                  <FiMinus />
                </button>
                <span className="w-10 text-center font-bold text-slate-800">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.id, 1)}
                  className="w-8 h-8 flex items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors bg-white font-bold"
                >
                  <FiPlus />
                </button>
              </div>
              
              <div className="text-right font-extrabold text-lg w-20 text-slate-800">
                ₹{item.price * item.quantity}
              </div>

              <button 
                onClick={() => removeFromCart(item.id)}
                className="p-3 text-red-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors flex-shrink-0"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-slate-100 pt-8 flex flex-col md:flex-row gap-8 justify-between">
        <div className="w-full md:w-1/2">
          <Link to="/menu" className="inline-flex items-center gap-2 text-green-600 font-bold hover:text-green-700 transition-colors">
            <FiArrowLeft /> Continue Shopping
          </Link>
        </div>
        
        <div className="w-full md:w-1/3 bg-slate-50 p-6 rounded-[2xl]">
          <h3 className="text-xl font-bold mb-6 text-slate-800">Order Summary</h3>
          <div className="space-y-3 text-slate-600 mb-6 font-medium">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5%)</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-xl font-extrabold text-slate-800">
              <span>Total</span>
              <span className="text-green-600">₹{total.toFixed(2)}</span>
            </div>
          </div>
          
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
