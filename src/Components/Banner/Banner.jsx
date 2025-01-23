import bannerImg from '../../assets/book-banner.png'
const Banner = () => {
    return (
        <div className='flex justify-between items-center bg-[#1313130D] rounded-3xl py-12 px-20'>
            <div>
                <h1 className="text-5xl leading-relaxed font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>
                <button className="bg-[#23BE0A] text-white py-2 text-xl px-4 rounded-lg">View The List</button>
            </div>
            <div>
                <img src={bannerImg} alt="banner-img" />
            </div>
        </div>
    );
};

export default Banner;