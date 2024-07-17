import { PlusIcon, CircleCheckIcon, CircleDashedIcon } from "lucide-react";
import { isBefore } from "date-fns";

import { Button } from "../../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { format } from "../../../lib/date-fns";

interface ActivitiesProps {
  openCreateActivityModal: () => void;
}
interface Activity {
  date: string;
  activities: {
    id: string;
    title: string;
    occurs_at: string;
    trip_id: string;
  }[];
}

export function Activities({ openCreateActivityModal }: ActivitiesProps) {
  const { tripId } = useParams();

  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    async function fetchTrip() {
      const response = await api.get(`/trips/${tripId}/activities`);
      const { activities } = response.data;
      setActivities(activities);
    }

    fetchTrip();
  }, [tripId]);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-semibold text-zinc-50">Atividades</h1>

        <Button type="button" onClick={openCreateActivityModal}>
          <PlusIcon strokeWidth={1.5} size={20} className="" />
          cadastrar atividade
        </Button>
      </div>

      <ul className="flex flex-col gap-8">
        {activities.map((activity) => (
          <li key={activity.date} className="flex flex-col gap-3">
            <h2 className="flex items-end gap-2 text-xl font-semibold">
              Dia {format(activity.date, "d")}{" "}
              <span className="text-xs font-normal text-zinc-500">
                {format(activity.date, "EEEE")}
              </span>
            </h2>

            {activity.activities.length > 0 ? (
              <ul className="flex flex-col gap-3">
                {activity.activities.map((activityOfDay) => (
                  <li
                    key={activityOfDay.id}
                    className="flex h-10 items-center gap-3 rounded-xl bg-zinc-900 px-4"
                  >
                    {isBefore(activityOfDay.occurs_at, new Date()) ? (
                      <CircleCheckIcon
                        strokeWidth={2}
                        size={20}
                        className="text-lime-300"
                      />
                    ) : (
                      <CircleDashedIcon
                        strokeWidth={2}
                        size={20}
                        className="text-zinc-400"
                      />
                    )}
                    <span className="flex-1 text-zinc-100">
                      {activityOfDay.title}
                    </span>
                    <span className="text-sm text-zinc-400">
                      {format(activityOfDay.occurs_at, "HH:mm")}h
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <span className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
