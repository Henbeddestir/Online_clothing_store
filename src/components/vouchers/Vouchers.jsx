import './vouchers.css'
import promoImg from './../../img/images/vouchers-img.png';
import appstore from './../../img/icons/app-store.png'
import googleplay from './../../img/icons/google-play.png'

const Vouchers = () => {
    return (
    <section className="vouchers">


        <div className="container">
            <div className="vouchers__content">
    
                <div className="vouchers__text">

                    
                         
                    <div className="vouchers__title"><span>DOWNLOAD APP &<br/> GET THE VOUCHER!</span>
                    </div>
                        
                    <div className="vouchers__desc">Get 30% off for first transaction using<br/> mobile app for now.</div>


                   
                    <div className="vouchers__list">
                    <div><a href="#!"><img src ={appstore} alt="" /></a></div>
                    <div><a href="#!"><img src ={googleplay} alt="" /></a></div>
                    </div>
                    
              

                    
                </div>
                <div className="vouchers__img"><img src={promoImg} alt="" /></div>
            </div>
        </div>
    
    
    </section> );
}
 
export default Vouchers;


      
                /*
                    <div></div>
                    
                       <div></div> 

                  */  