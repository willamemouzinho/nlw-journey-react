import { useState } from "react";
import {
  ArrowRight,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
} from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "../../../components/button";
import { DatePicker } from "../../../components/date-picker";
import { format } from "../../../lib/date-fns";

interface DestinationAndDateStepProps {
  setDestination: (destination: string) => void;
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  setTripStartAndEndDates: (startAndEndDates: DateRange | undefined) => void;
  tripStartAndEndDates: DateRange | undefined;
  isEditingTripDateAndDestination: boolean;
  saveTripDateAndDestination: () => void;
  editTripDateAndDestination: () => void;
}

export function DestinationAndDateStep({
  setDestination,
  isGuestsInputOpen,
  openGuestsInput,
  tripStartAndEndDates,
  setTripStartAndEndDates,
  isEditingTripDateAndDestination,
  editTripDateAndDestination,
  saveTripDateAndDestination,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  function openDatePickerModal() {
    setIsDatePickerOpen(true);
  }

  function closeDatePickerModal() {
    setIsDatePickerOpen(false);
  }

  const displayedDate = (() => {
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
    <div className="flex flex-col gap-6 rounded-xl bg-zinc-900 p-4 text-lg shadow-shape md:h-16 md:flex-row md:items-center md:gap-5">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 items-center gap-x-2">
          <MapPinIcon strokeWidth={2} size={20} className="text-zinc-400" />
          <input
            type="text"
            disabled={isGuestsInputOpen && !isEditingTripDateAndDestination}
            onChange={(event) => setDestination(event.target.value)}
            placeholder="para onde vai?"
            className="flex h-9 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
          />
        </div>

        <button
          type="button"
          disabled={isGuestsInputOpen && !isEditingTripDateAndDestination}
          onClick={openDatePickerModal}
          className="flex items-center gap-2 text-zinc-400"
        >
          <CalendarIcon strokeWidth={2} size={20} />
          {tripStartAndEndDates &&
          tripStartAndEndDates.from &&
          tripStartAndEndDates.to
            ? displayedDate
            : "quando?"}
        </button>
      </div>

      <div className="hidden bg-zinc-800 md:block md:h-9 md:w-px" />

      {isGuestsInputOpen && isEditingTripDateAndDestination ? (
        <Button
          type="button"
          variant="secondary"
          size="md"
          onClick={saveTripDateAndDestination}
        >
          salvar mudanças
        </Button>
      ) : isGuestsInputOpen ? (
        <Button
          type="button"
          onClick={editTripDateAndDestination}
          variant="secondary"
          size="md"
        >
          alterar local/data
          <Settings2Icon strokeWidth={1.5} size={20} />
        </Button>
      ) : (
        <Button type="button" onClick={openGuestsInput} size="md">
          continuar
          <ArrowRight strokeWidth={1.5} size={20} />
        </Button>
      )}

      {isDatePickerOpen && (
        <DatePicker
          closeDatePickerModal={closeDatePickerModal}
          tripStartAndEndDates={tripStartAndEndDates}
          setTripStartAndEndDates={setTripStartAndEndDates}
        />
      )}
    </div>
  );
}
