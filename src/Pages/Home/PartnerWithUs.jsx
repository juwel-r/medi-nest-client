import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpin from "../../components/LoadingSpin";
import { Fade } from "react-awesome-reveal";

const PartnerWithUs = () => {
  const [sellers, setSellers] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic("/payment/top-seller").then((res) => setSellers(res.data));
  }, []);

  if (!sellers || !sellers.length > 0) {
    return <LoadingSpin />;
  }
  return (
    <div className="bg-gradient-to-b from-[#F8FAFF] to-primary/50  p-6 flex flex-col items-center px-[5%]">
      {/* Header Section */}
      <div className="text-center max-w-2xl mb-8">
        <Fade direction="up">
          <h1 className="text-4xl font-bold text-primary">Partner With Us</h1>
        </Fade>
        <Fade delay={250}>
          <p className="text-gray-600 mt-4 leading-relaxed">
            At <span className="font-semibold text-primary">Medi Nest</span>,
            we’re revolutionizing the future of healthcare accessibility and
            collaboration. Whether you're a pharmaceutical company, distributor,
            or a healthcare innovator, let's work together to create a healthier
            tomorrow. Join us in building a platform that prioritizes trust,
            quality, and excellence in medicine.
          </p>
        </Fade>
        <Fade direction="up">
        <button className="mt-6 px-8 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700">
          Start Your Partnership
        </button>
        </Fade>
      </div>

      <div className="relative w-full  lg:h-[200px] flex flex-col md:flex-row justify-center items-center gap-y-10 xs:min-h-[320px] lg:mt-8 pb-16 lg:pb-0">
        {sellers.map((seller, index) => (
          <div key={index}
            className={`md:absolute border-2 border-white/30 p-1.5 rounded-xl shadow-xl  transform  ${
              index === 0
                ? "rotate-6 lg:translate-y-6 md:top-0 md:-translate-x-[200px] lg:-translate-x-[500px] before:content-['1st_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
                : index === 1
                ? "-rotate-6 translate-y-2 md:-translate-y-2 md:top-0 md:translate-x-[180px] lg:-translate-x-[160px] before:content-['2nd_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
                : index === 2
                ? "lg:rotate-6 md:-rotate-3 md:translate-y-6 lg:-translate-y-16 md:bottom-0 md:-translate-x-[180px] lg:translate-x-[180px] before:content-['3rd_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
                : "rotate-12 md:-rotate-12 lg:-rotate-12 translate-y-2  md:translate-y-32 lg:-translate-y-6 md:translate-x-[200px] lg:translate-x-[500px] text-right before:content-['4th_Place'] before:absolute before:top-0 before:text-gray-400 before:right-0 before:pr-4 before:pt-3"
            }`}
          >
            <div className="bg-white/10 p-4 rounded-lg shadow-lg">
              <Fade  delay={index * 200} className="">
                <div className="flex items-end justify-between">
                  <img
                    className="w-auto h-12 rounded-md"
                    src={seller.image}
                    alt={seller.name}
                  />
                  <p className=" font-semibold text-gray-600">{seller.name}</p>
                </div>
                <p className="mt-2 text-gray-800">
                  # {seller.count} Medicines Available Now
                </p>
                <p className={`text-gray-600 mt-1 ${index === 2 && "hidden"}`}>
                  Our Special Partner
                </p>
              </Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerWithUs;
