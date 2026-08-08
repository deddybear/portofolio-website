import dayjs from "dayjs";
import IsLeapYear from "dayjs/plugin/isLeapYear";
import 'dayjs/locale/id';

export default function HeroSection() {

    dayjs.extend(IsLeapYear)
    dayjs.locale('id')

    const gapYearExperience = () => {
        const yearEnd: number = Number(dayjs().format("YYYY"))
        const yearStart: number = 2020
        return yearEnd - yearStart;
    }

    const projectFinish = () => {
        return 10;
    }

    return (
        <div>
            {/* Introduction Self Start */}
            <div className="mb-10">
                <div className="lg:flex">
                    <div className="w-full self-center px-2 text-center lg:text-justify">
                        <h1 className="font-bold text-3xl tracking-wide mb-2 lg:mb-3 lg:text-6xl sm:tracking-widest">Hello, I&apos;am Dedi,</h1>
                        <h1 className="font-semibold text-2xl tracking-wide mb-8 lg:mb-17 lg:text-5xl sm:tracking-wider">Fullstack Developer</h1>
                        {/* for mobile start */}
                        <p className="block font-normal text-base text-gray-600 tracking-wide mb-2 lg:max-w-2xl lg:mb-3 lg:text-1xl sm:hidden">
                            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi totam unde voluptatem,
                            officia quas? Eveniet tenetur libero officiis, corrupti neque ex nostrum id, voluptates, dolorum sunt odio magnam? Cum?
                        </p>
                        {/* for mobile end */}

                        {/* for desktop start*/}
                        <p className="block font-normal text-base text-gray-600 tracking-wide mb-2 lg:max-w-2xl lg:mb-3 lg:text-1xl max-sm:hidden">
                            2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eligendi totam unde voluptatem,
                            officia quas? Eveniet tenetur libero officiis, corrupti neque ex nostrum id, voluptates, dolorum sunt odio magnam? Cum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit officia molestias laborum optio quisquam, 
                            harum praesentium? Voluptate quas cumque molestiae, architecto nesciunt illo repellendus officia corporis repellat, ad quod.
                        </p>
                        {/* for desktop end*/}
                    </div>
                    <div className="hidden lg:flex lg:w-1/2">
                        <h1 className="">ini gambar</h1>
                    </div>
                </div>

            </div>
            {/* Introduction Self End */}

            {/* Button Download Resume Start */}
            <div className="mt-15 lg:mt-25">
                <div className="px-2 text-center lg:text-left">
                    <div className="container">
                        <a target="_blank" href="#" className="shadow-md bg-linear-to-r from-[#00B4DB] to-[#5B86E5] text-white font-bold py-3 px-4 rounded">Download Resume </a>
                    </div>
                </div>
            </div>
            {/* Button Download Resume End */}

            {/* Box Experience Start */}

            {/* <div className="ml-2.5 mt-15">
                <div className="flex flex-row gap-5">
                    <div className=" bg-[#86a6e9] px-5 py-2.5 text-center">
                        <p className="text-white text-3xl font-semibold lg:text-5xl mb-3">{gapYearExperience()}</p>
                        <p className="text-white font-semibold">Year Experience</p>
                    </div>
                    <div className="bg-linear-to-r from-[#00B4DB] to-[#5B86E5] px-5 py-2 text-center">
                        <p className="text-white text-3xl font-semibold lg:text-5xl mb-3">+{projectFinish()}</p>
                        <p className="text-white font-semibold">Project Completed</p>
                    </div>
                    <div className="bg-linear-to-r from-[#00B4DB] to-[#5B86E5] px-5 py-2.5 text-center">
                        <p className="text-white text-3xl font-semibold lg:text-5xl mb-3">{gapYearExperience()}</p>
                        <p className="text-white font-semibold">Year</p>
                        <p className="text-white">Experience</p>
                    </div>
                </div>
            </div> */}

            {/* Box Experience End */}

        </div>
    )
}   