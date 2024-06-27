import { useState } from 'preact/hooks';
import videoImage from '@images/imagen_video.png'

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
        <div class="relative w-full h-full cursor-pointer" onClick={handleClick}>
          <div class='absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4' >
            <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.5 0C19.4698 0 0 19.4698 0 43.5C0 67.5302 19.4698 87 43.5 87C67.5302 87 87 67.5302 87 43.5C87 19.4698 67.5302 0 43.5 0ZM63.7942 47.7097L32.9232 65.4254C30.1518 66.9689 26.6613 64.9869 26.6613 61.7419V25.2581C26.6613 22.0306 30.1343 20.031 32.9232 21.5746L63.7942 40.3427C66.6708 41.9565 66.6708 46.1135 63.7942 47.7097Z" fill="#C9EEF2" />
            </svg>
          </div>
          <img
            {...videoImage}
            src={`/.netlify/images?url=${videoImage.src}`}
            class="w-full h-full object-cover"
            alt={`Imagen para activar el video`}
          />
        </div>
        :
        <iframe
          class="w-full h-full"
          src="https://www.youtube-nocookie.com/embed/5OZAqjIbP_U?si=5Tuki9cImzOtchDx&amp;controls=0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      }
    </div>

  );
};

export default VideoPlayer;
