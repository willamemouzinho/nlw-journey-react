import { DateBefore, DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import "react-day-picker/dist/style.css";
import { XIcon } from "lucide-react";

interface DatePickerProps {
  tripStartAndEndDates: DateRange | undefined;
  setTripStartAndEndDates: (startAndEndDates: DateRange | undefined) => void;
  closeDatePickerModal: () => void;
}

export function DatePicker({
  closeDatePickerModal,
  tripStartAndEndDates,
  setTripStartAndEndDates,
}: DatePickerProps) {
  const beforeMatcher: DateBefore = { before: new Date() };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 px-4">
      <div className="flex flex-col gap-5 rounded-xl bg-zinc-900 px-4 py-3 md:px-6 md:py-5">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">
              Selecione a data
            </h2>
            <button type="button" onClick={closeDatePickerModal}>
              <XIcon strokeWidth={2} size={20} className="text-zinc-400" />
            </button>
          </div>

          <div>
            <DayPicker
              mode="range"
              selected={tripStartAndEndDates}
              onSelect={setTripStartAndEndDates}
              disabled={beforeMatcher}
              locale={ptBR}
              className="m-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
