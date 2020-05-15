import React from "react";

export interface SpacerProps {
  height: string | number;
  bgColor?: string;
}

export const Spacer: React.FC<SpacerProps> = ({ height, bgColor = "#000" }) => {
  return <div css={{ height, backgroundColor: bgColor }} />;
};
