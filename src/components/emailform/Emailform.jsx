import './emailform.css'
import promoImg from './../../img/images/promo-img.jpg'

const Emailform = () => {
    return (
    <section className="emailform">


        <div className="container">
            <div className="emailform__content">
            
            
            
                <div className="emailform__text">

                
                      
                    <div className="emailform__title"><span>JOIN SHOPPING COMMUNITY TO<br/>GET MONTHLY PROMO</span>
                    </div>
                        
                    <div className="emailform__desc">Type your email down bellow and be young wild generation</div>
    

                    <form>
  <label>
  
    <input id="emailform__form"  type="email"   placeholder="Add your email here"/>
  </label>
  <button type="button" 
                id="submitButton">
              Submit
          </button>
</form>
                   

                  </div>  

                    

                    
                </div>
        </div>
    
    
    </section> );
}
 
export default Emailform;