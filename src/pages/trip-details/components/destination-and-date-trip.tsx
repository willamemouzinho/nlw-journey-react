import { MapPinIcon, CalendarIcon, Settings2Icon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { format } from "../../../lib/date-fns";
import { DatePicker } from "../../../components/date-picker";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function DestinationAndDateTrip() {
  const { tripId } = useParams();

  const [trip, setTrip] = useState<Trip | undefined>();
  const [destination, setDestination] = useState<string>("");

  const initiallySelectedDates =
    trip &&
    ({
      from: new Date(trip.ends_at),
      to: new Date(trip.starts_at),
    } as DateRange);

  const [tripStartAndEndDates, setTripStartAndEndDates] = useState<
    DateRange | undefined
  >();

  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isEditingTripDateAndDestination, setIsEditingTripDateAndDestination] =
    useState(false);

  useEffect(() => {
    async function fetchTrip() {
      const response = await api.get(`/trips/${tripId}`);
      const { trip } = response.data;
      setTrip(trip);
    }

    fetchTrip();
  }, [tripId]);

  useEffect(() => {
    trip && setDestination(trip.destination);
    setTripStartAndEndDates(initiallySelectedDates);
    // trip && setTripStartAndEndDates();
  }, [trip]);

  const formattedTripDate = (() => {
    if (!trip) return null;

    const fromDay = format(trip.starts_at, "d");
    const fromMonth = format(trip.starts_at, "MMMM");
    const toDay = format(trip.ends_at, "d");
    const toMonth = format(trip.ends_at, "MMMM");

    if (fromDay === toDay && fromMonth === toMonth) {
      return `${fromDay} de ${fromMonth}`;
    }

    if (fromMonth === toMonth) {
      return `${fromDay} a ${toDay} de ${fromMonth}`;
    }

    return `${fromDay} de ${fromMonth} a ${toDay} de ${toMonth}`;
  })();

  const formattedNewTripDate = (() => {
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

  function editTripDateAndDestination() {
    setIsEditingTripDateAndDestination(true);
  }

  async function saveTripDateAndDestination() {
    console.log({ destination, tripStartAndEndDates });

    if (!destination || !tripStartAndEndDates) {
      return;
    }

    await api.put(`/trips/${tripId}`, {
      destination,
      starts_at: tripStartAndEndDates.from,
      ends_at: tripStartAndEndDates.to,
    });

    setIsEditingTripDateAndDestination(false);
    window.location.reload();
  }

  function openDatePickerModal() {
    setIsDatePickerOpen(true);
  }

  function closeDatePickerModal() {
    setIsDatePickerOpen(false);
  }

  return (
    <div className="flex w-full flex-col gap-6 rounded-xl bg-zinc-900 p-4 text-lg shadow-shape md:h-16 md:flex-row md:items-center md:gap-5">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 items-center gap-x-2 text-zinc-100">
          <MapPinIcon strokeWidth={2} size={20} className="text-zinc-400" />

          {isEditingTripDateAndDestination ? (
            <input
              type="text"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
              placeholder="para onde vai?"
              className="flex h-9 w-full items-center bg-transparent placeholder-zinc-400 outline-none"
            />
          ) : (
            <span>{trip?.destination}</span>
          )}
        </div>

        <button
          type="button"
          disabled={!isEditingTripDateAndDestination}
          onClick={openDatePickerModal}
          className="flex items-center gap-2 text-zinc-400"
        >
          <CalendarIcon strokeWidth={2} size={20} />

          {tripStartAndEndDates &&
          tripStartAndEndDates.from &&
          tripStartAndEndDates.to
            ? formattedNewTripDate
            : formattedTripDate}
        </button>
      </div>

      <div className="hidden bg-zinc-800 md:block md:h-9 md:w-px" />

      {isEditingTripDateAndDestination ? (
        <Button
          type="button"
          onClick={saveTripDateAndDestination}
          variant="secondary"
          size="md"
          className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 px-5 text-base font-medium text-zinc-200 transition-colors hover:cursor-pointer hover:bg-zinc-700"
        >
          salvar mudanças
        </Button>
      ) : (
        <Button
          type="button"
          onClick={editTripDateAndDestination}
          variant="secondary"
          size="md"
          className="flex h-9 items-center justify-center gap-x-2 rounded-lg bg-zinc-800 px-5 text-base font-medium text-zinc-200 transition-colors hover:cursor-pointer hover:bg-zinc-700"
        >
          alterar local/data
          <Settings2Icon strokeWidth={1.5} size={20} />
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
