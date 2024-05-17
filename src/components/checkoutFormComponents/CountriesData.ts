export type CountryType = {
  value: string;
  label: string;
};

export type StateType = {
  value: string;
  label: string;
};

export type StatesByCountryType = {
  [key: string]: StateType[];
};

export const countries: CountryType[] = [
  { value: "UnitedStates", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "UnitedKingdom", label: "United Kingdom" },
];

export const statesByCountry: StatesByCountryType = {
  UnitedStates: [
    { value: "NY", label: "New York" },
    { value: "CA", label: "California" },
  ],
  Canada: [
    { value: "ON", label: "Ontario" },
    { value: "QC", label: "Quebec" },
  ],
  Australia: [
    { value: "NSW", label: "New South Wales" },
    { value: "VIC", label: "Victoria" },
  ],
  UnitedKingdom: [
    { value: "ENG", label: "England" },
    { value: "SCT", label: "Scotland" },
  ],
};
