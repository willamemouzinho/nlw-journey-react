import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CircleCheckIcon, CircleDashedIcon, UserCogIcon } from "lucide-react";

import { Button } from "../../../components/button";
import { api } from "../../../lib/api";

interface Participant {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
  is_owner: boolean;
}

export function Guests() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    async function fetchTrip() {
      const response = await api.get(`/trips/${tripId}/participants`);
      const { participants } = response.data;
      setParticipants(participants);
    }

    fetchTrip();
  }, [tripId]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-zinc-50">Convidados</h1>
      <div className="flex flex-col gap-5">
        {participants.map((participant, index) => (
          <div key={participant.id} className="flex items-center gap-2">
            <div className="flex flex-1 flex-col gap-1.5">
              <span className="font-mediums flex items-center gap-3 text-zinc-100">
                {participant.name ? participant.name : `Convidado ${index}`}

                {participant.is_owner && (
                  <span className="flex h-4 items-center justify-between rounded-full bg-zinc-800 px-2 text-[10px] uppercase leading-none tracking-widest text-zinc-300">
                    criador
                  </span>
                )}
              </span>
              <span className="text-sm text-zinc-400">{participant.email}</span>
            </div>
            {participant.is_confirmed ? (
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
          </div>
        ))}
      </div>

      <Button type="button" variant="secondary">
        <UserCogIcon strokeWidth={1.5} size={20} className="" />
        gerenciar convidados
      </Button>
    </div>
  );
}
