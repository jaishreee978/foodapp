import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

const features = [
  '100% Natural Ingredients',
  'Farm Fresh Fruits',
  'No Artificial Preservatives',
  'Eco-Friendly Packaging'
];

const About = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-orange-200 rounded-3xl transform rotate-3 scale-105 -z-10 absolute filter blur-lg opacity-60"></div>
            <img 
              src="https://images.unsplash.com/photo-1542316477-802dc4b1b8aa?auto=format&fit=crop&q=80&w=800" 
              alt="Fresh Fruits" 
              className="w-full rounded-3xl shadow-xl border-8 border-white object-cover h-[500px]"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-2">Our Story</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              Pure Health in <span className="text-green-500">Every Drop</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Juco Foods is a healthy beverage shop offering fresh fruit juices, delicious milkshakes, fruit salads, and coconut-based drinks made from natural ingredients. We believe in providing nature's best to keep you refreshed and vibrant everyday.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <FiCheckCircle className="text-green-500 text-xl" />
                  </div>
                  <span className="font-semibold text-slate-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
