import Logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import whatsup from "../../assets/images/whatsup.svg";
import Quote from "../Quote/Quote";

const Footer = () => {
  return (
    <footer className="w-full bg-[#EFEFEF] py-10 flex flex-col items-center mt-[6.875rem]">
      <div className="mt-[3.5rem] flex flex-col lg:flex-row justify-between items-center lg:items-start w-full max-w-[81.25rem]">

        {/* Logo and Icons */}
        <div className="flex flex-col items-center lg:items-start lg:mb-0">
          <img src={Logo} alt="CleanAz Logo" className="w-[9.125rem] h-[1.9375rem] mb-[24px]" />

          {/* Quote and Social Media Icons */}
          <Quote />
          <div className="flex flex-col items-center lg:items-start mt-[24px]">
            <div className="flex gap-[0.75rem]">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-none border-[#C5C5CC] border rounded-full">
                <img src={instagram} alt="Instagram" className="w-[1.75rem] h-[1.75rem]" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-none border-[#C5C5CC] border rounded-full">
                <img src={facebook} alt="Facebook" className="w-[1.75rem] h-[1.75rem]" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-none border-[#C5C5CC] border rounded-full">
                <img src={whatsup} alt="WhatsApp" className="w-[1.75rem] h-[1.75rem]" />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 text-center gap-10 mt-10 lg:text-left">
          <div>
            <h3 className="font-normal mb-2 text-[#000000] text-[1.375rem]">Company</h3>
            <ul className="mt-[1.25rem]">
              <li className="mt-[0.5rem]"><a href="#" className="text-[#474749] text-[1.125rem]">Services</a></li>
              <li className="mt-[0.5rem]"><a href="#" className="text-[#474749] text-[1.125rem]">About Us</a></li>
              <li className="mt-[0.5rem]"><a href="#" className="text-[#474749] text-[1.125rem]">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-normal mb-2 text-[#000000] text-[1.375rem]">Services</h3>
            <ul className="text-[#474749] mt-[1.25rem]">
              <li className="mt-[0.5rem]"><a href="#" className="text-[1.125rem]">Home Cleaning</a></li>
              <li className="mt-[0.5rem]"><a href="#" className="text-[1.125rem]">Commercial</a></li>
              <li className="mt-[0.5rem]"><a href="#" className="text-[1.125rem]">Specialized</a></li>
              <li className="mt-[0.5rem]"><a href="#" className="text-[1.125rem]">Post-Renovation</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-normal mb-2 text-[#000000] text-[1.375rem]">Contact</h3>
            <p className="text-[#474749] text-[1.125rem] mt-[1.25rem]">• +994 77 332 62 00</p>
            <p className="text-[#474749] text-[1.125rem] mt-[0.5rem]">• Nizami r. Özbakistan k.24</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full max-w-[81.25rem] border-t border-gray-300 pt-4 text-center text-[1rem] lg:text-left mt-[5.25rem] px-4 text-[#6A6161]">
        <p>All rights reserved &copy; Clean.az | Designed by Narcis</p>
      </div>
    </footer>
  );
};

export default Footer;