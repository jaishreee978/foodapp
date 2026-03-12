import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-extrabold text-green-500 flex items-center gap-2">
              Juco<span className="text-orange-500">Foods</span>
            </Link>
            <p className="text-slate-400 leading-relaxed font-medium">
              Bringing nature's finest to your cup. 100% natural, refreshing cold pressed juices, thick milkshakes, and authentic coconut specialties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-green-500 transition-colors">
                <FiFacebook className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-orange-500 transition-colors">
                <FiInstagram className="text-xl" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-blue-400 transition-colors">
                <FiTwitter className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 font-medium text-slate-400">
              <li><Link to="/" className="hover:text-green-500 transition-colors">Home Page</Link></li>
              <li><Link to="/menu" className="hover:text-green-500 transition-colors">Full Menu</Link></li>
              <li><Link to="/#about" className="hover:text-green-500 transition-colors">About Us</Link></li>
              <li><Link to="/#offers" className="hover:text-green-500 transition-colors">Special Offers</Link></li>
              <li><Link to="/cart" className="hover:text-green-500 transition-colors">Shopping Cart</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Opening Hours</h3>
            <ul className="space-y-4 font-medium text-slate-400">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-white font-bold">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-white font-bold">9:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-orange-500 font-bold">Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-6">Newsletter</h3>
            <p className="text-slate-400 font-medium mb-4">Subscribe to get special offers and updates.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-none text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Juco Foods. All rights reserved.
          </p>
          <p className="text-slate-500 font-medium flex items-center gap-1">
            Made with <FiHeart className="text-red-500 fill-current" /> for food lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
