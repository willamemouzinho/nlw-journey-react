import { FormEvent, useState } from "react";
import { XIcon, TagIcon, CalendarIcon } from "lucide-react";
import { useParams } from "react-router-dom";

import { Button } from "../../../components/button";
import { api } from "../../../lib/api";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  const { tripId } = useParams();

  const [activityTitle, setActivityTitle] = useState("");
  const [activityOccursAt, setActivityOccursAt] = useState("");

  async function createActivity(event: FormEvent) {
    event.preventDefault();

    await api.post(`/trips/${tripId}/activities`, {
      title: activityTitle,
      occurs_at: activityOccursAt,
    });

    window.location.reload();
  }

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

        <form
          onSubmit={createActivity}
          className="flex w-full flex-col gap-3 md:items-center"
        >
          <div className="flex w-full items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <TagIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="text"
              value={activityTitle}
              onChange={(event) => setActivityTitle(event.target.value)}
              placeholder="qual a atividade?"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex h-14 w-full flex-1 items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <CalendarIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="datetime-local"
              value={activityOccursAt}
              onChange={(event) => setActivityOccursAt(event.target.value)}
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <Button type="submit" width="full">
            salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
