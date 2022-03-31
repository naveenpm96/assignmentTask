import './navbar.css'
import cabbage from './project_images/cabbage.png'
import human from './project_images/human.png'
import trolley from './project_images/trolley.png'
import search from './project_images/search.png'
const Navbar =() =>{
    return(
        <div className="mainNav">
            
            <div className="navFirst">
                <div className="logo">
                    <img src={cabbage} alt=""/>
                    <h3><span style={{color:"green"}}>Company</span>logo</h3>
                </div>
                <div className="inputbar">
                    <input type="search" />
                    <button ></button>    
                </div>
                <div className="content">
                    <img src={human} alt="" id="person"/>
                    <img src={trolley} alt="" id="basket"/>
                </div>
            </div>

            <div className="navSecond">
                <div id="contents">
                    <p>Bakery</p>
                    <p>Nuts & Seeds</p>
                    <p>Vegetables</p>
                    <p>Cheeses</p>
                    <p>Sea Food</p>
                    <p>Dairy</p>
                    <p>Meat</p>
                    <p>Snacks</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;