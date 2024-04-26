import { IconName } from "@fortawesome/fontawesome-svg-core";

export interface ContractSections {
  title: string;
  icon: IconName;
  items: ContratSectionDetails[];
}

interface ContratSectionDetails {
  label: string;
  name: string;
  url?: string;
}
