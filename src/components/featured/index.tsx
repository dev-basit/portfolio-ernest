import React, { useEffect } from "react";
import { FeaturedStyles } from "@/components/featured/styles";
import { config } from "@/config";

function Featured() {
  useEffect(() => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const phrases = config.featurePhrases;
    const el = document.getElementById("typewriter")!;

    let sleepTime = 100;
    let curPhraseIndex = 0;

    const animate = async () => {
      while (true) {
        let curWord = phrases[curPhraseIndex];

        for (let i = 0; i < curWord.length; i++) {
          el.innerText = curWord.substring(0, i + 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 10);

        for (let i = curWord.length; i > 0; i--) {
          el.innerText = curWord.substring(0, i - 1);
          await sleep(sleepTime);
        }

        await sleep(sleepTime * 5);

        if (curPhraseIndex === phrases.length - 1) curPhraseIndex = 0;
        else curPhraseIndex++;
      }
    };

    animate();
  }, []);

  return (
    <FeaturedStyles.FeaturedContainer data-aos="zoom-in-up" id="featured">
      <div style={{ display: "inline-block" }}>
        <FeaturedStyles.FeaturedHeading>
          <span id="typewriter"></span>
          <span id="cursor">|</span>
        </FeaturedStyles.FeaturedHeading>
      </div>
      <FeaturedStyles.FeaturedNameTagline>{config.nameTagLine}</FeaturedStyles.FeaturedNameTagline>
      <FeaturedStyles.FeaturedRuler></FeaturedStyles.FeaturedRuler>
      <FeaturedStyles.FeaturedDesc>{config.descriptionTagLine} </FeaturedStyles.FeaturedDesc>
    </FeaturedStyles.FeaturedContainer>
  );
}

export default Featured;
