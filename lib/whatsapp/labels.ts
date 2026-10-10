import type { Lang, SelectOption } from '@/data/types';

/** Readable text of a dropdown value (falls back to the raw value) */
export const labelOf = (options: SelectOption[], value: string, lang: Lang) =>
  options.find((o) => o.value === value)?.label[lang] ?? value;
