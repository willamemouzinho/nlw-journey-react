import { SetStateAction } from "react";
import { XIcon, TagIcon, CalendarIcon, ClockIcon } from "lucide-react";

import { Button } from "../../../components/button";

interface CreateActivityModalProps {
  activityTitleInput: string;
  timeInput: string;
  dateInput: string;
  setActivityTitleInput: (value: SetStateAction<string>) => void;
  setDateInput: (value: SetStateAction<string>) => void;
  setTimeInput: (value: SetStateAction<string>) => void;
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  activityTitleInput,
  closeCreateActivityModal,
  setActivityTitleInput,
  setTimeInput,
  timeInput,
  dateInput,
  setDateInput,
}: CreateActivityModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">
      <div className="flex w-[640px] max-w-2xl flex-col gap-5 rounded-xl bg-zinc-900 px-4 py-3 md:px-6 md:py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Cadastrar atividade
            </h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <XIcon strokeWidth={2} size={20} className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="flex w-full flex-col gap-3 md:items-center">
          <div className="flex w-full items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <TagIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="text"
              value={activityTitleInput}
              onChange={(event) => setActivityTitleInput(event.target.value)}
              placeholder="qual a atividade?"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="flex h-14 w-full flex-1 items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <CalendarIcon
                strokeWidth={2}
                size={20}
                className="text-zinc-400"
              />
              <input
                type="text"
                value={dateInput}
                onChange={(event) => setDateInput(event.target.value)}
                placeholder="20 de agosto"
                className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>
            <div className="flex h-14 w-36 items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
              <ClockIcon strokeWidth={2} size={20} className="text-zinc-400" />
              <input
                type="text"
                value={timeInput}
                onChange={(event) => setTimeInput(event.target.value)}
                placeholder="horário"
                className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
              />
            </div>
          </div>

          <Button type="submit" width="full">
            salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
