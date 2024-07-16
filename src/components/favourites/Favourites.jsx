import './favourites.css'
import cat01Img from './../../img/images/promo-01.jpg';
import cat02Img from './../../img/images/promo-02.jpg';

import Card from './../card/Card'



const Favourites = () => {
    return (<section className='favourites'>
        
        
        <div className="container">
        <div className="favourites__header">
            <h2 className="title-2">Young's Favourite</h2>
        </div>
        <div className="favourites__cards">
                <Card title="Trending on Instagram" img={cat01Img}/>
                <Card title="All Under $40"  img={cat02Img}/>
                




        </div>
        </div>
        </section>);
}
 
export default Favourites;