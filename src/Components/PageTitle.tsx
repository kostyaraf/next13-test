import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function PageTitle({ children }: Props) {
  return <h1 className="text-4xl font-bold mb-4">{children}</h1>;
}
