import { FormEvent, useState } from "react";
import { XIcon, TagIcon, CalendarIcon, Link2Icon } from "lucide-react";
import { useParams } from "react-router-dom";

import { Button } from "../../../components/button";
import { api } from "../../../lib/api";

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void;
}

export function CreateLinkModal({
  closeCreateLinkModal,
}: CreateLinkModalProps) {
  const { tripId } = useParams();

  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");

  async function createLink(event: FormEvent) {
    event.preventDefault();

    await api.post(`/trips/${tripId}/links`, {
      title: linkTitle,
      url: linkUrl,
    });

    window.location.reload();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">
      <div className="flex w-[540px] max-w-xl flex-col gap-5 rounded-xl bg-zinc-900 px-4 py-3 md:px-6 md:py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Cadastrar link</h2>
            <button type="button" onClick={closeCreateLinkModal}>
              <XIcon strokeWidth={2} size={20} className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar os links importantes.
          </p>
        </div>

        <form
          onSubmit={createLink}
          className="flex w-full flex-col gap-3 md:items-center"
        >
          <div className="flex w-full items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <TagIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="text"
              value={linkTitle}
              onChange={(event) => setLinkTitle(event.target.value)}
              placeholder="título do link"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex h-14 w-full flex-1 items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <Link2Icon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="url"
              value={linkUrl}
              onChange={(event) => setLinkUrl(event.target.value)}
              placeholder="url"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <Button type="submit" width="full">
            salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
