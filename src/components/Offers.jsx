import { motion } from 'framer-motion';

const offers = [
  {
    title: 'Buy 1 Get 1 Free',
    desc: 'On all fresh fruit juices this weekend!',
    bg: 'bg-gradient-to-r from-orange-400 to-red-500',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=400&q=80',
    code: 'JUICEWEEKEND'
  },
  {
    title: 'Summer Special',
    desc: '20% off on all smoothies and shakes.',
    bg: 'bg-gradient-to-r from-green-400 to-teal-500',
    img: 'https://images.unsplash.com/photo-1632054199587-f8cc0ced71c6?auto=format&fit=crop&q=80&w=400',
    code: 'SUMMER20'
  },
  {
    title: 'Coconut Health Combo',
    desc: 'Get a free coconut water with any fruit salad.',
    bg: 'bg-gradient-to-r from-cyan-400 to-blue-500',
    img: 'https://images.unsplash.com/photo-1526402832463-cb19fc57dc95?auto=format&fit=crop&q=80&w=400',
    code: 'COCOHEALTH'
  }
];

const Offers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            Special <span className="text-orange-500">Offers</span>
          </h2>
          <p className="text-lg text-slate-500">Grab these amazing deals before they are gone!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              className={`${offer.bg} rounded-[2rem] p-8 text-white relative overflow-hidden shadow-2xl group`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full transform translate-x-12 -translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <span className="inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
                  Limited Time
                </span>
                <h3 className="text-3xl font-bold mb-3">{offer.title}</h3>
                <p className="text-white/90 mb-6 font-medium text-lg leading-relaxed">{offer.desc}</p>
                
                <div className="flex items-center justify-between mt-8 border-t border-white/20 pt-6">
                  <div>
                    <span className="text-xs uppercase text-white/80 block mb-1">Use Code</span>
                    <span className="font-mono bg-white text-slate-900 px-3 py-1 rounded-md font-bold tracking-widest">{offer.code}</span>
                  </div>
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/50">
                    <img src={offer.img} alt="offer cover" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
