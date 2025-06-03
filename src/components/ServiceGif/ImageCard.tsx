import { useState, useRef, useEffect } from "react";

interface ImageCardProps {
  staticSrc: string;
  gifSrc: string; 
  title: string;
  description: string;
  buttonText: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ staticSrc, gifSrc, title, description, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play().catch(() => {});
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovered]);

  return (
    <div
      className="relative w-full max-w-full lg:max-w-[30rem] h-[29.875rem] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video - hover zamanı görünür */}
      <video
        ref={videoRef}
        src={gifSrc}
        muted
        loop
        playsInline
        className={`absolute rounded-2xl inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      />

      {/* Statik şəkil */}
      <img
        src={staticSrc}
        alt="static"
        className={`w-full h-full object-cover transition-opacity duration-500 rounded-2xl ${isHovered ? "opacity-0" : "opacity-100"}`}
      />

      <button className="absolute top-3 right-3 text-[#F8F8FF] px-3 py-2 rounded-xl text-[0.875rem] text-xs border-[#F8F8FF] border-1 z-20">
        {buttonText}
      </button>

      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent rounded-2xl flex flex-col justify-end p-4 z-20">
        <h3 className="text-[#F8F8FF] text-left text-lg w-[12.9375rem] font-sans leading-5">{title}</h3>
        <p className="text-[#B7B7BC] text-sm text-left opacity-70 w-[20.875rem] mt-[0.6875rem] font-sans">{description}</p>
        
      </div>
    </div>
  );
};

export default ImageCard;
