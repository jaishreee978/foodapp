import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const categories = ['All', 'Fruit Juices', 'Milk Shakes', 'Fruit Salads', 'Coconut Shakes', 'Coconut Products'];

const Menu = ({ addToCart, limit, title }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = products.filter(product => {
    if (activeCategory === 'All') return true;
    return product.category === activeCategory;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-slate-800 mb-6"
        >
          {title || "Our Menu"}
        </motion.h2>
        
        {!limit && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-green-500 text-white shadow-lg shadow-green-200' 
                    : 'bg-white text-slate-600 hover:bg-green-50 shadow-sm border border-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence>
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </AnimatePresence>
      </motion.div>
      
      {limit && (
        <div className="mt-12 text-center">
          <a href="/menu" className="inline-block bg-white border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
            View Full Menu
          </a>
        </div>
      )}
    </section>
  );
};

export default Menu;
