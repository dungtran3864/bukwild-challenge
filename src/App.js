import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./LayoutUI/NavBar";
import Headline from "./PageUI/Headline";
import CTA from "./PageUI/CTA";
import slideOne from "./resources/backgrounds/slide_one.jpg";
import slideTwo from "./resources/backgrounds/slide_two.jpg";
import slideThree from "./resources/backgrounds/slide_three.jpg";
import JSONContent from "./resources/content.json";

function App() {
  const [currentMenuIndex, setMenuIndex] = useState(0);
  const [currentBackgroundImage, setCurrentBackgroundImage] = useState(
    slideOne
  );
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(JSONContent.pages);
  }, []);

  function changeMenu(menuIndex) {
    setMenuIndex(menuIndex);
    switchBackgroundImage(menuIndex);
  }

  function switchBackgroundImage(menuIndex) {
    if (pages[menuIndex] && pages[menuIndex].blocks[0]) {
      switch (pages[menuIndex].blocks[0].background) {
        case "slide_one.jpg":
          setCurrentBackgroundImage(slideOne);
          break;
        case "slide_two.jpg":
          setCurrentBackgroundImage(slideTwo);
          break;
        case "slide_three.jpg":
          setCurrentBackgroundImage(slideThree);
          break;
        default:
          return null;
      }
    }
  }

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${currentBackgroundImage})` }}
    >
      <NavBar
        changeMenu={changeMenu}
        currentMenuIndex={currentMenuIndex}
        pages={pages}
      />

      {pages[currentMenuIndex] &&
        pages[currentMenuIndex].blocks.map((block, blockIndex) => (
          <Headline
            headline={block.headline}
            subhead={block.subhead}
            key={blockIndex}
          />
        ))}

      {pages[currentMenuIndex] && pages[currentMenuIndex].blocks[0] && (
        <CTA cta={pages[currentMenuIndex].blocks[0].cta} />
      )}
    </div>
  );
}

export default App;
