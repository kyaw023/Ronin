import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Learn() {
  return (
    <div className=" md:flex md:gap-x-8">
      <li className="py-3 px-4 border-b-2 border-b-slate-600 md:px-0 md:py-0 md:border-none  flex items-center justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <p className="hover:text-blue-700">Learn</p>
          </HoverCardTrigger>
          <HoverCardContent className="w-96">
            <div className=" ">
              <div className=" flex items-center space-x-5 mb-4">
                <div>
                  <h1 className=" text-lg text-slate-300">About Ronin</h1>
                  <p className=" text-slate-500">
                    Everything you need to know about Ronin
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </div>
              <div className=" flex items-center space-x-5">
                <div>
                  <h1 className=" text-lg text-slate-300">Build dApps</h1>
                  <p className=" text-slate-500">
                    Learn how to build your first dapps on Roni
                  </p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        <div className="md:hidden flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </div>
      </li>
      <li className="py-3 hover:text-blue-700 px-4 border-b-2 border-b-slate-600 md:px-0 md:py-0 md:border-none">
        Ecosystem
      </li>
    </div>
  );
}
