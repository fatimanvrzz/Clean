import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useTranslation } from 'react-i18next';

const BurgerIcon = ({ open }: { open: boolean }) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 group"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-black rounded-sm my-1 transition duration-300 ease-in-out
          ${open ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out
          ${open ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`}
      ></span>
    </button>
  );
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language.toUpperCase() || "EN");

  const handleLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang.toLowerCase());
    setSelectedLanguage(lang.toUpperCase());
    setLanguageMenu(false);
  };

  return (
    <div className="flex items-center cursor-pointer w-full">
      <div className="flex items-center mt-[20px] w-full max-w-[81.25rem] justify-between mx-auto">
        {/* Logo */}
        <div className="flex text-center">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="w-auto max-w-[9.125rem] sm:max-w-[7.5rem] md:max-w-[6.25rem] lg:max-w-[8.125rem]"
            />
          </Link>
        </div>

        {/* Links */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-8 text-lg">
            <li><Link to="/services">
              {t('navbar.servicesMenu')}
            </Link>
            </li>
            <li><Link to="/about-us">{t('navbar.aboutUs')}</Link></li>
            <li><Link to="/blog">{t('navbar.blog')}</Link></li>
            <li><Link to="/contact">{t('navbar.contact')}</Link></li>
          </ul>
        </div>

        {/* Language & Book Service */}
        <div className="flex items-center relative">
          <div className="hidden md:flex gap-6">
            <div
              className="relative flex items-center cursor-pointer"
              onClick={() => setLanguageMenu(!languageMenu)}
              onMouseEnter={() => setLanguageMenu(true)}
              onMouseLeave={() => setLanguageMenu(false)}
            >
              {selectedLanguage} <IoIosArrowDown className="ml-1" />
              {languageMenu && (
                <div className="absolute top-full right-0 bg-white shadow-md rounded-md mt-2 py-2 w-[100px] z-50">
                  <div
                    onClick={() => handleLanguageSelect("EN")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    EN
                  </div>
                  <div
                    onClick={() => handleLanguageSelect("RU")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    RU
                  </div>
                  <div
                    onClick={() => handleLanguageSelect("AZ")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    AZ
                  </div>
                </div>
              )}
            </div>

            <div className="bg-[#0F42FF] rounded-2xl px-5 py-3 text-[1.15rem] text-white">
              <Link to="/book-a-service">{t('navbar.bookService')}</Link>
            </div>
          </div>
        </div>

        {/* Burger (Mobile) */}
        <div className="flex md:hidden">
          <button onClick={() => setMenu(!menu)}>
            <BurgerIcon open={menu} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="absolute top-16 right-4 bg-white shadow-lg p-4 w-64 md:hidden text-lg z-50">
            <ul className="flex flex-col gap-4">
              <li><Link to="/services">{t('services')}</Link></li>
              <li><Link to="/about-us">{t('aboutUs')}</Link></li>
              <li><Link to="/blog">{t('blog')}</Link></li>
              <li><Link to="/contact">{t('contact')}</Link></li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
