import Menu from '../components/Menu';

const MenuPage = ({ addToCart }) => {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <Menu addToCart={addToCart} title="Our Full Menu" />
    </div>
  );
};

export default MenuPage;
