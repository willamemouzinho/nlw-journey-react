import { FormEvent, SetStateAction } from "react";
import { MailIcon, UserIcon, XIcon } from "lucide-react";

import { Button } from "../../../components/button";

interface ConfirmTripModalProps {
  userNameInput: string;
  userEmailInput: string;
  setUserNameInput: (value: React.SetStateAction<string>) => void;
  setUserEmailInput: (value: SetStateAction<string>) => void;
  createTrip: (event: FormEvent) => void;
  closeConfirmTripModal: () => void;
}

export function ConfirmTripModal({
  userNameInput,
  userEmailInput,
  setUserNameInput,
  setUserEmailInput,
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">
      <div className="flex w-[640px] max-w-2xl flex-col gap-5 rounded-xl bg-zinc-900 px-4 py-3 md:px-6 md:py-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <XIcon strokeWidth={2} size={20} className="text-zinc-400" />
            </button>
          </div>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-bold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-bold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form
          onSubmit={createTrip}
          className="flex w-full flex-col gap-3 md:items-center"
        >
          <div className="flex w-full items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <UserIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="text"
              value={userNameInput}
              onChange={(event) => setUserNameInput(event.target.value)}
              placeholder="seu nome completo"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex h-14 w-full items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <MailIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="email"
              value={userEmailInput}
              onChange={(event) => setUserEmailInput(event.target.value)}
              placeholder="seu e-mail pessoal"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <Button type="submit" width="full">
            confirmar criação da viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
