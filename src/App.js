import React from 'react';
import PropTypes from 'prop-types'
import './App.css';

function VideoThumbnail({ title, preview, badge, badgeBG, message, muted, width, classname }) {
  const ref = React.useRef(null)

  const play = () => {
    ref.current.play()
    ref.current.nextElementSibling.style.opacity = .4
  }
  const pause = () => {
    ref.current.pause()
    ref.current.nextElementSibling.style.opacity = 1
  }

  return (
    <div style={{ width: width }} className={`${classname}`}>
      <div style={{ width: width }} className="video">
        <video
          onMouseLeave={() => pause()}
          onMouseEnter={() => play()}
          ref={ref} src={preview}
          loop
          width={width}
          muted={muted} />
        <div className="badge" style={{ background: badgeBG }}>{badge}</div>
      </div >
      <h4 className="title"> {title}</h4 >
      <span className="views">{message}</span>
    </div >
  )
}

VideoThumbnail.prototype = {
  preview: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  badge: PropTypes.string,
  badgeBg: PropTypes.string,
  muted: PropTypes.bool,
  width: PropTypes.number,
  classname: PropTypes.string
}

VideoThumbnail.defaultProps = {
  preview: `https://media2.giphy.com/media/JrY9JfnL4OnXxnCi4F/giphy480p.mp4`,
  title: `The Invisible Man - Official Trailer [HD]`,
  message: `3.2k Watching Now`,
  badge: `Live`,
  badgeBG: "blue",
  muted: true,
  width: 350,
  classname: 'videoThumbnail'
}

export default VideoThumbnail;
