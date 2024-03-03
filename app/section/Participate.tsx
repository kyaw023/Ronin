import { Button } from "@/components/ui/button";

export function Participate() {
  return (
    <div className=" bg-slate-900 mt-40 border-t-2 border-slate-500 md:rounded-t-[100px] rounded-t-[56px] px-4">
      <div className="py-20 text-center max-w-screen-xl mx-auto h-screen">
        <div>
          <p className=" mb-8 text-slate-500 text-lg font-semibold">
            Participate
          </p>
          <h1 className=" md:text-6xl text-3xl font-bold">
            Contribute to the Network
          </h1>
        </div>

        <div className=" mt-20 md:border-2 md:border-slate-700 md:bg-slate-950 md:rounded-2xl md:p-20 ">
          <div className=" flex md:flex-row  space-y-10 md:space-y-0 flex-col items-center justify-between">
            <div className="bg-slate-900 md:bg-slate-950 md:p-0 p-10 rounded-xl md:rounded-none md:shadow-none shadow-xl md:border-none border-2 border-slate-600">
              <h1 className=" text-2xl font-semibold mb-4">
                Become a Validator
              </h1>
              <p className=" mb-4 max-w-sm mx-auto">
                Run a Validator node to secure the network and earn rewards.
              </p>
              <Button className=" bg-transparent border-2 border-slate-400 text-slate-100 h-12 w-38">
                Learn More
                <div className=" ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Button>
            </div>

            <div className=" w-[1px] h-40 hidden md:block bg-slate-400"></div>

            <div className=" bg-slate-900 md:bg-slate-950 md:p-0 p-10 rounded-xl md:rounded-none md:shadow-none shadow-xl md:border-none border-2 border-slate-600">
              <h1 className=" text-2xl font-semibold mb-4">
                Become a Delegator
              </h1>
              <p className=" mb-4 md:max-w-xs w-full md:mx-auto">
                Delegate your stake to validators to earn rewards.
              </p>
              <Button className=" bg-transparent border-2 border-slate-400 text-slate-100 h-12 w-38">
                Learn More
                <div className=" ms-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
