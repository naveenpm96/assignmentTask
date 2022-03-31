
import arrows from './project_images/arrows.png'
import './samllnavbar.css'

const Beadcumb = () => {
  return (
    <div>
      <div className="nav">
        <p>Home</p>
        <img className='arrow' src={arrows} alt="" width={6} height={8} />
        <p>Bakery</p>
        <img className='arrow' src={arrows} alt="" width={6} height={8} />
        <p>Organic Bread</p>
      </div>
    </div>
  );
}

export default Beadcumb;