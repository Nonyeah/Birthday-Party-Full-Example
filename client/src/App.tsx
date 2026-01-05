import Intro from "./intro";
import Facts from "./facts";
import Address from "./location";
import Registry from "./registry";
import RSVP from "./rsvp";
import TriviaTitle from "./Trivia";
import ScrollHeader from "./scrollHeader";
import { useRef } from "react";

export interface ScrollBlocks {
  id: number;
  label: string;
}

export interface ScrollObj {
scrollItems: Array<ScrollBlocks>
};

export const scrollObj: ScrollObj = {
  scrollItems : [
  { id: 0, label: "intro" },
  { id: 1, label: "trivia" },
  { id: 2, label: "location" },
  { id: 3, label: "registry" },
  { id: 4, label: "rsvp" },
  ]
};

function App(props: ScrollObj) {
  const introRef: React.RefObject<HTMLDivElement | null> = useRef<null>(null);
  const triviaRef: React.RefObject<HTMLDivElement | null> = useRef<null>(null);
  const locationRef: React.RefObject<HTMLDivElement | null> = useRef<null>(null);
  const registryRef: React.RefObject<HTMLDivElement | null> = useRef<null>(null);
  const rsvpRef: React.RefObject<HTMLFormElement | null> = useRef<null>(null);

  function handleScroll(id: number) {
    const match: ScrollBlocks | undefined = props.scrollItems.find(
      (refblock) => refblock.id === id
    );
    if (match) {
      switch (match.label) {
        case "intro": {
          introRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          break;
        }
        case "trivia": {
          triviaRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          break;
        }
        case "location": {
          locationRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          break;
        }

        case "registry": {
          registryRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          break;
        }

        case "rsvp": {
          rsvpRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          break;
        }

        default: {
          introRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
          break;
        }
      }
    }
  }

  return (
    <div className="parent-app-container">
      <ScrollHeader data={props} handleScroll={handleScroll} />
      <Intro introref={introRef} />
      <TriviaTitle  />
      <Facts triviaref={triviaRef} />
      <Address locationref={locationRef} />
      <Registry registryref={registryRef} />
      <RSVP rsvpref={rsvpRef} />
    </div>
  );
}

export default App;
