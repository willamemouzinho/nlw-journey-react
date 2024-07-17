import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link2Icon, PlusIcon } from "lucide-react";

import { Button } from "../../../components/button";
import { api } from "../../../lib/api";

interface ImportantLinksProps {
  openCreateLinkModal: () => void;
}
interface Link {
  id: string;
  title: string;
  url: string;
  trip_id: string;
}

export function ImportantLinks({ openCreateLinkModal }: ImportantLinksProps) {
  const { tripId } = useParams();

  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    async function fetchTrip() {
      const response = await api.get(`/trips/${tripId}/links`);
      const { links } = response.data;
      setLinks(links);
    }

    fetchTrip();
  }, [tripId]);

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-zinc-50">Links importantes</h1>
      <div className="flex flex-col gap-5">
        {links.map((link) => (
          <a key={link.id} href={link.url} className="flex items-center gap-10">
            <div className="flex flex-1 flex-col gap-1.5">
              <span className="font-mediums text-zinc-100">{link.title}</span>
              <span className="truncate text-xs text-zinc-400 transition-colors hover:text-zinc-300">
                {link.url}
              </span>
            </div>
            <Link2Icon strokeWidth={2} size={20} className="text-zinc-400" />
          </a>
        ))}
      </div>

      <Button type="button" onClick={openCreateLinkModal} variant="secondary">
        <PlusIcon strokeWidth={1.5} size={20} className="" />
        cadastrar novo link
      </Button>
    </div>
  );
}
