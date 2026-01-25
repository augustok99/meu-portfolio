import { useContext } from "react";
import InViewContext from "./InViewContext";

export default function useInViewContext() {
  return useContext(InViewContext);
}
