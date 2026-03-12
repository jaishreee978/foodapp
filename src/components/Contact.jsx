import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries or bulk orders!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-[3rem] p-4 md:p-12 shadow-xl border border-slate-100">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-extrabold text-slate-800 mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="text-green-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Our Location</h4>
                    <p className="text-slate-600 font-medium">123 Fresh Avenue, Healthy City,<br />FC 45678, Country</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone className="text-orange-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Phone Number</h4>
                    <p className="text-slate-600 font-medium">+1 (234) 567-8900<br />+1 (234) 567-8901</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 mb-1">Email Address</h4>
                    <p className="text-slate-600 font-medium">hello@jucofoods.com<br />support@jucofoods.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-md border-4 border-white mt-8">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2!1m3!1m2" 
                width="100%" 
                height="100%" 
                style={{border:0, background: '#e2e8f0'}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white rounded-[2rem] p-8 shadow-lg border border-slate-100"
          >
            <h3 className="text-2xl font-extrabold text-slate-800 mb-6">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors"
                  required 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  rows="5"
                  placeholder="How can we help you?" 
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white transition-colors resize-none"
                  required 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <FiSend /> Send Message
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
