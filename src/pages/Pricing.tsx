import Header from "../components/Header";
import Footer from "../components/Footer";

type Plan = {
    name: string;
    description: string;
    price: string;
    features: string[];
    highlighted?: boolean;
};

const plans: Plan[] = [
    {
        name: "Basic",
        description: "Best for personal use.",
        price: "$100",
        features: [
            "Employee directory",
            "Task management",
            "Calendar integration",
            "File storage",
            "Communication tools",
            "Reporting and analytics",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        description: "For large teams & corporations.",
        price: "$100",
        features: [
            "Advanced employee directory",
            "Project management",
            "Resource scheduling",
            "Version control",
            "Team collaboration",
            "Advanced analytics",
        ],
        highlighted: true,
    },
    {
        name: "Business",
        description: "Best for business owners.",
        price: "$100",
        features: [
            "Customizable employee directory",
            "Client project management",
            "Client meeting schedule",
            "Compliance tracking",
            "Client communication",
            "Create custom reports tailored",
        ],
        highlighted: true,
    },
];

function Pricing() {
    return (
        <div className="relative min-h-screen">
            <Header />
            {/* Background effect */}
            <div>
                <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0e0e0e]">
                    {/* Center Gradient Blur */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,191,255,0.5),_rgba(0,0,0,0.95))] blur-[120px]"></div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
                    </div>
                </div>
            </div>

            {/* Your app content */}
            <div className="relative z-10 container mx-auto py-8">
                <div className=" text-white h-[30rem]  w-full flex flex-col justify-center items-center">
                    <div className="px-6 py-3 mb-4 rounded-full border border-white shadow-md backdrop-blur-md text-sm text-gray-800 dark:text-white">
                        Bring your business to next level
                    </div>
                    <div className="text-6xl text-center">
                        Discover Services With <br />
                        the Best Pricing
                    </div>
                    <div className="my-4 text-center">
                        ply dummy text of the printing and typesetting industry. the printing and typesetting <br />
                        Lorem Ipsum has beenply dummy text of the printing and{" "}
                    </div>
                </div>

                <div className=" text-white  py-16">
                    <div>
                        <div className="min-h-screen  flex justify-center items-center px-4 py-12">
                            <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">
                                {plans.map((plan, index) => (
                                    <div
                                        key={index}
                                        className={`relative rounded-3xl p-6 md:p-8 text-white transition-all duration-300 bg-gradient-to-b from-[#111] to-[#1a1a1a] hover:shadow-xl ${
                                            plan.highlighted
                                                ? "hover:from-[#112233] hover:to-[#0f172a] hover:bg-gradient-to-b"
                                                : ""
                                        }`}
                                    >
                                        {/* Highlight glow on hover for center card */}
                                        {plan.highlighted && (
                                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-sky-600/40 to-transparent blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
                                        )}

                                        <div className="relative z-10">
                                            <div className="w-5 h-5 rounded-full border-2 border-white mb-4"></div>
                                            <h2 className="text-2xl font-semibold">{plan.name}</h2>
                                            <p className="text-sm text-gray-400 mb-4">{plan.description}</p>

                                            <div className="text-4xl font-bold mb-1">{plan.price}</div>
                                            <p className="text-gray-400 text-sm mb-6">/ per month</p>

                                            <button className="w-full bg-[#1e1e1e] hover:bg-[#333] py-2 rounded-md transition">
                                                Proceed
                                            </button>

                                            <hr className="my-6 border-gray-700" />

                                            <div>
                                                <h3 className="font-semibold mb-3">What you will get</h3>
                                                <ul className="space-y-2 text-sm text-gray-300">
                                                    {plan.features.map((feature, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <span className="text-sky-400">✓</span>
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pricing;
