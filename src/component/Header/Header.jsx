import './Header.css';
import logo from '../../assets/logo.png';
import account from '../../assets/account.png';


function Header() {
  return (
    <div className="heroheader">
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" className="logoimage" />
          <div className="logoname"> Untitled UI</div>
        </div>
      <div className="navigation">
        <div className="home">Home</div>
        <div className="products">
          <div className="product">Products</div>
          <img src='' alt="" className="downarrow" />
        </div>
        <div className="Resources">
          <div className="Resource">
          Resources
          </div>
          <img src="" alt="" className="downarrow" />
        </div>
        <div className="pricing"> Pricing</div>
        </div>
      </div>
   <img src={account} alt="" className="account" />
    </div>
    </div>
  );
}

export default Header;
