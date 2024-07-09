import Footer from "./Footer";
import NavBar from "./Navbar";

const ContactUs = () => {
  return (
    <div>
      <NavBar />

      <div>
        <div className="pt-8 flex flex-col justify-center items-center">
          <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-blue-800">
            Contact Us
          </h2>
          <p className="max-w-2xl mt-20 text-lg text-center">
            Browse our directory to find staff contact details by name,
            department, section or other details.
          </p>
        </div>
        <div >
        <form action="/" className="mt-20 text-blue-800">
                <div className="flex items-center justify-center">
                    <div className="w-1/2">
                        <header className="mb-6">
                            <h3 className="font-bold text-2xl text-center">Your details</h3>
                        </header>
                        <div>
                            <div className="flex flex-col">
                                <label className="font-bold pb-2">Full Name*</label>
                                
                                <input type="text" className="p-2.5 w-full " />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label className="font-bold pb-2">Email Address*</label>
                                <input type="text" className=" p-2.5 w-full" />
                            </div>
                            <div className="flex flex-col mt-2">
                                <label className="font-bold pb-2">Telephone Number*</label>
                                <input type="text" className="p-2.5 w-full"/>
                            </div>
                            
                            <div className="flex flex-col mt-2">
                                <label className="font-bold pb-2">How did you hear about logoipsum?*</label>
                                <textarea type="text" className=" p-2.5 w-full" rows="10"> </textarea>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                
                
            </form>
            

        </div>
      </div>
      <div className="mt-28">
        <Footer/>
      </div>
      
    </div>
  );
};
export default ContactUs;
