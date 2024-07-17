import { FormEvent } from "react";
import { MailIcon, UserIcon, XIcon } from "lucide-react";

import { Button } from "../../../components/button";
import { DateRange } from "react-day-picker";
import { format } from "../../../lib/date-fns";

interface ConfirmTripModalProps {
  destination: string;
  tripStartAndEndDates: DateRange | undefined;
  ownerName: string;
  ownerEmail: string;
  setOwnerName: (ownerName: string) => void;
  setOwnerEmail: (ownerEmail: string) => void;
  createTrip: (event: FormEvent) => void;
  closeConfirmTripModal: () => void;
}

export function ConfirmTripModal({
  ownerName,
  ownerEmail,
  setOwnerName,
  setOwnerEmail,
  closeConfirmTripModal,
  createTrip,
  destination,
  tripStartAndEndDates,
}: ConfirmTripModalProps) {
  const formattedTripDate = (() => {
    if (
      !tripStartAndEndDates ||
      !tripStartAndEndDates.from ||
      !tripStartAndEndDates.to
    )
      return null;

    const fromDay = format(tripStartAndEndDates.from, "d");
    const fromMonth = format(tripStartAndEndDates.from, "MMMM");
    const toDay = format(tripStartAndEndDates.to, "d");
    const toMonth = format(tripStartAndEndDates.to, "MMMM");

    if (fromDay === toDay && fromMonth === toMonth) {
      return `${fromDay} de ${fromMonth}`;
    }

    if (fromMonth === toMonth) {
      return `${fromDay} a ${toDay} de ${fromMonth}`;
    }

    return `${fromDay} de ${fromMonth} a ${toDay} de ${toMonth}`;
  })();

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
            <span className="font-bold text-zinc-100">{destination}</span> nas
            datas de{" "}
            <span className="font-bold text-zinc-100">{formattedTripDate}</span>{" "}
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
              value={ownerName}
              onChange={(event) => setOwnerName(event.target.value)}
              placeholder="seu nome completo"
              className="flex h-14 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          </div>

          <div className="flex h-14 w-full items-center gap-x-2 rounded-lg border border-zinc-800 bg-zinc-950 px-4">
            <MailIcon strokeWidth={2} size={20} className="text-zinc-400" />
            <input
              type="email"
              value={ownerEmail}
              onChange={(event) => setOwnerEmail(event.target.value)}
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
