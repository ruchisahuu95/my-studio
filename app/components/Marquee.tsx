export default function Marquee({ direction = "left" }) {
    const words = [
        "LUNCH",
        "ANZZOLABS®",
        "DIGITAL",
        "ANZZOLABS®",
        "EXPERIENCES",
        "ANZZOLABS®",
        "THAT SHAPE",
        "ANZZOLABS®",
        "THE FUTURE",
        "ANZZOLABS®"
    ];

    return (
        <div className="overflow-hidden w-screen">
            <div className={`inline-flex whitespace-nowrap animate-marquee-${direction}`}>
                {Array.from({ length: 2 }).map((_, index) => (
                    <div key={index} className="inline-flex">
                        {words.map((item, i) =>
                            i % 2 === 0 ? (
                                <p key={i} className="text-[50px] font-medium mx-8">{item}</p>
                            ) : (
                                <h1 key={i} className="text-[12px] opacity-25 mx-8">{item}</h1>
                            )
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
