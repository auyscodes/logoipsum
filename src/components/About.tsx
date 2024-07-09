import Footer from "./Footer";
import NavBar from "./Navbar";

const About = () => {
  return (
    <div>
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
      <Footer/>
    </div>
  );
};
export default About;
