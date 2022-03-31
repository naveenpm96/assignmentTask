import './mainheading.css'
import reviewstar from './project_images/reviewstar.png'
import bread from './project_images/bread.png'
import tr1 from "./project_images/1st truck.png"
import tr2 from "./project_images/2nd truck.png"
import box from "./project_images/box.png"


const Pagetittle = () => {
    return (
        <div>
            <div className="title">
                <h1>Dave's Killer Bread® Organic 21 Whole Grain Bread</h1>
            </div>
            <div className='title_img' >
                <img src={reviewstar} alt="" width={"20px"} height={"20px"} />
                <img src={reviewstar} alt="" width={"20px"} height={"20px"} />
                <img src={reviewstar} alt="" width={"20px"} height={"20px"} />
                <img src={reviewstar} alt="" width={"20px"} height={"20px"} />
                <img src={reviewstar} alt="" width={"20px"} height={"20px"} />
                <p style={{ marginLeft: "15px" }}>5 reviews</p>
            </div>

            <div className='product'>
                <div className='productimg'>
                    <img src={bread} alt="" width={"266px"} height={"266px"} />
                </div>
                <div className='productpricing1'>
                    <input className='pricing' type="radio" /> <label>$5.99</label> <p style={{ fontSize: "smaller" }}>shipping:$5.00</p>
                </div>
                <div className='productpricing2'>
                    <input className='pricing' type="radio" /> <label>$5.99</label> <p style={{ fontSize: "smaller" }}>shipping:$5.00</p>
                </div>
                <div className='productpricing3'>
                    <input className='pricing' type="radio" /> <label>$5.99</label> <p style={{ fontSize: "smaller" }}>shipping:$5.00</p>
                </div>
                <div className='productbtn'>
                    <button>See more sellers</button>
                </div>
            </div>

            <div className='sellerdetails'>
                <div>
                    <span>Seller: <a style={{ textDecoration: "none" }} href="">seller name</a></span>
                    <div className='reviewimg' >
                        <img src={reviewstar} alt="" width={"15px"} height={"15px"} />
                        <img src={reviewstar} alt="" width={"15px"} height={"15px"} />
                        <img src={reviewstar} alt="" width={"15px"} height={"15px"} />
                        <img src={reviewstar} alt="" width={"15px"} height={"15px"} />
                        <img src={reviewstar} alt="" width={"15px"} height={"15px"} />
                        <p style={{ marginLeft: "10px", marginTop: "-1px", fontSize: "smaller" }}>5 reviews</p>
                    </div>
                </div>
                <div>
                    <span className='sellername'>Brand: <a style={{ textDecoration: "none" }} href="">Dave Killer's Breads</a></span>
                </div>
                <div className='available'>
                    <span>Available in</span>
                </div>
                <div className="button">
                    <button style={{ padding: "7px", border:"1px solid #BBBBBB",background:"white",borderRadius:"2px" }}>300gms</button>
                    <button style={{ marginLeft: "10px", padding: "7px", backgroundColor:"#47AFFF", border:"none" }}>500kg</button>
                    <button style={{ marginLeft: "10px", padding: "7px", border:"1px solid #BBBBBB",background:"white",borderRadius:"2px" }}>750kg</button>
                </div>
                <div className='quantity'>
                    <span>Quantity</span><br />
                    <button style={{border:"1px solid #BBBBBB",background:"white",borderRadius:"2px"}}>- 1 +</button>
                </div>
                <div className='availability'>
                    <span>Check Availability</span>
                    <input type="text" placeholder='Enter zipcode' />
                    <button style={{backgroundColor:"#47AFFF",border:"none"}}>check</button>
                </div>
            </div>
            <div className='cartbtn'>
                <button>Add to Cart</button>
            </div>
            <div className='buybtn'>
                <button>Buy Now</button>
            </div>

            {/* description */}

            <div className='description' >
                <div className="txt" >
                    <h4>Description</h4><br />
                    <p>
                        Ingredients: Water, Organic Whole Wheat Flour, Organic Cracked Whole Wheat, <br />
                        Organic Cane Sugar, Organic Grain and Seed Topping Mix (Organic Flax Seeds, <br />
                        Organic Sunflower Seeds, Organic Brown Sesame Seeds, Organic Triticale Flakes <br />
                        [Wheat], Organic Barley Flakes, Organic Oat Flakes, Organic Pumpkin Seeds, <br />
                        Organic Rye Flakes, Organic Black Sesame Seeds, Organic Millet, Organic Spelt <br />
                        Flakes [Wheat], Organic Yellow Cornmeal, Organic Kamut Khorasan Wheat <br />
                        Flakes, Organic Quinoa, Organic Poppy Seeds), Organic Wheat Gluten.
                    </p>
                </div>

                <div className="Shipping">
                    <img src={tr1} /> <span>15th - 17th September (Expedited shipping)</span><br/><br/>
                    <img src={tr2} /> <span>20th - 21st September (Standard shipping) </span>    <span>Select Standard Shipping </span> <br/><br/>
                    <img src={box} /> <span>Secured Packing</span>
                </div>
            </div>
            

        </div>
    );
}

export default Pagetittle;