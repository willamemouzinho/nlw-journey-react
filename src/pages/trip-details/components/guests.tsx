import { CircleCheckIcon, CircleDashedIcon, UserCogIcon } from "lucide-react";

import { Button } from "../../../components/button";

interface GuestsProps {}

export function Guests({}: GuestsProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-zinc-50">Convidados</h1>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="font-mediums text-zinc-100">Willame Mouzinho</span>
            <span className="text-sm text-zinc-400">willame@gmail.com</span>
          </div>
          <CircleCheckIcon
            strokeWidth={2}
            size={20}
            className="text-lime-300"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="font-mediums text-zinc-100">Adrian Mouzinho</span>
            <span className="text-sm text-zinc-400">adrian@gmail.com</span>
          </div>
          <CircleDashedIcon
            strokeWidth={2}
            size={20}
            className="text-zinc-400"
          />
        </div>
      </div>

      <Button type="button" variant="secondary">
        <UserCogIcon strokeWidth={1.5} size={20} className="" />
        gerenciar convidados
      </Button>
    </div>
  );
}
