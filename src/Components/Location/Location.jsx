
// import Bookatable from '../Bookatable/Bookatable';

const Location = () => {
    


    return (
        <div className="w-full">
            <h2 className="text-white text-4xl font-bold pt-10 pr-8 pb-10 pl-[180px]">{`Our Location`}</h2>
            <div className="w-10/12 mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1980.6551965864096!2d-0.1684309!3d51.4458024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605e99236c46b%3A0x808830fc11ed1d7f!2sPizza%20Da%20Valter!5e0!3m2!1sen!2suk!4v1695825923910!5m2!1sen!2suk"
                    className="w-full h-80 border-none"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <div className="flex w-10/12 h-[62px] mx-auto bg-black-200 bg-transparent backdrop-blur-s  text-white font-roboto">
                <p className="ml-2 text-left font-semibold tracking-wide">
                    <span>Address :</span>  United Kingdom.
                </p>
            </div>
        </div>
    );
};

export default Location;
