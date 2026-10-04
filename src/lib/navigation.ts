export const sectionIds = [
  "home",
  "stack",
  "expertise",
  "projects",
  "about",
  "contact",
] as const;

export type SectionId =
  (typeof sectionIds)[number];

export function isSectionId(
  value: string,
): value is SectionId {
  return sectionIds.includes(
    value as SectionId,
  );
}
