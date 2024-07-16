import './sale.css'
import promoImg from './../../img/images/promo-img.jpg'

const Sale = () => {
    return (
    <section className="Sale">


        <div className="container">
            <div className="sale__content">
            
                <div className="sale__img"><img src={promoImg} alt="" /></div>
            
                <div className="sale__text">

                
                      
                    <div className="sale__title"><p class="highlight"><span>PAYDAY</span></p><br/><p style={{paddingTop:15}}>SALE NOW</p>
                    </div>
                        
                    <div className="sale__desc">Spend minimal $100 get 30%&nbsp;off<br/>
                    voucher code for your next purchase</div>
                    <div className="sale__desc" ><span> <span style={{fontWeight:900}}>1 June - 10 June 2021</span><br/>
                    *Terms & Conditions apply</span></div>
                    <div className="sale__btn-wrapper">
                        <a href="#!" className="sale__btn">Shop Now</a>
                    </div>
                    

                  </div>  

                    

                    
                </div>
        </div>
    
    
    </section> );
}
 
export default Sale;