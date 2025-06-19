import { useState, useEffect, useRef } from "react";

interface Data {
  id: number;
  label: string;
  text: string | string[];
  counter: number;
  setcounter: (param: number) => void;
}

interface EventData {
  id: number;
  label: string;
  text: string | string[];
}

const data: Array<EventData> = [
  { id: 0, label: "Date:", text: "Saturday November 1st 2025" },
  { id: 1, label: "Time:", text: "6pm - 11.30pm" },
  {
    id: 2,
    label: "Where:",
    text: [
      "Learie Constantine Centre",
      "Villiers Road (nearest tube station - Dollis Hill)",
      "London NW2 2FD",
    ],
  },
  {
    id: 3,
    label: "Parking:",
    text: "An abundance of free parking bays are available on the main road and surrounding roads all day",
  },
  {
    id: 4,
    label: "Dress Code:",
    text: "Glam up in your best party attire and come looking Instagram ready!",
  },
  {
    id: 5,
    label: "Itinerary:",
    text: [
      "6pm - 6.30pm: &nbsp; Arrival of guests",
      "6.45pm - 7pm: &nbsp; Opening prayer and introductions",
      "7.15pm - 8pm: &nbsp; Family presentation and MC takeover",
      "8.15pm - 9.15pm: &nbsp; Delicious dinner and cutting of birthday cake",
      "9.30pm - 11.30pm: &nbsp; Dance floor opens. Let's shake a leg or two to some good grooves",
    ],
  },
  {
    id: 6,
    label: "Details:",
    text: " Please arrive on time so you don't miss out on the good parts of the evening. This is an adult only event so we politely ask that only those directly invited attend. We can of course accommodate adult family members who are accompanying elderly guests.",
  },
];

function CreateItinerary({ id, label, text, counter, setcounter }: Data) {
  const labelRef = useRef<null | HTMLParagraphElement>(null);
  const textRef = useRef<null | HTMLParagraphElement>(null);

  useEffect(() => {
    setTimeout(() => {
      let timerId: any;
      //if the individual React element node id matches the shared state variable count run the effect
      if (id === counter) {
        new Promise<string>((resolve: (value: string) => void) => {
          //obtain the value of the label string variable via a promise and resolve after 3s
          timerId = setTimeout(() => resolve(label), 4000);
        })
          .then((label) => {
            let i = 0;
            let intervalId: any = setInterval(() => {
              //append each character in the label string to the DOM
              if (i < label.length && labelRef.current) {
                labelRef.current!.innerHTML += label[i];
                i++;
              } else {
                clearInterval(intervalId);
              }
            }, 200);
            return text;
          })
          .then((textvalue) => {
            setTimeout(() => {
              let n = 0;
              let intervalId: any;
              if (typeof textvalue === "string") {
                const arr: string[] = textvalue.split(" ");
                intervalId = setInterval(() => {
                  if (n < arr.length && textRef.current) {
                    textRef.current!.innerHTML += `${arr[n]} `;
                    n++;
                  } else {
                    clearInterval(intervalId);
                  }
                }, 200);
                setcounter(counter + 1);
              } else if (Array.isArray(textvalue)) {
                let intervalId: any = setInterval(() => {
                  if (n < textvalue.length && textRef.current) {
                    textRef.current!.innerHTML += `${textvalue[n]} <br>`;
                    n++;
                  } else {
                    clearInterval(intervalId);
                  }
                }, 200);
                setcounter(counter + 1);
              }
            }, 2000);
          });
      }
      return () => clearInterval(timerId);
    }, id);
  }, [counter]);

  return (
    <div className="itin-inner">
      <p className="left" ref={labelRef}></p>
      <p className="right" ref={textRef}></p>
    </div>
  );
}

export default function Address({locationref}: {locationref: React.RefObject<HTMLDivElement|null>}) {
  const titleRef = useRef<null | HTMLHeadingElement>(null);
  const titleText = "Where we plan to party?";
  const [count, setcounter] = useState<number>(0);

  const details = data.map((eventinfo) => {
    return (
      <CreateItinerary
        key={eventinfo.id}
        id={eventinfo.id}
        label={eventinfo.label}
        text={eventinfo.text}
        counter={count}
        setcounter={setcounter}
      />
    );
  });

  //parent effect runs once on initial mount
  useEffect(() => {
    let i = 200;
    let timeouts: any[] = [];

    for (let char of titleText) {
      const timeoutId = setTimeout(() => {
        titleRef.current!.innerHTML += char;
      }, 2000 + (i += 100));
      timeouts.push(timeoutId);
    }

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div ref={locationref} className="address-container">
      <h2 ref={titleRef}></h2>

      <div className="address-details">{details}</div>
    </div>
  );
}
