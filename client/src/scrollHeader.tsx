
import type { ScrollObj } from "./App"

interface ScrollData {
  data: ScrollObj;
  handleScroll: (id: number) => void;
}

export default function ScrollHeader({ data, handleScroll }: ScrollData) {
  const topList = data.scrollItems.map((header) => {
    return (
      <li key={header.id} onClick={() => handleScroll(header.id)}>
        {header.label}
      </li>
    );
  });

  return (
    <div className="header-container">
      <ul>{topList}</ul>
    </div>
  );
}
