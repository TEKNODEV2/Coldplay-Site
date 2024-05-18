import React from "react";
import { motion } from "framer-motion";

// Word wrapper
const Wrapper: React.FC<{ children: React.ReactNode }> = (props) => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap: { [key: string]: keyof JSX.IntrinsicElements } = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2",
  heading3: "h3"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters: React.FC<{ text: string; type: keyof typeof tagMap }> = (props) => {
  // Framer Motion variant object, for controlling animation
  const item = {
    hidden: {
      y: "200%",
      color: "#0055FF",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      color: "#3172eb",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords:any = props.text.split(" ");

  // Create storage array
  const words: string[][] = [];

  // Push each word into words array
  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map((word) => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag:any = tagMap[props.type];

  return (
    <Tag style={{ fontFamily: 'Bad Script' }}>
      {words.map((word, index) => {
        return (
          // Wrap each word in the Wrapper component
          <Wrapper key={index}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    paddingTop: "6px",
                    paddingLeft: "1px",
                    paddingRight: "1px",
                    paddingBottom: "6px",
                    width: "fit-content",
                    height: "fit-content",
                    display: "inline-block"
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
      {/* {} */}
      <link href="https://fonts.googleapis.com/css2?family=Bad+Script&display=swap" rel="stylesheet"/>
    </Tag>
  );
};

export default AnimatedCharacters;

