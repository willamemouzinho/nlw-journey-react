import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ConfirmTripModal } from "./components/confirm-trip-modal";
import { InviteGuestsModal } from "./components/invite-guests-modal";
import { DestinationAndDateStep } from "./components/steps/destination-and-date-step";
import { InviteGuestsStep } from "./components/steps/invite-guests-step";

export function NewTripPage() {
  const navigate = useNavigate();
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isLocationAndDateInputEditable, setIsLocationAndDateInputEditable] =
    useState(false);
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([]);
  const [destinationInput, setDestinationInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [userNameInput, setUserNameInput] = useState("");
  const [userEmailInput, setUserEmailInput] = useState("");
  const [guestEmailInput, setGuestEmailInput] = useState("");

  function openGuestsInput() {
    if (destinationInput !== "" && dateInput !== "") {
      setIsGuestsInputOpen(true);
      setIsLocationAndDateInputEditable(true);
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

  function editLocationAndDateInput() {
    setIsLocationAndDateInputEditable(false);
  }

  function saveLocationAndDateInput() {
    setIsLocationAndDateInputEditable(true);
  }

  function addNewEmailToInvite(event: FormEvent) {
    event.preventDefault();

    if (guestEmailInput === "") {
      return;
    }
    if (emailsToInvite.includes(guestEmailInput)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, guestEmailInput]);

    setGuestEmailInput("");
  }

  function removeEmailFromInvite(emailToRemove: String) {
    setEmailsToInvite(
      emailsToInvite.filter((email) => email !== emailToRemove),
    );
  }

  function createTrip(event: FormEvent) {
    event.preventDefault();

    if (
      destinationInput === "" ||
      dateInput === "" ||
      userNameInput === "" ||
      userEmailInput === ""
    ) {
      return;
    }

    navigate(`/trips/${123}`);
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
          dateInput={dateInput}
          setDateInput={setDateInput}
          destinationInput={destinationInput}
          setDestinationInput={setDestinationInput}
          editLocationAndDateInput={editLocationAndDateInput}
          isLocationAndDateInputEditable={isLocationAndDateInputEditable}
          saveLocationAndDateInput={saveLocationAndDateInput}
          isGuestsInputOpen={isGuestsInputOpen}
          openGuestsInput={openGuestsInput}
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
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModal={closeGuestsModal}
          removeEmailFromInvite={removeEmailFromInvite}
          guestEmailInput={guestEmailInput}
          setGuestEmailInput={setGuestEmailInput}
        />
      )}

      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          userNameInput={userNameInput}
          userEmailInput={userEmailInput}
          setUserNameInput={setUserNameInput}
          setUserEmailInput={setUserEmailInput}
          createTrip={createTrip}
          closeConfirmTripModal={closeConfirmTripModal}
        />
      )}
    </div>
  );
}
