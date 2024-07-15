import { useState } from "react";

import { CreateActivityModal } from "./components/create-activity-modal";
import { Activities } from "./components/activities";
import { ImportantLinks } from "./components/important-links";
import { Guests } from "./components/guests";
import { DestinationAndDateHeader } from "./components/destination-and-date-header";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);
  const [activityTitleInput, setActivityTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex w-full flex-col items-center gap-8 md:max-w-6xl">
        <DestinationAndDateHeader />

        <main className="flex w-full gap-16">
          <Activities openCreateActivityModal={openCreateActivityModal} />

          <div className="flex w-80 flex-col gap-6">
            <ImportantLinks />

            <div className="h-px w-full bg-zinc-800" />

            <Guests />
          </div>
        </main>
      </div>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          activityTitleInput={activityTitleInput}
          closeCreateActivityModal={closeCreateActivityModal}
          dateInput={dateInput}
          setActivityTitleInput={setActivityTitleInput}
          setDateInput={setDateInput}
          setTimeInput={setTimeInput}
          timeInput={timeInput}
        />
      )}
    </div>
  );
}
