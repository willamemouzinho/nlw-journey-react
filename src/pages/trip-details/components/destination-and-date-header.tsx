import { MapPinIcon, CalendarIcon, Settings2Icon } from "lucide-react";

import { Button } from "../../../components/button";

interface DestinationAndDateHeaderProps {}

export function DestinationAndDateHeader({}: DestinationAndDateHeaderProps) {
  return (
    <div className="flex w-full flex-col gap-4 rounded-xl bg-zinc-900 p-4 text-lg shadow-shape md:h-16 md:flex-row md:items-center md:gap-5">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 items-center gap-x-2">
          <MapPinIcon strokeWidth={2} size={20} className="text-zinc-400" />
          <input
            type="text"
            value={"destinationInput"}
            disabled
            // disabled={isLocationAndDateInputEditable}
            // onChange={(event) => setDestinationInput(event.target.value)}
            placeholder="para onde vai?"
            className="flex h-9 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
          />
        </div>
        <div className="flex items-center gap-x-2">
          <CalendarIcon strokeWidth={2} size={20} className="text-zinc-400" />
          <input
            type="text"
            value={"dateInput"}
            disabled
            // disabled={isLocationAndDateInputEditable}
            // onChange={(event) => setDateInput(event.target.value)}
            placeholder="quando?"
            className="flex h-9 w-40 items-center bg-transparent placeholder-zinc-400 outline-none"
          />
        </div>
      </div>

      <div className="hidden bg-zinc-800 md:block md:h-9 md:w-px" />

      <Button type="button" variant="secondary" size="md">
        alterar local/data
        <Settings2Icon strokeWidth={1.5} size={20} className="" />
      </Button>
      {/* {isGuestsInputOpen && !isLocationAndDateInputEditable ? (
              <button
                type="button"
                onClick={saveLocationAndDateInput}
                className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 px-5 text-base font-medium text-zinc-200 transition-colors hover:cursor-pointer hover:bg-zinc-700"
              >
                salvar mudanças
              </button>
            ) : isGuestsInputOpen ? (
              <button
                type="button"
                onClick={editLocationAndDateInput}
                className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 px-5 text-base font-medium text-zinc-200 transition-colors hover:cursor-pointer hover:bg-zinc-700"
              >
                alterar local/data
                <Settings2Icon strokeWidth={1.5} size={20} className="" />
              </button>
            ) : (
              <button
                type="button"
                onClick={openGuestsInput}
                className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-lime-300 px-5 text-base font-medium text-lime-950 transition-colors hover:cursor-pointer hover:bg-lime-400"
              >
                continuar
                <ArrowRight strokeWidth={1.5} size={20} className="" />
              </button>
            )} */}
    </div>
  );
}
