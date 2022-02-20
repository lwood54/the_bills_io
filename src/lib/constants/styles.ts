export const BTN_VARIANT = {
  PRIMARY: 'primary',
  NEGATIVE: 'negative',
  NO_COLOR: 'no-color'
} as const;
export type BtnVariant = typeof BTN_VARIANT[keyof typeof BTN_VARIANT];
