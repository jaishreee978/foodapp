import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      className="bg-white rounded-[2rem] p-4 flex flex-col h-full shadow-lg border border-slate-100 group relative"
    >
      <div className="relative h-56 rounded-2xl overflow-hidden mb-5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-orange-500 shadow-sm flex items-center gap-1">
          <FiStar className="fill-orange-400 text-orange-400" />
          {product.rating}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-slate-800 mb-1">{product.name}</h3>
        <p className="text-sm font-medium text-slate-500 mb-4">{product.category}</p>
        
        <div className="mt-auto flex items-center justify-between">
          <span className="text-2xl font-extrabold text-green-600">₹{product.price}</span>
          <button 
            onClick={() => addToCart(product)}
            className="bg-green-100 hover:bg-green-500 text-green-600 hover:text-white transition-colors duration-300 p-3 rounded-full shadow-sm flex items-center justify-center group-hover:bg-green-500 group-hover:text-white"
            aria-label="Add to cart"
          >
            <FiShoppingCart size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
