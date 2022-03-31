import next from './project_images/nextimg.png'
import previous from './project_images/previousimg.png'
import thinbread from './project_images/thinbread.png'
import seedbread from './project_images/seedbread.png'
import pumkinbread from './project_images/pumkinbread.png'
import whitebread from './project_images/whitebread.png'
import glutenbread from './project_images/glutenbread.png'




import './carosel.css'


const Carosel = () => {
    return (
        <div>
            <div className="relpro">
                <div className="relatedproducts">
                    <div className='pcdtitle'>
                        <h2>Related Products</h2>
                    </div>
                    <br />

                    <div className="Products" style={{alignItems:"center"}}>
                        <img src={previous} alt="" width={"50px"} />

                        <div className="bread1" >
                            <img src={thinbread} alt="" />
                            <div className='title1'>
                            <p className=''>Organic Thin-Sliced Bread </p>
                            <p style={{color:"#9E9E9E"}}>1123307722</p>
                            <h4> $2.89 </h4>
                            </div>
                        </div>

                        <div className="bread2">
                            <img src={seedbread} alt="" />
                            <p className='title2'>Organic Good Seed Bread </p>
                            <p style={{color:"#9E9E9E"}}>1123307722</p>
                            <h4> $2.89 </h4>
                        </div>

                        <div className="bread3">
                            <img src={pumkinbread} alt="" />
                            <p className='title3' >Pumpkin Seed Bread </p>
                            <p style={{color:"#9E9E9E"}}>1123307722</p>
                            <h4> $2.89 </h4>
                        </div>

                        <div className="bread4">
                            <img src={whitebread} alt="" />
                            <p className='title4'>White Bread </p>
                            <p style={{color:"#9E9E9E"}}>1123307722</p>
                            <h4> $2.89 </h4>
                        </div>

                        <div className="bread5">
                            <img src={glutenbread} alt="" />
                            <p className='title5'>Canyon Gluten Free Bread </p>
                            <p style={{color:"#9E9E9E"}}>1123307722</p>
                            <h4> $2.89 </h4>
                        </div>
                        <img src={next} alt="" width={"50px"} />
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Carosel;