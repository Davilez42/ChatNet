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

  const [dating, setDating] = useState("chat-room-Dating")
  const [education, setEducation] = useState("chat-room-Education")
  const [games, setGames] = useState("chat-room-Games")
  const [movies, setMovies] = useState("chat-room-Movies")
  const [music, setMusic] = useState("chat-room-Music")
  const [news, setNews] = useState("chat-room-News")
  const [sports, setSports] = useState("chat-room-Sports")
  const [support, setSupport] = useState("chat-room-Support")
  const [technology, setTechnology] = useState("chat-room-Technology")
  const [travel, setTravel] = useState("chat-room-Travel")

  const HandleClickDating = () => {
    if (dating === "chat-room-Dating") {
      setDating("e")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setDating("chat-room-Dating")
    }
  }

  const HandleClickEducation = () => {
    if (education === "chat-room-Education") {
      setDating("chat-room-Dating")
      setEducation("e")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setEducation("chat-room-Education")
    }
  }

  const HandleClickGames = () => {
    if (games === "chat-room-Games") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("e")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setGames("chat-room-Games")
    }
  }

  const HandleClickMovies = () => {
    if (movies === "chat-room-Movies") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("e")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setMovies("chat-room-Movies")
    }
  }

  const HandleClickMusic = () => {
    if (music === "chat-room-Music") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("e")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setMusic("chat-room-Music")
    }
  }

  const HandleClickNews = () => {
    if (news === "chat-room-News") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("e")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setNews("chat-room-News")
    }
  }

  const HandleClickSports = () => {
    if (sports === "chat-room-Sports") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("e")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setSports("chat-room-Sports")
    }
  }

  const HandleClickSupport = () => {
    if (support === "chat-room-Support") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("e")
      setTechnology("chat-room-Technology")
      setTravel("chat-room-Travel")
    } else {
      setSupport("chat-room-Support")
    }
  }

  const HandleClickTechnology = () => {
    if (technology === "chat-room-Technology") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("e")
      setTravel("chat-room-Travel")
    } else {
      setTechnology("chat-room-Technology")
    }
  }

  const HandleClickTravel = () => {
    if (travel === "chat-room-Travel") {
      setDating("chat-room-Dating")
      setEducation("chat-room-Education")
      setGames("chat-room-Games")
      setMovies("chat-room-Movies")
      setMusic("chat-room-Music")
      setNews("chat-room-News")
      setSports("chat-room-Sports")
      setSupport("chat-room-Support")
      setTechnology("chat-room-Technology")
      setTravel("e")
    } else {
      setTravel("chat-room-Travel")
    }
  }

  return (
    <div className='body-SeeUser'>
      <section className='rooms-user'>
        <h1 className='rooms-user-name'>{ inputValue }</h1>

        <button onClick={HandleClickDating} className='button-rooms-users'>
          Citas
        </button>

        <button onClick={HandleClickGames} className='button-rooms-users'>
          Juegos
        </button>

        <button onClick={HandleClickMovies} className='button-rooms-users'>
          Peliculas
        </button>

        <button onClick={HandleClickMusic} className='button-rooms-users'>
          Musica
        </button>

        <button onClick={HandleClickSports} className='button-rooms-users'>
          Deportes
        </button>

        <button onClick={HandleClickTechnology} className='button-rooms-users'>
          Tecnologia
        </button>

        <button onClick={HandleClickTravel} className='button-rooms-users'>
          Viajes
        </button>

        <button onClick={HandleClickEducation} className='button-rooms-users'>
          Educación
        </button>

        <button onClick={HandleClickNews} className='button-rooms-users'>
          Noticias y Actualidad
        </button>

        <button onClick={HandleClickSupport} className='button-rooms-users'>
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
