import { ArrowRight, UserRoundPlusIcon } from "lucide-react";

import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
  openGuestsModal: () => void;
}

export function InviteGuestsStep({
  openConfirmTripModal,
  emailsToInvite,
  openGuestsModal,
}: InviteGuestsStepProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-zinc-900 p-4 text-lg shadow-shape md:h-16 md:max-w-3xl md:flex-row md:items-center md:gap-5">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex flex-1 items-center gap-x-2"
      >
        <UserRoundPlusIcon
          strokeWidth={2}
          size={20}
          className="text-zinc-400"
        />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400">quem estará na viagem?</span>
        )}
      </button>

      <Button type="button" onClick={openConfirmTripModal} size="md">
        confirmar viagem
        <ArrowRight strokeWidth={1.5} size={20} />
      </Button>
    </div>
  );
}
