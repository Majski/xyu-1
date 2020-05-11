import React from "react";

export interface SpacerProps {
  height: string | number;
}

export const Spacer: React.FC<SpacerProps> = ({ height }) => {
  return <div css={{ height }} />;
};
