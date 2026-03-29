export default function mainLeft() {
    return (
        <>
            <button id="close" className="navigate" onClick={() => s(0)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke-linecap="round" />
                </svg>
            </button>
            <div className="menu">
                <div className="logo">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        {/* <g id="SVGRepo_bgCarrier" stroke-width="0"></g> */}
                        {/* <g id="SVGRepo_tracerCarrier" stroke-linecap="round" ></g> */}
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M20.4086 9.35258C22.5305 10.5065 22.5305 13.4935 20.4086 14.6474L7.59662 21.6145C5.53435 22.736 3 21.2763 3 18.9671L3 5.0329C3 2.72368 5.53435 1.26402 7.59661 2.38548L20.4086 9.35258Z">
                            </path>
                            <path d="m6.5 6v12" stroke="black"></path>
                            <path d="m9 10v4" stroke="black"></path>
                            <path d="m11.5 7.5v9" stroke="black"></path>
                            <path d="m14 11v2" stroke="black"></path>
                            <path d="m16.5 8.5v6.814" stroke="black">
                            </path>
                        </g>
                    </svg>
                    playIT
                </div>
                <div className="home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none">
                        <path
                            d="M8.99944 22L8.74881 18.4911C8.61406 16.6046 10.1082 15 11.9994 15C13.8907 15 15.3848 16.6046 15.2501 18.4911L14.9994 22"
                        />
                        <path
                            d="M2.35151 13.2135C1.99849 10.9162 1.82198 9.76763 2.25629 8.74938C2.69059 7.73112 3.65415 7.03443 5.58126 5.64106L7.02111 4.6C9.41841 2.86667 10.6171 2 12.0001 2C13.3832 2 14.5818 2.86667 16.9791 4.6L18.419 5.64106C20.3461 7.03443 21.3097 7.73112 21.744 8.74938C22.1783 9.76763 22.0018 10.9162 21.6487 13.2135L21.3477 15.1724C20.8473 18.4289 20.597 20.0572 19.4291 21.0286C18.2612 22 16.5538 22 13.1389 22H10.8613C7.44646 22 5.73903 22 4.57112 21.0286C3.40321 20.0572 3.15299 18.4289 2.65255 15.1724L2.35151 13.2135Z"
                        />
                    </svg>
                    Home
                </div>
                <div className="search">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none">
                        <path d="M17.5 17.5L22 22" stroke-linecap="round"
                        />
                        <path
                            d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                        />
                    </svg>
                    Search
                </div>
            </div>
            <div className="library-container">
                <div id="lib-header">
                    <div className="add">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24">
                            <path
                                d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"
                                fill="currentColor"></path>
                        </svg>
                        Your Library
                    </div>
                    <div className="add" onclick="a()">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                            fill="none">
                            <path d="M12 4V20M20 12H4" stroke-width="2.5" stroke-linecap="round"
                            />
                        </svg>
                    </div>
                </div>
                <div id="library">
                </div>
                <div id="footer">
                    <div><a href="">Created by " KAAKU "</a></div>
                    <div><a href="">GitHub</a></div>
                    <div><a href="" target="_blank">Lin</a></div>
                    <div><a href="https://open.spotify.com/" target="_blank">inspired by Spotify</a></div>
                </div>
            </div>
        </>
    )
}