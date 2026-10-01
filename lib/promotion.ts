import { Promotion } from "@/data/promotions";

export function getActivePromotions(
  promotions: Promotion[],
  date = new Date()
) {
  return promotions.filter((promotion) => {
    const startsAt = new Date(promotion.startsAt);
    const endsAt = new Date(promotion.endsAt);

    return date >= startsAt && date <= endsAt;
  });
}

export function getDailyIndex(
  itemCount: number,
  date = new Date()
) {
  if (itemCount === 0) {
    return -1;
  }

  const day = Math.floor(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate()
    ) / 86400000
  );

  return day % itemCount;
}

export function filterPromotionItems<T extends { manufacturer?: string }>(
  items: T[],
  promotion: Promotion
) {
  if (!promotion.filter?.manufacturer) {
    return items;
  }

  return items.filter(
    (item) =>
      item.manufacturer?.toLowerCase() ===
      promotion.filter?.manufacturer?.toLowerCase()
  );
}