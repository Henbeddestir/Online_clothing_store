import Header from './components/header/Header'
import Promo from './components/promo/Promo'
import Brands from './components/brands/Brands.jsx'
import Arrivals from './components/arrivals/Arrivals.jsx'
import Card from './components/card/Card.jsx'
import Sale from './components/sale/Sale.jsx'
import Favourites from './components/favourites/Favourites.jsx'
import Vouchers from './components/vouchers/Vouchers.jsx'
import Emailform from './components/emailform/Emailform.jsx'
import Footer from './components/footer/Footer.jsx'





function App() {

  

  return (
    <div className="App">
      
  
     <Header />
     <Promo />
     <Brands />
     <Arrivals />
     <Sale />
     <Favourites />
     <Vouchers />
     <Emailform />
     <Footer />
    </div>
  );
}

export default App;
