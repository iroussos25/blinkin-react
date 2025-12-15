import Textbox from '../components/Textbox'
import Searchbox from '../components/Searchbox'


const Home = () => {
  return (
    <div className='background'>
    <div className="search__container">
        
        <Textbox />
      
      
        <div className="searchbox">

        <Searchbox />
        </div>
      
    </div>
      </div>
  )
}

export default Home
