import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="  border-t  border-slate-600 md:rounded-t-[100px] rounded-t-[50px]">
      <div className="max-w-screen-xl text-center mx-auto md:px-32 px-4">
        <div className="border-b border-slate-500 border-opacity-55 py-20 ">
          <img
            className=" mb-8 mx-auto"
            src="https://roninchain.com/static/images/logo-on-white.svg"
            alt=""
          />

          <div className="">
            <h1 className=" font-bold md:text-5xl text-2xl">Let's Build Together</h1>

            <div className=" flex flex-col md:flex-row items-center justify-center mt-8 gap-y-4 md:gap-y-0 md:gap-x-3 gap-x-0">
              <Button className=" bg-blue-600 text-slate-10 h-12 w-38">
                Start Building
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
                Explore ecosystem
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
        <div className=" flex items-center justify-between">
             <ul className=" flex items-center gap-5 py-20">
                 <li>Build with us</li>
                 <li>Newsletter</li>
                 <li>Terms</li>
             </ul>
             <div className=" hidden md:block">
                 <span>Copyright 2023 © Ronin</span>
             </div>
        </div>
      </div>
    </div>
  );
}
