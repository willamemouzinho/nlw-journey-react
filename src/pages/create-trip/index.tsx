import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateRange } from "react-day-picker";

import { ConfirmTripModal } from "./components/confirm-trip-modal";
import { InviteGuestsModal } from "./components/invite-guests-modal";
import { DestinationAndDateStep } from "./components/destination-and-date-step";
import { InviteGuestsStep } from "./components/invite-guests-step";
import { api } from "../../lib/api";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [isEditingTripDateAndDestination, setIsEditingTripDateAndDestination] =
    useState(false);

  const [destination, setDestination] = useState("");
  const [tripStartAndEndDates, setTripStartAndEndDates] = useState<
    DateRange | undefined
  >();
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [emailToInvite, setEmailToInvite] = useState("");
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);

  function openGuestsInput() {
    if (destination !== "" && tripStartAndEndDates) {
      setIsGuestsInputOpen(true);
    }
  }

  function openGuestsModal() {
    setIsGuestsModalOpen(true);
  }

  function closeGuestsModal() {
    setIsGuestsModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function editTripDateAndDestination() {
    setIsEditingTripDateAndDestination(true);
  }

  function saveTripDateAndDestination() {
    setIsEditingTripDateAndDestination(false);
  }

  function addNewEmailToInvite(event: FormEvent) {
    event.preventDefault();

    if (emailToInvite === "") {
      return;
    }
    if (emailsToInvite.includes(emailToInvite)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, emailToInvite]);

    setEmailToInvite("");
  }

  function removeEmailFromInvite(emailToRemove: String) {
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove),
    );
  }

  async function createTrip(event: FormEvent) {
    event.preventDefault();

    if (
      !destination ||
      !tripStartAndEndDates ||
      emailsToInvite.length === 0 ||
      !ownerName ||
      !ownerEmail
    ) {
      return;
    }

    const response = await api.post("/trips", {
      destination,
      starts_at: tripStartAndEndDates.from,
      ends_at: tripStartAndEndDates.to,
      owner_name: ownerName,
      owner_email: ownerEmail,
      emails_to_invite: emailsToInvite,
    });

    const { tripId } = response.data;

    navigate(`/trips/${tripId}`);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-10 bg-pattern bg-center bg-no-repeat px-8 md:px-0">
      <div className="flex max-w-md flex-col gap-y-3">
        <img src="/logo.svg" alt="Logo do plann.er" className="h-8" />

        <p className="text-center text-lg leading-relaxed">
          Convide seus amigos e planeje sua próxima viagem!
        </p>
      </div>

      <div className="flex w-full flex-col gap-4 md:max-w-3xl">
        <DestinationAndDateStep
          setDestination={setDestination}
          tripStartAndEndDates={tripStartAndEndDates}
          setTripStartAndEndDates={setTripStartAndEndDates}
          isGuestsInputOpen={isGuestsInputOpen}
          openGuestsInput={openGuestsInput}
          editTripDateAndDestination={editTripDateAndDestination}
          isEditingTripDateAndDestination={isEditingTripDateAndDestination}
          saveTripDateAndDestination={saveTripDateAndDestination}
        />

        {isGuestsInputOpen && (
          <InviteGuestsStep
            emailsToInvite={emailsToInvite}
            openConfirmTripModal={openConfirmTripModal}
            openGuestsModal={openGuestsModal}
          />
        )}
      </div>

      <p className="max-w-lg text-center text-sm leading-relaxed text-zinc-500">
        Ao planejar sua viagem pela plann.er você automaticamente concorda com{" "}
        <a
          href="#"
          className="text-zinc-300 underline transition-colors hover:text-zinc-100"
        >
          nossos termos de uso
        </a>{" "}
        e{" "}
        <a
          href="#"
          className="text-zinc-300 underline transition-colors hover:text-zinc-100"
        >
          políticas de privacidade
        </a>
        .
      </p>

      {isGuestsModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          emailToInvite={emailToInvite}
          setEmailToInvite={setEmailToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          ownerName={ownerName}
          ownerEmail={ownerEmail}
          setOwnerName={setOwnerName}
          setOwnerEmail={setOwnerEmail}
          createTrip={createTrip}
          closeConfirmTripModal={closeConfirmTripModal}
          destination={destination}
          tripStartAndEndDates={tripStartAndEndDates}
        />
      )}
    </div>
  );
}
