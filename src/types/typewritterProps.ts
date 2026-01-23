export type TypewriterProps = {
  text: string;
  speed?: number; // ms por caractere
  showCursor?: boolean;
  cursorChar?: string;
  cursorColor?: string;
  startOnView?: boolean;
  className?: string;
  style?: React.CSSProperties;
  mdBreakToken?: string; // Token para quebra de linha em desktop
};
