import './Nav.css';

const NavBar = () => {
  return (
    <nav className="NavBar">
      <div className="NavBar-container">
          <span className="NavBar-logo">CoffeeShopWorld</span>
        </div>
        <div className="NavBar-right">
          <span className="finalizar-compra">Finalizar Compra</span>
        
      </div>
    </nav>
  );
};

export default NavBar;