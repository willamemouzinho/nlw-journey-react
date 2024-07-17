import { format, setDefaultOptions } from "date-fns";
import { ptBR } from "date-fns/locale";

setDefaultOptions({ locale: ptBR });

export { format };
