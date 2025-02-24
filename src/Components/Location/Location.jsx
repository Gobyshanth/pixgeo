const Location = () => {
    return (
        <div className="w-full md:pb-10 bg-black">
            <h2 className="text-white md:text-4xl text-3xl font-bold font-courier pt-[50px] pb-[50px] px-[40px] md:pl-[140px]">{`Our Location`}</h2>
            <div className="w-10/12 mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.3906576234187!2d79.8603751!3d6.9270782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25930cfc6b8f9%3A0x9f6b3c5c0db8b8d!2sColombo!5e0!3m2!1sen!2slk!4v1640090973912!5m2!1sen!2slk
"
                    className="w-full h-80 border-none filter invert-[90%] brightness-90 contrast-120 px-[10px]"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className="flex w-10/12 h-[62px] mx-auto bg-black-200 bg-transparent backdrop-blur-s text-white font-roboto">
                <p className="ml-3 text-left font-semibold tracking-wide">
                    <span>Address :</span> United Kingdom.
                </p>
            </div>
        </div>
    );
};

export default Location;