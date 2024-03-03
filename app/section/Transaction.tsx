

export function Transaction() {
  return (
    <div className=" max-w-screen-xl mx-auto mt-40 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-0 gap-y-3">
        <div>
          <h1 className=" md:text-6xl text-4xl font-bold max-w-xl">
            Scalable. Battle-tested. Infinite.
          </h1>
        </div>
        <div>

          <div className="border-b-2 border-slate-600 mb-14">
            <div className="">
              <h1 className=" md:text-8xl text-4xl text-blue-700 font-bold">4.1 + B</h1>
              <p className=" md:mb-14 mb-8 text-2xl text-slate-500 font-semibold mt-6">
                All-time NFT Volume
              </p>
            </div>
          </div>

          <div className="border-b-2 border-slate-600 mb-14">
            <div className="">
              <h1 className=" md:text-8xl text-4xl text-blue-700 font-bold">
                 
              </h1>
              <p className=" md:mb-14 mb-8 text-2xl text-slate-500 font-semibold mt-6">
                Total Transactions
              </p>
            </div>
          </div>

          <div className="border-b-2 border-slate-600 mb-14">
            <div className="">
              <h1 className=" md:text-8xl text-4xl text-blue-700 font-bold">14,748,257</h1>
              <p className="md:mb-14 mb-8 text-2xl text-slate-500 font-semibold mt-6">
                Total Addresses
              </p>
            </div>
          </div>

          <div className="border-b-2 border-slate-600 mb-14">
            <div className="">
              <h1 className=" md:text-8xl text-4xl text-blue-700 font-bold">~$0.00110</h1>
              <p className=" md:mb-14 mb-8 text-2xl text-slate-500 font-semibold mt-6">
                Min. Cost Per Transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
