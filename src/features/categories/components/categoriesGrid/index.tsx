import { ReactNode } from "react";

// !Props
type Props = {
  children: ReactNode;
  "data-cy"?: string;
  "data-testid"?: string;
};

// !Categories grid
function CategoriesGrid({ children, ...props }: Props) {
  return (
    <div className="grid grid-cols-auto-1 justify-center gap-6" {...props}>
      {children}
    </div>
  );
}

export default CategoriesGrid;
