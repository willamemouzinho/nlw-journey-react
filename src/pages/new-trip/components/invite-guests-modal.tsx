import { FormEvent, SetStateAction } from "react";
import { AtSignIcon, PlusIcon, XIcon } from "lucide-react";

import { Button } from "../../../components/button";

interface InviteGuestsModalProps {
  guestEmailInput: string;
  setGuestEmailInput: (value: SetStateAction<string>) => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent) => void;
  removeEmailFromInvite: (email: string) => void;
  closeGuestsModal: () => void;
}

export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  guestEmailInput,
  removeEmailFromInvite,
  setGuestEmailInput,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">
      <div className="flex w-[640px] max-w-2xl flex-col gap-5 rounded-xl bg-zinc-900 px-4 py-3 md:px-6 md:py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Selecionar convidados
            </h2>
            <button type="button" onClick={closeGuestsModal}>
              <XIcon strokeWidth={2} size={20} className="text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => (
            <li
              key={email}
              className="flex items-center gap-2.5 rounded-md bg-zinc-800 px-2.5 py-1.5 text-zinc-300"
            >
              {email}
              <button
                type="button"
                onClick={() => removeEmailFromInvite(email)}
              >
                <XIcon strokeWidth={2} size={18} className="text-zinc-400" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden bg-zinc-800 md:block md:h-px md:w-full" />

        <form
          onSubmit={addNewEmailToInvite}
          className="flex w-full flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 md:h-14 md:flex-row md:items-center md:gap-5"
        >
          <div className="flex flex-1 items-center gap-x-2">
            <AtSignIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="email"
              value={guestEmailInput}
              onChange={(event) => setGuestEmailInput(event.target.value)}
              placeholder="digite o e-mail do convidado"
              className="flex h-9 w-full items-center bg-transparent text-zinc-400 outline-none"
            />
          </div>

          <Button type="submit" size="md">
            convidar
            <PlusIcon strokeWidth={1.5} size={20} />
          </Button>
        </form>
      </div>
    </div>
  );
}
