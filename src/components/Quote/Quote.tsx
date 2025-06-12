import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Quote = ({ className = "" }) => {
    const { t } = useTranslation('quote'); 
    
  return (
    <Link to="/book-a-service" className={`${className}`}>
      <div className="flex justify-between items-center 
          w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[17.25rem] 
          h-[3rem] sm:h-[3.125rem] 
          bg-white border-none rounded-2xl px-4 shadow-md 
          text-xs sm:text-sm md:text-base">

        <p className="whitespace-nowrap">{t('getAQuote')}</p>

        <div className="flex justify-center items-center 
            w-[1.5rem] h-[1.5rem] sm:w-[2rem] sm:h-[2rem] 
            bg-[#0F42FF] rounded-xl text-white">
          <BsArrowRight className="text-xs sm:text-sm md:text-base" />
        </div>
      </div>
    </Link>
  );
};

export default Quote;
