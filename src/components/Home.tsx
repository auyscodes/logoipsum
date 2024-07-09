import NavBar from "./Navbar";
import MainBody from "./MainBody";
const Home = () => {
  return (
    <>
      <NavBar />

      <div>
        <div className="pt-8 flex flex-col justify-center items-center">
          <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-blue-800">
            Team Directory
          </h2>
          <p className="max-w-2xl text-lg text-center">
            Browse our directory to find staff contact details by name,
            department, section or other details.
          </p>
        </div>
        <div></div>
        <MainBody />
      </div>
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center -mx-2">
            <div className="w-full px-2 text-center">
              <p className="mx-auto text-sm text-gray-500">
                All rights reserved © JAMstackers 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
