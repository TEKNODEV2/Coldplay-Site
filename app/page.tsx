"use client";
import * as React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import EmblaCarousel from "@/components/embla/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import "@/components/embla/ciccio.css";
import "@/components/embla/embla.css";
import { Vortex } from "@/components/ui/vortex";
import AnimatedCharacters from "@/components/ui/animated-text";
import { useEffect, useState } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
  const [replay, setReplay] = useState(true);
  const [currentquote, setCurrentquote] = useState(0);
  const [activequote, setActivequote] = useState([
    {
      type: "heading1",
      text: "\"Just\u00A0because\u00A0I'm\u00A0losing",
    },
    {
      type: "heading2",
      text: "doesn't mean I'm lost\"",
    },
  ]);
  var defaultquote = [
    {
      type: "heading1",
      text: "\"In the end, it's all about",
    },
    {
      type: "heading2",
      text: "The love you're sending out\"",
    },
  ];
  const quote1 = [
    {
      type: "heading1",
      text: '"Look at the stars',
    },
    {
      type: "heading2",
      text: 'look how they shine for you"',
    },
  ];
  const quote2 = [
    {
      type: "heading1",
      text: '"I have no doubt',
    },
    {
      type: "heading2",
      text: 'one day the sun will come out"',
    },
  ];
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleReplay();
    }, 10000);

    return () => clearInterval(intervalId); // This is to clear the interval when the component unmounts
  }, []);

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setCurrentquote((prevQuote) => {
        let nextQuote = 0;
        if (prevQuote === 0) {
          setActivequote(quote1);
          nextQuote = 1;
        } else if (prevQuote === 1) {
          setActivequote(quote2);
          nextQuote = 2;
        } else if (prevQuote === 2) {
          setActivequote(defaultquote);
          nextQuote = 0;
        }
        return nextQuote;
      });
    }, 700);

    setTimeout(() => {
      setReplay(true);
    }, 900);
  };

  const OPTIONS: EmblaOptionsType = {
    dragFree: false,
    loop: true,
    containScroll: false,
  };
  return (
    <>
      <div className="w-screen mx-auto rounded-md  h-screen overflow-hidden">
        <Vortex
          // backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <h2 className="dark:text-white text-black text-6xl md:text-9xl font-bold text-center">
            Coldplay
          </h2>
          <div className="dark:text-white text-black mt-6 mx-auto text-3xl md:text-4xl font-bold text-center">
            <motion.div
              className="App"
              initial="hidden"
              animate={replay ? "visible" : "hidden"}
              variants={container}
            >
              <div className="container">
                {activequote.map((item, index) => {
                  return <AnimatedCharacters {...item} key={index} />;
                })}
              </div>
            </motion.div>
            {/* <FlipWords words={line1} />
            <br />
            <FlipWords words={line2} /> */}
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
              Order now
            </button>
            <button className="px-4 py-2 dark:text-white text-black ">
              Watch trailer
            </button>
          </div>
        </Vortex>
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
        className="max-w-full"
      />
      {/* <EmblaCarousel
        slides={5}
        options={{ dragFree: false, loop: true, containScroll: false }}
      ></EmblaCarousel> */}
    </>
  );
}

