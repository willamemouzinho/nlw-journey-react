import { Link2Icon, PlusIcon } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {}

export function ImportantLinks({}: ImportantLinksProps) {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-xl font-semibold text-zinc-50">Links importantes</h1>
      <div className="flex flex-col gap-5">
        <a href="#" className="flex items-center gap-10">
          <div className="flex flex-1 flex-col gap-1.5">
            <span className="font-mediums text-zinc-100">
              Reserva do AirBnB
            </span>
            <span className="truncate text-xs text-zinc-400 transition-colors hover:text-zinc-300">
              https://www.airbnb.com.br/rooms/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
            </span>
          </div>
          <Link2Icon strokeWidth={2} size={20} className="text-zinc-400" />
        </a>
      </div>

      <Button type="button" variant="secondary">
        <PlusIcon strokeWidth={1.5} size={20} className="" />
        cadastrar novo link
      </Button>
    </div>
  );
}
