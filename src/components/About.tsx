import Footer from "./Footer";
import NavBar from "./Navbar";

const About = () => {
  return (
    <div className="bg-white">
      <NavBar />

      <div>
        <div className="pt-8 flex flex-col justify-center items-center">
          <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-blue-800">
            About Us
          </h2>
          <p className="max-w-2xl text-lg text-center">
            Browse our directory to find staff contact details by name,
            department, section or other details.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-20 lg:w-3/4">
          <div className="relative">
            <div className="border-r-2 border-dotted border-blue-600 h-[87%] w-1/2 absolute top-2  hidden md:block"></div>
            <div className="flex flex-col gap-4 md:gap-0 md:flex-row">
              <div className="flex-1">
                <p className="text-lg text-blue-600 p-4">
                  Orthodontists can spot subtle problems with jaw growth and
                  emerging teeth while some baby teeth are still present.
                </p>
              </div>

              <div className="w-10 h-10 z-10 bg-blue-600 rounded-full inline-flex items-center justify-center text-xl text-white order-first md:order-none">
                1
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
              <div className="flex-1"></div>
              <div className="w-10 h-10 z-10 bg-blue-600 rounded-full inline-flex items-center justify-center text-xl text-white ">
                2
              </div>
              <div className="flex-1">
                <p className="text-lg text-blue-600 p-4">
                  Key indicators that we look for: No space between the baby
                  teeth at 4 years old, uneven upper or lower front teeth, set
                  back upper or lower jaw, facial lengthening, teeth meeting the
                  wrong way around (underbite), slack open mouth resting
                  posture.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
              <div className="flex-1">
                <p className="text-lg text-blue-600 p-4">
                  Patient compliance is also a key part of our treatment
                  programme, we achieve this with education and patience
                  throughout the process.
                </p>
              </div>

              <div className="w-10 h-10 z-10 bg-blue-600 rounded-full inline-flex items-center justify-center text-xl text-white order-first md:order-none">
                3
              </div>
              <div className="flex-1"></div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
              <div className="flex-1"></div>
              <div className="w-10 h-10 z-10 bg-blue-600 rounded-full inline-flex items-center justify-center text-xl text-white ">
                4
              </div>
              <div className="flex-1">
                <p className="text-lg text-blue-600 p-4">
                  Patient compliance is also a key part of our treatment
                  programme, we achieve this with education and patience
                  throughout the process.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-0 ">
              <div className="flex-1">
                <p className="text-lg text-blue-600 px-4">
                  You will leave your initial appointment with a good
                  understanding of the treatment and support from our
                  specialised team.
                </p>
              </div>

              <div className="w-10 h-10 z-10 bg-blue-600 rounded-full inline-flex items-center justify-center text-xl text-white order-first md:order-none">
                5
              </div>
              <div className="flex-1"></div>
            </div>
          </div>
        </div>
      </div>
      

      <Footer />
    </div>
  );
};
export default About;
