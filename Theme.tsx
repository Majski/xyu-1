const screenSizes = {
  TABLET: 992,
};

const bp = {
  FROM_TABLET: `@media (min-width: ${screenSizes.TABLET}px)`,
};

export const theme = { bp, screenSizes };
