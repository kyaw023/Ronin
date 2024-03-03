import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <>
      <div className=" max-w-screen-xl mx-auto px-4 mt-20">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-0 items-center">
          <div >
            <h1 className=" text-4xl md:text-7xl font-bold mb-8">
              Forged for
              <span className=" text-blue-700 mt-1 select-none"> Game Developers</span>
            </h1>
            <p className=" mb-8 md:text-lg select-none">
              Ronin is an EVM blockchain crafted for developers building <br />{" "}
              games with player-owned economies.
            </p>
            <div className=" flex items-center gap-3">
              <Button className=" bg-blue-600 text-slate-10 h-12 w-38">
                Build on Ronin
                <div className="ms-2">
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
          <div>
            <img
              width={600}
              height={600}
              src="https://cdn.skymavis.com/explorer-cdn/ronin-website/homepage-hero.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
