import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Contact from "../../assets/images/contact.svg";

const ContactPage = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!fullName || !phoneNumber || !message) {
      alert("Zəhmət olmasa, bütün xanaları doldurun.");
      return;
    }

    const smsNumber = phoneNumber;
    const smsBody = `Ad Soyad: ${fullName}\nMesaj: ${message}`;
    const smsUrl = `sms:${smsNumber}?body=${encodeURIComponent(smsBody)}`;
    window.location.href = smsUrl;
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full px-4 sm:px-0">
        <Navbar />
      </div>

      <div className="w-full max-w-[1300px] mx-auto flex flex-col sm:flex-row justify-between mt-14 px-4 sm:px-0">
        {/* Sol hissə */}
        <div className="w-full sm:w-1/2 mb-10 sm:mb-0">
          {/* Title */}
          <div className="w-full flex flex-col items-start text-left">
            <p className="w-full text-[#0A0A0A] text-[2rem] xs:text-[1.75rem] sm:text-[3rem] font-medium leading-[1.15]">
              Contact <span className="text-[#0F42FF]">Us</span>
            </p>
          </div>

          {/* Ünvan və İş saatı */}
          <div className="w-full sm:w-[504px] h-auto sm:h-[166px] mt-8 flex flex-col items-center sm:flex-row justify-between gap-10 sm:gap-0">
            <div>
              <div className="text-black">
                <p className="text-gray-500 text-center sm:text-left mt-10 sm:mt-0">Ünvan</p>
                <p className="underline underline-offset-4 text-gray-900 mt-3">
                  Nizami r. Özbəkistan k.24
                </p>
              </div>
              <div className="text-black mt-10 ">
                <p className="text-gray-500 text-center sm:text-left">İş saatı</p>
                <p className="underline underline-offset-4 text-gray-900 mt-3">
                  9:00-20:00 (7 days a week)
                </p>
              </div>
            </div>

            <div>
              <div className="text-black">
                <p className="text-gray-500 text-center sm:text-left">E-poçt</p>
                <p className="underline underline-offset-4 text-gray-900 mt-3">
                  clean.az@gmail.com
                </p>
              </div> 
              <div className="text-black mt-10 mb-10 sm:mb-0">
                <p className="text-gray-500 text-center sm:text-left">Telefon</p>
                <p className="underline underline-offset-4 text-gray-900 mt-3">
                  +994 77 332 62 00
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full sm:w-[627px] h-[243px] mt-8 rounded-3xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.678021690926!2d49.8520773150997!3d40.37541977936895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d1e67b1db55%3A0xb0b5a6f151edfe3a!2sNizami%20K%C3%BC%C3%A7%C9%99si%2024%2C%20Baki!5e0!3m2!1sen!2saz!4v1686765235925!5m2!1sen!2saz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>
        </div>

        {/* Sağ hissə - form */}
        <div className="w-full sm:w-1/2 mt-10 sm:mt-20 px-4 sm:px-0">
          <div className="rounded-3xl px-6 py-8 bg-[#EFEFEF] h-auto flex flex-col gap-5">
            <h3 className="text-[26px] sm:text-[30px] font-medium mb-4 sm:mb-6">
              Have Questions? We're Here to Help
            </h3>

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="h-[40px] border-[#B7B7BC] border rounded-xl px-4"
            />

            <input
              type="tel"
              placeholder="Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="h-[40px] border-[#B7B7BC] border rounded-xl px-4"
            />

            <textarea
              placeholder="Write your message.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-[120px] border-[#B7B7BC] border rounded-xl px-4 py-2 resize-none"
            />

            <div className="flex justify-end">
              <button
                onClick={handleSend}
                type="button"
                className="flex items-center text-[#0F42FF] border-[#0F42FF] border px-6 py-2 rounded-xl"
              >
                Send Message
                <img
                  src={Contact}
                  alt="Contact Icon"
                  className="ml-2 w-5 h-5 text-[#0F42FF]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
