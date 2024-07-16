
import './footer.css'



function Footer () {

    return <header className="footer">
      <div className="container">
           <div className="footer__content">
            <div className="footer__socials">

                <p style={{fontSize:30,fontWeight:800}}>FASHION</p>
                <p style={{color:'grey', paddingTop:10}}>Complete your style with awesome <br/> clothes from us.</p>
               
            </div>



                <div className="footer__links">
                     
                <div>
                <ul>   
                <li><a href="#!" style={{color:'white'}}>Company</a></li>
                <li><a href="#!">About</a></li>
                <li><a href="#!">Contact us</a></li>
                <li><a href="#!">Support</a></li>
                <li><a href="#!">Careers</a></li>
                </ul>
                </div>

                <div>
                <ul>   
                <li><a href="#!" style={{color:'white'}}>Quick Link</a></li>
                <li><a href="#!">Share Location </a></li>
                <li><a href="#!">Orders Tracking</a></li>
                <li><a href="#!">Size Guide</a></li>
                <li><a href="#!">FAQs</a></li>
                </ul>
                    
                </div>

                <div>
                <ul>   
                <li><a href="#!" style={{color:'white'}}>Legal</a></li>
                <li><a href="#!">Terms & conditions</a></li>
                <li><a href="#!">Privacy Policy</a></li>
                
                </ul>
                </div>


                  </div>


                </div>
           </div>



      
       </header>;
    
}
export default Footer;