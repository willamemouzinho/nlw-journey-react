import { PlusIcon, CircleCheckIcon, CircleDashedIcon } from "lucide-react";

import { Button } from "../../../components/button";

interface ActivitiesProps {
  openCreateActivityModal: () => void;
}

export function Activities({ openCreateActivityModal }: ActivitiesProps) {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-zinc-50">Atividades</h1>

        <Button type="button" onClick={openCreateActivityModal}>
          <PlusIcon strokeWidth={1.5} size={20} className="" />
          cadastrar atividade
        </Button>
      </div>

      <ul className="flex flex-col gap-8">
        <li className="flex flex-col gap-3">
          <h2 className="flex items-end gap-2 text-xl font-semibold">
            Dia 17{" "}
            <span className="text-xs font-normal text-zinc-500">Sábado</span>
          </h2>

          <span className="text-sm text-zinc-500">
            Nenhuma atividade cadastrada nessa data.
          </span>
        </li>

        <li className="flex flex-col gap-3">
          <h2 className="flex items-end gap-2 text-xl font-semibold">
            Dia 18{" "}
            <span className="text-xs font-normal text-zinc-500">Domingo</span>
          </h2>

          <ul className="flex flex-col gap-3">
            <li className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <CircleCheckIcon
                strokeWidth={2}
                size={20}
                className="text-lime-300"
              />
              <span className="flex-1 text-zinc-100">Corrida de Kart</span>
              <span className="text-sm text-zinc-400">14:00h</span>
            </li>
          </ul>
        </li>

        <li className="flex flex-col gap-3">
          <h2 className="flex items-end gap-2 text-xl font-semibold">
            Dia 19{" "}
            <span className="text-xs font-normal text-zinc-500">Segunda</span>
          </h2>

          <ul className="flex flex-col gap-3">
            <li className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <CircleCheckIcon
                strokeWidth={2}
                size={20}
                className="text-lime-300"
              />
              <span className="flex-1 text-zinc-100">Corrida de Kart</span>
              <span className="text-sm text-zinc-400">14:00h</span>
            </li>

            <li className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4">
              <CircleDashedIcon
                strokeWidth={2}
                size={20}
                className="text-zinc-400"
              />
              <span className="flex-1 text-zinc-100">Corrida de Kart</span>
              <span className="text-sm text-zinc-400">14:00h</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
