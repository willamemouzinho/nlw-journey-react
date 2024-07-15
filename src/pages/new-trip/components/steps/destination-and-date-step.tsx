import { SetStateAction } from "react";
import {
  ArrowRight,
  CalendarIcon,
  MapPinIcon,
  Settings2Icon,
} from "lucide-react";

import { Button } from "../../../../components/button";

interface DestinationAndDateStepProps {
  isLocationAndDateInputEditable: boolean;
  destinationInput: string;
  setDestinationInput: (value: SetStateAction<string>) => void;
  dateInput: string;
  setDateInput: (value: SetStateAction<string>) => void;
  saveLocationAndDateInput: () => void;
  isGuestsInputOpen: boolean;
  openGuestsInput: () => void;
  editLocationAndDateInput: () => void;
}

export function DestinationAndDateStep({
  destinationInput,
  setDestinationInput,
  isLocationAndDateInputEditable,
  dateInput,
  setDateInput,
  saveLocationAndDateInput,
  isGuestsInputOpen,
  editLocationAndDateInput,
  openGuestsInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-zinc-900 p-4 text-lg shadow-shape md:h-16 md:flex-row md:items-center md:gap-5">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 items-center gap-x-2">
          <MapPinIcon strokeWidth={2} size={20} className="text-zinc-400" />
          <input
            type="text"
            value={destinationInput}
            disabled={isLocationAndDateInputEditable}
            onChange={(event) => setDestinationInput(event.target.value)}
            placeholder="para onde vai?"
            className="flex h-9 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
          />
        </div>
        <div className="flex items-center gap-x-2">
          <CalendarIcon strokeWidth={2} size={20} className="text-zinc-400" />
          <input
            type="text"
            value={dateInput}
            disabled={isLocationAndDateInputEditable}
            onChange={(event) => setDateInput(event.target.value)}
            placeholder="quando?"
            className="flex h-9 w-40 items-center bg-transparent placeholder-zinc-400 outline-none"
          />
        </div>
      </div>

      <div className="hidden bg-zinc-800 md:block md:h-9 md:w-px" />

      {isGuestsInputOpen && !isLocationAndDateInputEditable ? (
        <Button
          type="button"
          variant="secondary"
          size="md"
          onClick={saveLocationAndDateInput}
        >
          salvar mudanças
        </Button>
      ) : isGuestsInputOpen ? (
        <Button
          type="button"
          onClick={editLocationAndDateInput}
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
    </div>
  );
}
