import { useState } from 'preact/hooks';
import videoImage from '@images/video.png'

const VideoPlayer = () => {

  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleClick = () => {
    if (isImageVisible) {
      setIsImageVisible(false);
    }
  };


  return (
    <div class='k-section m-0 aspect-ratio-custom'>
      {isImageVisible ?
        <img
          {...videoImage}
          src={`/.netlify/images?url=${videoImage.src}`}
          class="w-full h-full object-cover"
          onClick={handleClick}
          alt={`Imagen para activar el video`}
        />
      :
        <iframe
          class="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/5OZAqjIbP_U?si=5Tuki9cImzOtchDx&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      }
    </div>

  );
};

export default VideoPlayer;
