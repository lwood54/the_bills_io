export const BTN_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NEGATIVE: 'negative',
  NO_COLOR: 'no-color'
} as const;
export type BtnVariant = typeof BTN_VARIANT[keyof typeof BTN_VARIANT];

export const INPUT_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NEGATIVE: 'negative'
} as const;
export type InputVariant = typeof INPUT_VARIANT[keyof typeof INPUT_VARIANT];

export const POSITION = {
  CENTER: 'center',
  END: 'end',
  START: 'start'
} as const;
export type Position = typeof POSITION[keyof typeof POSITION];
