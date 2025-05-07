import Abb from "../../assets/images/abb-logo.svg";
import Strabag from "../../assets/images/strabag-logo.svg";
import Aikon from "../../assets/images/aikon-logo.svg";
import Crystal from "../../assets/images/crystal-hall-logo.svg";
import Pasha from "../../assets/images/pasha-bank-log0.svg";
import Construction from "../../assets/images/pasha-consturction.svg";
import Marriott from "../../assets/images/marriott-logo.svg";

const Partners = () => {
  return (
    <div className="w-[81.25rem] justify-between mt-[4.0625rem] mb-[5.125rem]">
      <div className="partners-container">
        <div className="logos-wrapper">
          <img src={Abb} alt="abb logo" className="logo" />
          <img src={Strabag} alt="strabag logo" className="logo" />
          <img src={Aikon} alt="aikon logo" className="logo" />
          <img src={Crystal} alt="crystal hall logo" className="logo" />
          <img src={Pasha} alt="pasha bank logo" className="logo" />
          <img src={Construction} alt="pasha construction logo" className="logo" />
          <img src={Marriott} alt="marriott logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Partners;