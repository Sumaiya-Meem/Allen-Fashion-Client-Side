import bannerImg from "../../assets/banner.avif"

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <div data-aos="fade-down" data-aos-duration="1000">
                            <h1 className="mb-5 text-5xl font-bold">Elevate Your Style, Discover the Latest Trends</h1>
                            <p className="mb-5">Experience the essence of fashion. Unveil a collection that defines your individuality. Discover Allen Fashion – Where Style Meets You.</p>

                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000">
                            <button className="btn border-2 border-[#69a6ce] text-lg  text-[#347dad] rounded-lg p-2 font-semibold capitalize">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;