import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Fruit Juices',
    desc: 'Refreshing, 100% natural fruit juices',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400',
    color: 'bg-orange-100',
    textColor: 'text-orange-600'
  },
  {
    title: 'Milk Shakes',
    desc: 'Creamy and delicious shakes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=400',
    color: 'bg-pink-100',
    textColor: 'text-pink-600'
  },
  {
    title: 'Fruit Salads',
    desc: 'Freshly cut seasonal fruits bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    color: 'bg-red-100',
    textColor: 'text-red-600'
  },
  {
    title: 'Coconut Shakes',
    desc: 'Signature tender coconut blends',
    image: 'https://images.unsplash.com/photo-1522806283120-cf68db1b27ee?auto=format&fit=crop&q=80&w=400',
    color: 'bg-cyan-100',
    textColor: 'text-cyan-600'
  },
  {
    title: 'Coconut Products',
    desc: 'Pure coconut water and treats',
    image: 'https://images.unsplash.com/photo-1526402832463-cb19fc57dc95?auto=format&fit=crop&q=80&w=400',
    color: 'bg-green-100',
    textColor: 'text-green-600'
  }
];

const Categories = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold text-slate-800 mb-4"
          >
            Explore Our <span className="text-green-500">Categories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Discover our wide range of healthy and delicious beverages made just for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-[2rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${cat.color} ${cat.textColor}`}>
                  Category
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-green-500 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-slate-500">
                  {cat.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
