export default function HeroSection() {
    return (
        <div className="">
            {/* Introduction Self Start */}
            <div className="flex mb-10">
                <div className="w-full self-center px-2">
                    <h1 className="font-sans font-bold text-3xl tracking-widest mb-1">Hello, I&apos;am Dedi,</h1>
                    <h1 className="font-sans font-semibold text-2xl tracking-wider mb-1">Fullstack Developer</h1>
                    <p className="font-sans lg:max-w-2xl font-normal text tracking-wide mb-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi totam unde voluptatem,
                        officia quas? Eveniet tenetur libero officiis, corrupti neque ex nostrum id, voluptates, dolorum sunt odio magnam? Cum?
                    </p>
                </div>
                <div className="hidden lg:flex lg:w-1/2">
                    <h1 className="">ini gambar</h1>
                </div>
            </div>
            {/* Introduction Self End */}

            <div className="px-2">
                <div className="flex flow-row">
                    {/* Button Download Resume Start */}
                    <div className="font-sans container">
                        <button className="bg-linear-to-r from-[#00B4DB] to-[#5B86E5] text-white font-bold py-2 px-4 rounded">Download Resume</button>
                    </div>
                    {/* Button Download Resume End */}

                </div>
            </div>




        </div>
    )
}   