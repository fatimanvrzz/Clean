import { BsArrowRight } from "react-icons/bs";

const Quote = () => {
    return (
        <div className="mb-4 lg:mb-0 lg:ml-auto">
            <div className="flex justify-between items-center w-[17.25rem] h-[3.125rem] bg-white border-none rounded-2xl px-4">
                <p>Get a Quote</p>
                <div className="flex justify-center items-center w-[2rem] h-[2rem] bg-[#0F42FF] rounded-xl text-white">
                    <BsArrowRight />
                </div>
            </div>
        </div>
    );
}

export default Quote;