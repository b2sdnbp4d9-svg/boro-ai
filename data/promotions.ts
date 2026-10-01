export type Promotion = {
  id: string;
  sponsor: string;
  contentType: string;

  filter?: {
    manufacturer?: string;
  };

  startsAt: string;
  endsAt: string;

  homePage: boolean;
};

export const promotions: Promotion[] = [
  {
    id: "northstar-colors-october",
    sponsor: "Northstar",
    contentType: "colors",

    filter: {
      manufacturer: "Northstar",
    },

    startsAt: "2026-10-01T00:00:00",
    endsAt: "2026-10-31T23:59:59",

    homePage: true,
  },
];