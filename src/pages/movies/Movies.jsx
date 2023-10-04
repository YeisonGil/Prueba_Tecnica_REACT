import './movies.css'
import { useEffect, useState } from "react";
import JSON from '../../../sample.json'
import Popular from "../../components/Popular/Popular"

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [modal, setModal] = useState(false);
  const [seleccMovies, setSeleccMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    try {
      const entrada = JSON.entries;

      const filtroMovies = entrada.filter((entry) => {
        return entry.programType === "movie" && entry.releaseYear >= 2010
      })

      const alfanumerico = filtroMovies.sort((a, b) => {
        return a.title.localeCompare(b.titulo);
      })

      // const results = JSON.slice(0, 20);

      setTimeout(() => {
        setMovies(alfanumerico);
        setLoading(false);
      }, 1000)
    } catch (error) {
      setError(error.message)
    }
  }, [])

  const clickCard = (entry) => {
    setSeleccMovies(entry);
    setModal(true);
  }

  const cerrarModal = () => {
    setModal(null);
  }

  return (
    <div className="general general__movies">
      <Popular title="Movies" />
      {
        error ? (
          <h2 className="message__error">Oops, something went wrong</h2>
        ) :
          loading ? (
            <h2 className="message__loading">Loading...</h2>
          ) : (
            <>
              <div className="cards">
                {movies.map((entry) => (
                  <div onClick={() => clickCard(entry)} className='card' key={entry.title}>
                    <img className='card__img' src={entry.images["Poster Art"].url} alt="" />
                    <p className='card__p'>{entry.title}</p>
                  </div>
                ))}
                {modal && seleccMovies && (
                  <div className="modal">
                    <h2 className="modal__h2">{seleccMovies.title}</h2>
                    <p className="modal__p">{seleccMovies.description}</p>
                    <p className="modal__p">{seleccMovies.releaseYear}</p>
                    <img className="modal__img" src={seleccMovies.images["Poster Art"].url} alt="" />
                    <button className="modal__button" onClick={() => cerrarModal}>Salir</button>
                  </div>
                )}

              </div>
            </>
          )}
    </div>
  )
}

export default Movies;