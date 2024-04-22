export interface ContractSections {
  id: string;
  title: string;
  icon: string;
  details: ContratSectionDetails[];
}

interface ContratSectionDetails {
  detail: string | number;
}
