import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
export default function PageTitle({ children }: Props) {
  return <h1 style={{marginBottom: 20, fontWeight: 'bold', fontSize: 40}}>{children}</h1>;
}
