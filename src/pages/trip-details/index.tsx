import { useState } from "react";

import { CreateActivityModal } from "./components/create-activity-modal";
import { Activities } from "./components/activities";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/guests";
import { DestinationAndDateTrip } from "./components/destination-and-date-trip";
import { CreateLinkModal } from "./components/create-link-modal";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  // function openCreateActivityModal() {
  //   setIsCreateActivityModalOpen(true);
  // }

  // function closeCreateActivityModal() {
  //   setIsCreateActivityModalOpen(false);
  // }

  return (
    <div className="flex items-center justify-center px-5 py-10 md:px-10">
      <div className="flex w-full flex-col items-center gap-8 md:max-w-6xl">
        <DestinationAndDateTrip />

        <main className="flex w-full flex-col gap-16 lg:flex-row">
          <Activities openCreateActivityModal={openCreateActivityModal} />

          <div className="flex flex-col gap-6 lg:w-80">
            <ImportantLinks openCreateLinkModal={openCreateLinkModal} />

            <div className="h-px w-full bg-zinc-800" />

            <Guests />
          </div>
        </main>
      </div>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}
    </div>
  );
}
