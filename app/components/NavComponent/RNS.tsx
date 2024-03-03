import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function RNS() {
  return (
    <div>
      <li className="py-3 px-4 border-b-2 border-b-slate-600 md:px-0 md:py-0 md:border-none  flex items-center justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <p className="hover:text-blue-700">RNS</p>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div>
              <div className=" mb-3 flex items-center justify-between">
                <h1 className=" text-lg text-slate-300">Ronin name service</h1>
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
              <div className=" mb-3 flex items-center justify-between">
                <h1 className=" text-lg text-slate-300">Join RNS Auction</h1>
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
      </li>
    </div>
  );
}
