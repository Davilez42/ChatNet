import React, { useState } from 'react'
import "../styles/seeUser/seeUser.css"
import Dating from "./chats/Dating"
import Education from "./chats/Education"
import Games from "./chats/Games"
import Movies from "./chats/Movies"
import Music from "./chats/Music"
import News from "./chats/News"
import Sports from "./chats/Sports"
import Support from "./chats/Support"
import Technology from "./chats/Technology"
import Travel from "./chats/Travel"

function SeeUser({ inputValue }) {

  const [dating, setDating] = useState("chat-room-none")
  const [Buttondating, setButtonDating] = useState(false)
  const [education, setEducation] = useState("chat-room-none")
  const [Buttoneducation, setButtonEducation] = useState(false)
  const [games, setGames] = useState("chat-room-none")
  const [Buttongames, setButtonGames] = useState(false)
  const [movies, setMovies] = useState("chat-room-none")
  const [Buttonmovies, setButtonMovies] = useState(false)
  const [music, setMusic] = useState("chat-room-none")
  const [Buttonmusic, setButtonMusic] = useState(false)
  const [news, setNews] = useState("chat-room-none")
  const [Buttonnews, setButtonNews] = useState(false)
  const [sports, setSports] = useState("chat-room-none")
  const [Buttonsports, setButtonSports] = useState(false)
  const [support, setSupport] = useState("chat-room-none")
  const [Buttonsupport, setButtonSupport] = useState(false)
  const [technology, setTechnology] = useState("chat-room-none")
  const [Buttontechnology, setButtonTechnology] = useState(false)
  const [travel, setTravel] = useState("chat-room-none")
  const [Buttontravel, setButtonTravel] = useState(false)

  const HandleClickDating = () => {
    if (dating === "chat-room-none") {
      setDating("e")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setDating("chat-room-none")
    }
    
    setButtonDating(true)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickEducation = () => {
    if (education === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("e")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setEducation("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(true)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickGames = () => {
    if (games === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("e")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setGames("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(true)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickMovies = () => {
    if (movies === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("e")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setMovies("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(true)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickMusic = () => {
    if (music === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("e")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setMusic("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(true)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickNews = () => {
    if (news === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("e")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setNews("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(true)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickSports = () => {
    if (sports === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("e")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setSports("chat-room-none")
    }
    
    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(true)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickSupport = () => {
    if (support === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("e")
      setTechnology("chat-room-none")
      setTravel("chat-room-none")
    } else {
      setSupport("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(true)
    setButtonTechnology(false)
    setButtonTravel(false)

  }

  const HandleClickTechnology = () => {
    if (technology === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("e")
      setTravel("chat-room-none")
    } else {
      setTechnology("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(true)
    setButtonTravel(false)

  }

  const HandleClickTravel = () => {
    if (travel === "chat-room-none") {
      setDating("chat-room-none")
      setEducation("chat-room-none")
      setGames("chat-room-none")
      setMovies("chat-room-none")
      setMusic("chat-room-none")
      setNews("chat-room-none")
      setSports("chat-room-none")
      setSupport("chat-room-none")
      setTechnology("chat-room-none")
      setTravel("e")
    } else {
      setTravel("chat-room-none")
    }

    setButtonDating(false)
    setButtonEducation(false)
    setButtonGames(false)
    setButtonMovies(false)
    setButtonMusic(false)
    setButtonNews(false)
    setButtonSports(false)
    setButtonSupport(false)
    setButtonTechnology(false)
    setButtonTravel(true)

  }

  return (
    <div className='body-SeeUser'>
      <section className='rooms-user'>
        <h1 className='rooms-user-name'>{ inputValue }</h1>

        <button onClick={HandleClickDating} className="button-rooms-users" disabled={Buttondating}>
          Citas
        </button>

        <button onClick={HandleClickGames} className="button-rooms-users" disabled={Buttongames}>
          Juegos
        </button>

        <button onClick={HandleClickMovies} className="button-rooms-users" disabled={Buttonmovies}>
          Peliculas
        </button>

        <button onClick={HandleClickMusic} className="button-rooms-users" disabled={Buttonmusic}>
          Musica
        </button>

        <button onClick={HandleClickSports} className="button-rooms-users" disabled={Buttonsports}>
          Deportes
        </button>

        <button onClick={HandleClickTechnology} className="button-rooms-users" disabled={Buttontechnology}>
          Tecnologia
        </button>

        <button onClick={HandleClickTravel} className="button-rooms-users" disabled={Buttontravel}>
          Viajes
        </button>

        <button onClick={HandleClickEducation} className="button-rooms-users" disabled={Buttoneducation}>
          Educación
        </button>

        <button onClick={HandleClickNews} className="button-rooms-users" disabled={Buttonnews}>
          Noticias y Actualidad
        </button>

        <button onClick={HandleClickSupport} className="button-rooms-users" disabled={Buttonsupport}>
          Grupos de apoyo
        </button>

      </section>

      <section className='chats-user'>
        <div className={dating}><Dating/></div>
        <div className={education}><Education /></div>
        <div className={games}><Games /></div>
        <div className={movies}c><Movies /></div>
        <div className={music}><Music /></div>
        <div className={news}><News /></div>
        <div className={sports}><Sports /></div>
        <div className={support}><Support /></div>
        <div className={technology}><Technology /></div>
        <div className={travel}><Travel /></div>
      </section>
    </div>
  )
}

export default SeeUser
