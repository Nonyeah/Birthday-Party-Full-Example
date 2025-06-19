import { useState, useEffect, useRef } from "react";

export default function Intro({introref}: {introref: React.RefObject<HTMLDivElement|null>}) {
  const pictureRef = useRef<null | HTMLDivElement>(null);
  const [rotate, setrotate] = useState<boolean>(false);

  useEffect(() => {
    let id: any = setTimeout(() => setrotate(!rotate), 1000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div ref={introref} className="intro-container">
      <h4>Saturday November 1st 2025</h4>

      <div
        className={`photo ${rotate ? "rotate-pic" : ""}`}
        ref={pictureRef}
      ></div>
      <h1>Our beloved Mother turns 80 this year!</h1>

      <p>To Christ Jesus be the glory!</p>
      <p>
        Come help us celebrate the 80th birthday of our beloved mother,
        grandmother, sister, aunty, cousin and friend to many, Mrs Ethel Ulasi,
        who on 31st October 2025, will have been alive to witness the earth
        rotate around the sun 80 times. How amazing is that! We are truly
        grateful to God and our Lord Jesus Christ, for blessing our dear mother
        with such a long and fruitful life and we pray our good God will
        continue to satisfy her with His everlasting goodness.
      </p>
      <p>
        Come join us as we celebrate! Let's eat some delicious food, drink until
        we are merry and{" "}
        <p>
          <span>DANCE, DANCE, DANCE!</span>
        </p>
      </p>
    </div>
  );
}
