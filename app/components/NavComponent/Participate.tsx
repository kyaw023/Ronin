import { HoverCardContent } from "@/components/ui/hover-card";
import { HoverCard, HoverCardTrigger } from "@radix-ui/react-hover-card";

export function Participate() {
  return (
    <div>
      <li className="py-3 px-4 border-b-2 border-b-slate-600 md:px-0 md:py-0 md:border-none  flex items-center justify-between">
        <HoverCard>
          <HoverCardTrigger asChild>
            <p className="hover:text-blue-700">Participate</p>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div>
              <div className=" mb-3">
                <h1 className=" text-lg text-slate-300">Become a Validator</h1>
                <p className=" text-slate-500">Secure Ronin. Earn rewards.</p>
              </div>
              <div className=" mb-3">
                <h1 className=" text-lg text-slate-300">Become a Delegator</h1>
                <p className=" text-slate-500">Stake RON. Earn rewards.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </li>
    </div>
  );
}
