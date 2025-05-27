import type { MouseEventHandler } from "react";

export interface IconPropsType {
  className?: string;
  onClick?: MouseEventHandler<SVGSVGElement> | undefined;
}
