import Popular from "../../components/Popular/Popular"
import { Link } from "react-router-dom"
import './home.css'
import img from '../../assets/placeholder.png'

function Home() {
  return (
    <div className="Home__page">
      <Popular title="Homepage" />

      <div className="links">
        <Link to="/series" className="card__series">
          <img src={img} alt="" />
          <h2 className="titless title__series">Series</h2>
        </Link>
        <Link to="/movies" className="card__movies">
          <img src={img} alt="" />
          <h2 className="titless title__movies">Movies</h2>
        </Link>
      </div>
    </div>
  )
}

export default Home