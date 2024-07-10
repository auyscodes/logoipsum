const ContactUs = () => {
  return (
    <div>
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
        <div>
          <form action="/" className="mt-20 text-blue-800">
            <div className="flex items-center justify-center">
              <div className="w-1/2">
                <header className="mb-6">
                  <h3 className="font-bold text-2xl text-center">
                    Your details
                  </h3>
                </header>
                <div>
                  <div className="flex flex-col">
                    <label className="font-bold pb-2">Full Name*</label>

                    <input type="text" className="p-2.5 w-full " required />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="font-bold pb-2">Email Address*</label>
                    <input type="email" className=" p-2.5 w-full" required />
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="font-bold pb-2">Telephone Number*</label>
                    <input type="tel" className="p-2.5 w-full" required />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="font-bold pb-2">
                      How did you hear about logoipsum?*
                    </label>
                    <textarea
                      className=" p-2.5 w-full"
                      rows={10}
                      required
                    ></textarea>
                  </div>
                  <div className="flex place-content-center mt-8 ">
                    <button className="bg-blue-950 rounded-full px-4 py-2 text-white" type="submit"> Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-20"></div>
    </div>
  );
};
export default ContactUs;
