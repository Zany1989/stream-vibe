import "./Hero.scss"

const Hero = () => {
  
  const playButtonTitle = "Play Video"
  
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__pano">
        <div className="hero__pano-inner container">
          <button
            className="hero__play-button"
            type="button"
            aria-label={playButtonTitle}
            title={playButtonTitle}
          >
            <img
              className="hero__play-button-image"
              alt=""
              src="/play.svg"
              width={470}
              height={470}
            />
          </button>
        </div>
      </div>
      <div className="hero__body">
        <div className="hero__body-inner container">
        
        </div>
      </div>
    </section>
  )

}

export default Hero