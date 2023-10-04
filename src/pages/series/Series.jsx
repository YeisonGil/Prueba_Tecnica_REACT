import './series.css'
import { useEffect, useState } from "react";
import JSON from '../../../sample.json'
import Popular from "../../components/Popular/Popular"

const Series = () => {
  const [series, setSeries] = useState([]);
  const [modal, setModal] = useState(false);
  const [seleccSeries, setSeleccSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    try {
      const entrada = JSON.entries;

      const filtroSeries = entrada.filter((entry) => {
        return entry.programType === "series" && entry.releaseYear >= 2010
      })

      const alfanumerico = filtroSeries.sort((a, b) => {
        return a.title.localeCompare(b.titulo);
      })

      // const results = JSON.slice(0, 20);

      setTimeout(() => {
        setSeries(alfanumerico);
        setLoading(false);
      }, 1000)
    } catch (error) {
      setError(error.message)
    }
  }, [])

  const clickCard = (entry) => {
    setSeleccSeries(entry);
    setModal(true);
  }

  const cerrarModal = () => {
    setModal(null);
  }

  return (
    <div className="general general__Series">
      <Popular title="Series" />
      {
        error ? (
          <h2 className="message__error">Oops, something went wrong</h2>
        ) :
          loading ? (
            <h2 className="message__loading">Loading...</h2>
          ) : (
            <>
              <div className="cards">
                {series.map((entry) => (
                  <div onClick={() => clickCard(entry)} className='card' key={entry.title}>
                    <img className='card__img' src={entry.images["Poster Art"].url} alt="" />
                    <p className='card__p'>{entry.title}</p>
                  </div>
                ))}
                {modal && seleccSeries && (
                  <div className="modal">
                    <h2 className="modal__h2">{seleccSeries.title}</h2>
                    <p className="modal__p">{seleccSeries.description}</p>
                    <p className="modal__p modal__anio">Año {seleccSeries.releaseYear}</p>
                    <img className="modal__img" src={seleccSeries.images["Poster Art"].url} alt="" />
                    <button className="modal__button" onClick={() => cerrarModal()}>Salir</button>
                  </div>
                )}

              </div>
            </>
          )}
    </div>
  )
}

export default Series