import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const reviews = [
  {
    name: 'Sarah Johnson',
    text: 'Best fresh juices in town! The mango juice is absolutely divine and feels so natural.',
    role: 'Local Guide',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Michael Davis',
    text: 'Loved the coconut shakes! They are so refreshing after a long day at work.',
    role: 'Fitness Enthusiast',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    name: 'Emily Chen',
    text: 'Healthy and delicious drinks. My kids love the chocolate milkshakes here.',
    role: 'Mother of two',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  }
];

const Reviews = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            What Our <span className="text-green-500">Customers</span> Say
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Real feedback from our lovely customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[2rem] p-8 shadow-xl relative border border-slate-100"
            >
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="fill-current text-lg" />
                ))}
              </div>
              <p className="text-slate-600 text-lg mb-8 italic leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={review.img} alt={review.name} className="w-14 h-14 rounded-full object-cover border-2 border-green-100" />
                <div>
                  <h4 className="font-bold text-slate-800">{review.name}</h4>
                  <p className="text-sm font-medium text-slate-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