const testimonials = [
  {
    date: "Dom 26 mag 2024",
    time: "10:30 AM",
    place: "Luton - Stockwood Park",
    image: "./coldplay.png",
  },
  {
    date: "Sab 8 giu 2024",
    time: "6 PM",
    place: "Marousi - Athens Olympic Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Sab 22 giu 2024",
    time: "6:30 PM",
    place: "Decines Charpieu, 69 - GROUPAMA STADIUM",
    image: "./coldplay.png",
  },
  {
    date: "Dom 23 giu 2024",
    time: "6:30 PM",
    place: "Decines Charpieu, 69 - GROUPAMA STADIUM",
    image: "./coldplay.png",
  },
  {
    date: "Mar 25 giu 2024",
    time: "6:30 PM",
    place: "Decines Charpieu, 69 - GROUPAMA STADIUM",
    image: "./coldplay.png",
  },
  {
    date: "Ven 12 lug 2024",
    time: "5:00 PM",
    place: "Roma - Stadio Olimpico di Roma",
    image: "./coldplay.png",
  },
  {
    date: "Sab 13 lug 2024",
    time: "5:00 PM",
    place: "Roma - Stadio Olimpico di Roma",
    image: "./coldplay.png",
  },
  {
    date: "Lun 15 lug 2024",
    time: "5:00 PM",
    place: "Roma - Stadio Olimpico di Roma",
    image: "./coldplay.png",
  },
  {
    date: "Mar 16 lug 2024",
    time: "5:00 PM",
    place: "Roma - Stadio Olimpico di Roma",
    image: "./coldplay.png",
  },
  {
    date: "Sab 20 lug 2024",
    time: "6:45 PM",
    place: "Düsseldorf - MERKUR SPIEL-ARENA",
    image: "./coldplay.png",
  },
  {
    date: "Dom 21 lug 2024",
    time: "6:45 PM",
    place: "Düsseldorf - MERKUR SPIEL-ARENA",
    image: "./coldplay.png",
  },
  {
    date: "Mar 23 lug 2024",
    time: "6:45 PM",
    place: "Düsseldorf - MERKUR SPIEL-ARENA",
    image: "./coldplay.png",
  },
  {
    date: "Gio 15 ago 2024",
    time: "6:30 PM",
    place: "München - Olympiastadion",
    image: "./coldplay.png",
  },
  {
    date: "Sab 17 ago 2024",
    time: "6:30 PM",
    place: "München - Olympiastadion",
    image: "./coldplay.png",
  },
  {
    date: "Dom 18 ago 2024",
    time: "6:30 PM",
    place: "München - Olympiastadion",
    image: "./coldplay.png",
  },
  {
    date: "Mer 21 ago 2024",
    time: "5:00 PM",
    place: "Wien - Ernst-Happel-Stadion",
    image: "./coldplay.png",
  },
  {
    date: "Gio 22 ago 2024",
    time: "5:00 PM",
    place: "Wien - Ernst-Happel-Stadion",
    image: "./coldplay.png",
  },
  {
    date: "Sab 24 ago 2024",
    time: "5:00 PM",
    place: "Wien - Ernst-Happel-Stadion",
    image: "./coldplay.png",
  },
  {
    date: "Dom 25 ago 2024",
    time: "5:00 PM",
    place: "Wien - Ernst-Happel-Stadion",
    image: "./coldplay.png",
  },
  {
    date: "Gio 29 ago 2024",
    time: "5:00 PM",
    place: "Dublin - Croke Park",
    image: "./coldplay.png",
  },
  {
    date: "Ven 30 ago 2024",
    time: "5:00 PM",
    place: "Dublin - Croke Park",
    image: "./coldplay.png",
  },
  {
    date: "Dom 1 set 2024",
    time: "5:00 PM",
    place: "Dublin - Croke Park",
    image: "./coldplay.png",
  },
  {
    date: "Lun 2 set 2024",
    time: "5:00 PM",
    place: "Dublin - Croke Park",
    image: "./coldplay.png",
  },
  {
    date: "Mer 30 ott 2024",
    time: "5:00 PM",
    place: "Docklands, VIC - Marvel Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Gio 31 ott 2024",
    time: "5:00 PM",
    place: "Docklands, VIC - Marvel Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Sab 2 nov 2024",
    time: "5:00 PM",
    place: "Docklands, VIC - Marvel Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Dom 3 nov 2024",
    time: "5:00 PM",
    place: "Docklands, VIC - Marvel Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Mer 6 nov 2024",
    time: "7:00 PM",
    place: "Sydney Olympic Park, NSW - Accor Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Gio 7 nov 2024",
    time: "7:00 PM",
    place: "Sydney Olympic Park, NSW - Accor Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Sab 9 nov 2024",
    time: "7:00 PM",
    place: "Sydney Olympic Park, NSW - Accor Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Dom 10 nov 2024",
    time: "7:00 PM",
    place: "Sydney Olympic Park, NSW - Accor Stadium",
    image: "./coldplay.png",
  },
  {
    date: "Mer 13 nov 2024",
    time: "5:00 PM",
    place: "Auckland, NZ - Eden Park",
    image: "./coldplay.png",
  },
  {
    date: "Ven 15 nov 2024",
    time: "5:00 PM",
    place: "Auckland, NZ - Eden Park",
    image: "./coldplay.png",
  },
  {
    date: "Sab 16 nov 2024",
    time: "5:00 PM",
    place: "Auckland, NZ - Eden Park",
    image: "./coldplay.png",
  },
];
