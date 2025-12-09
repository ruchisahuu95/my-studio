import Marquee from "./Marquee";

export default function Hero() {
    return (
        <section className="w-full flex flex-col items-center px-4">

            {/* 🔹 TOP: Your Existing Marquee Section */}
            <div className="flex flex-col justify-center items-center py-10 gap-6">
                <Marquee direction="left" />
                <Marquee direction="right" />
            </div>

            {/* 🔹 BELOW: Fullscreen Video Section */}
            <div className="relative w-full mt-10">
                <div className="w-full h-[100vh] overflow-hidden showreel">
                    <video
                        src="/assets/my_studio_two.MP4"
                        loop
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    ></video>
                </div>
            </div>

        </section>
    );
}
