import videouz from "../video/mento-uz.mp4";
/*export default function Video(props) {
  const {  } = props;
  return (
    <div className="video">
      <div className="video-list">
        <video src={videouz}></video>
        <i className="material-icons video-close" onClick={handleShowVideo}>
          close
        </i>
      </div>
    </div>
  );
}
 */
import Plyr from 'plyr';
import { string } from 'prop-types';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
const StyledElement = styled.div`
 & * {
  box-sizing: border-box;
 }
 & .plyr {
  border-radius: 16px !important;
  overflow: hidden !important;
  & .plyr__controls {
   display: flex;
   justify-content: flex-end;
   padding: 12px 12px 12px 12px;
   background: transparent;
   & .plyr__controls__item {
    margin: 0;
    padding: 7px;
    background-color: #5762f7;
   }
  }
  & .plyr__poster {
   background-size: cover;
  }
 }
`;
export default function Video  ({ source, poster  , handleShowVideo})  {
 const ref = useRef(null);
 const player = useRef(null);
 useEffect(() => {
  const defaultOptions = {
   controls: ['play-large', 'fullscreen' ],
   ratio: '16:9',
   autoplay: true,
   debug: true,
   volume: 0,
   muted: true
  };
  player.current = new Plyr(ref.current, defaultOptions);
 }, [source]);
 return (
  <div className="video">
  <div className="video-list">
    <StyledElement>
   <video
    controls
    crossOrigin='true'
    playsInline
    preload='none'
    poster={poster}
    ref={ref}
    src={videouz}
    allowfullscreen
    allowtransparency
   />
  </StyledElement>
    <i className="material-icons video-close" onClick={handleShowVideo}>
      close
    </i>
  </div>
</div>
 
 );
};
Video.defaultProps = {
 source: '',
 poster: '',
};
Video.propTypes = {
 source: string,
 poster: string,
};
