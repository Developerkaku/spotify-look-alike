// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import MainLeft from './components/mainLeft'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MainLeft/>
      {/* <div class="main-left">
        
      </div> */}
      <div class="main-right">
        <div class="login-bar">
          <div class="navigate-btns">
            <button id="show" class="navigate" onclick="s(1);">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                <path d="M4 5L14 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 19L20 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button id="go-back" class="navigate" title="Go Back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button id="go-fwd" class="navigate" title="Go Forward">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ffffff" fill="none">
                <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="login-btns">
            <button id="login" class="sign-login">Log in</button>
            <button id="sign-up" class="sign-login"> Sign up </button>
          </div>
        </div>
        <div class="songs">
          <div class="container">
            <div class="songs-header">
              <div id="playlistImage">
                <img src="songs.jpg" alt="" />
              </div>
              <div id="title">
                <h1>No Copyright Songs (NCS)</h1>
                <div>
                  <span>A</span>
                  <span>8 Songs, 28 min 52 sec</span>
                </div>
              </div>
            </div>
            <div class="songs-container">
              <div id="play-list-options">
                <button title="play NCS" id="play-list-play-btn">
                  <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff">
                    <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="1.5" />
                    <path d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z" fill="#000" />
                  </svg>
                  <svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#fff">
                    <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="1.5" />
                    <rect x="9" y="8" width="2" height="8" fill="#000" rx=".5" />
                    <rect x="13" y="8" width="2" height="8" fill="#000" rx=".5" />
                  </svg>
                </button>
              </div>
              <div id="songsInfo-container">
                <div id="songsInfo">
                  <div class="numDiv inside-txt">#</div>
                  <div class="title inside-txt">Title</div>
                </div>
              </div>
              {/*<!--all the songs-->
                        <!-- test song-card -->*/}
              {/*<!-- <div class="song-card">
                            <div class="numDiv inside-txt">69</div>
                            <div class="cover-img">
                                <img src="songs/Feel Good@Syn Cole/img.jpg" alt="">
                            </div>
                            <div class="title">
                                <span>Cradles</span>
                                <span class="inside-txt">
                                    <a href="">Sub Urban, QwerTy, ioqwue, iopoi</a>
                                </span>
                            </div>
                        </div> -->*/}
            </div>
          </div>
        </div>
        <div class="player">
          <div class="player-left">
            <img src="" alt="" id="player-img" />
          </div>
          <div class="player-right">
            <div class="song-name">...</div>
            <div class="seek-bar">
              <div id="seek-bar-progress"></div>
              <div class="seek-circle"></div>
            </div>
            <div class="time">
              <div id="curr-time">00:00</div>
              <div class="song-navigation">
                <button id="previous">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    fill="none">
                    <path
                      d="M8.06492 12.6258C8.31931 13.8374 9.67295 14.7077 12.3802 16.4481C15.3247 18.3411 16.797 19.2876 17.9895 18.9229C18.3934 18.7994 18.7654 18.5823 19.0777 18.2876C20 17.4178 20 15.6118 20 12C20 8.38816 20 6.58224 19.0777 5.71235C18.7654 5.41773 18.3934 5.20057 17.9895 5.07707C16.797 4.71243 15.3247 5.6589 12.3802 7.55186C9.67295 9.29233 8.31931 10.1626 8.06492 11.3742C7.97836 11.7865 7.97836 12.2135 8.06492 12.6258Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M4 4L4 20" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" />
                  </svg>
                </button>
                <button id="play-pause" data-song-state="playing">
                  <svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                    <path d="M18.8906 12.846C18.5371 14.189 16.8667 15.138 13.5257 17.0361C10.296 18.8709 8.6812 19.7884 7.37983 19.4196C6.8418 19.2671 6.35159 18.9776 5.95624 18.5787C5 17.6139 5 15.7426 5 12C5 8.2574 5 6.3861 5.95624 5.42132C6.35159 5.02245 6.8418 4.73288 7.37983 4.58042C8.6812 4.21165 10.296 5.12907 13.5257 6.96393C16.8667 8.86197 18.5371 9.811 18.8906 11.154C19.0365 11.7084 19.0365 12.2916 18.8906 12.846Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  </svg>

                  <svg class="pause" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                    height="24" color="#000000" fill="none">
                    <path
                      d="M4 7C4 5.58579 4 4.87868 4.43934 4.43934C4.87868 4 5.58579 4 7 4C8.41421 4 9.12132 4 9.56066 4.43934C10 4.87868 10 5.58579 10 7V17C10 18.4142 10 19.1213 9.56066 19.5607C9.12132 20 8.41421 20 7 20C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V7Z"
                      stroke="currentColor" stroke-width="1.5" />
                    <path
                      d="M14 7C14 5.58579 14 4.87868 14.4393 4.43934C14.8787 4 15.5858 4 17 4C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V17C20 18.4142 20 19.1213 19.5607 19.5607C19.1213 20 18.4142 20 17 20C15.5858 20 14.8787 20 14.4393 19.5607C14 19.1213 14 18.4142 14 17V7Z"
                      stroke="currentColor" stroke-width="1.5" />
                  </svg>
                </button>
                <button id="next">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                    color="#000000" fill="none">
                    <path
                      d="M15.9351 12.6258C15.6807 13.8374 14.327 14.7077 11.6198 16.4481C8.67528 18.3411 7.20303 19.2876 6.01052 18.9229C5.60662 18.7994 5.23463 18.5823 4.92227 18.2876C4 17.4178 4 15.6118 4 12C4 8.38816 4 6.58224 4.92227 5.71235C5.23463 5.41773 5.60662 5.20057 6.01052 5.07707C7.20304 4.71243 8.67528 5.6589 11.6198 7.55186C14.327 9.29233 15.6807 10.1626 15.9351 11.3742C16.0216 11.7865 16.0216 12.2135 15.9351 12.6258Z"
                      stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M20 5V20" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" />
                  </svg>
                </button>
              </div>
              <div id="duration">00:00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
