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

export default function Home() {
  const [replay, setReplay] = useState(true);
  const [currentquote, setCurrentquote] = useState(0);
  const [activequote, setActivequote] = useState([
    {
      type: "heading1",
      text: '"Just because I\'m losing',
    },
    {
      type: "heading2",
      text: 'doesn\'t mean I\'m lost"',
    },
  ]);
  var defaultquote = [
    {
      type: "heading1",
      text: '"In the end, it\'s all about',
    },
    {
      type: "heading2",
      text: 'The love you\'re sending out"',
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
  // const SLIDE_COUNT = {slides}
  const SLIDES = slides;
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
          <div className="dark:text-white text-black text-sm md:text-3xl max-w-xl mt-6 text-center">
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
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        className="max-w-full"
      />
    </>
  );
}
const slides = [
  {
    src: "./coldplay.png",
    href: "/",
  },
  {
    src: "./musicofthespheres.jpeg",
    href: "/about",
  },
  {
    src: "./musicofthespheres.jpeg",
    href: "/about",
  },
];

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
