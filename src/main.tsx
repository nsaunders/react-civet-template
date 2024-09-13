import { createRoot } from "react-dom/client";

// @ts-expect-error not a TypeScript module
import Counter from "./components/Counter";

const hostElement = document.getElementById("root");
if (hostElement) {
  createRoot(hostElement).render(<Counter />);
}
