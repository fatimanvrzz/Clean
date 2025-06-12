import Navbar from '../../components/Navbar/Navbar'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Contact from "../../assets/images/contact.svg";
import Footer from '../../components/Footer/Footer';




const ServicePage = () => {
    return (
        <>
            <div className="flex flex-col items-center w-full ">
                <div className="w-full px-4 sm:px-0">
                    <Navbar />
                </div>


                <div className="w-full max-w-[82rem] px-4 sm:px-0">
                    <ServiceCard />
                </div>

                <div className="w-full max-w-[82rem] mt-10 sm:mt-20 px-4 sm:px-0">
                    <div className="rounded-3xl px-6 py-8 bg-[#EFEFEF] h-auto flex flex-col gap-5">
                        <h3 className="text-[26px] sm:text-[30px] font-medium mb-4 sm:mb-6">
                            Need consulting? We’re here to help.
                        </h3>

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="h-[40px] border-[#B7B7BC] border rounded-xl px-4"
                        />

                        <input
                            type="tel"
                            placeholder="Number"
                            className="h-[40px] border-[#B7B7BC] border rounded-xl px-4"
                        />

                        <textarea
                            placeholder="Write your message.."
                            className="h-[120px] border-[#B7B7BC] border rounded-xl px-4 py-2 resize-none"
                        />

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="flex items-center text-[#0F42FF] border-[#0F42FF] border px-6 py-2 rounded-xl"
                            >
                                Send Message
                                <img
                                    alt="Contact Icon"
                                    src={Contact}
                                    className="ml-2 w-5 h-5 text-[#0F42FF]"
                                />
                            </button>
                        </div>
                    </div>
                </div>

                <Footer/>
            </div>
        </>
    )
}

export default ServicePage
