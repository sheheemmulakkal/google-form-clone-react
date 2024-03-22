const Success = () => {
  return (
    <div className="w-full text-center min-h-screen container mx-auto">
      <div className="flex justify-center pb-10">
        <div className="sm:w-full lg:max-w-[60%]">
          <div className=" bg-white rounded-md py-6 mt-8 border-t-8 border-t-[#673AB7] shadow-md">
            <div className="flex px-5 flex-col">
              <div className="h-16 text-4xl font-medium outline-none w-full">
                <p>Form Submitted</p>
              </div>

              <div className=" text-lg w-full  outline-none">
                <p>Thank you for your cooperation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
