import React, { useEffect, useState } from "react";
import LeftPanel from "./leftPanel";
import Text from "./text";
import Media from "./media";
import Header from "./header";
import History from "./History";
import "../styles/Responsive.css";
import "../styles/main.css";

const main = () => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1037);
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 1037);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="container">
        <LeftPanel />
        <div className="leftPanel">
          <Header />
          <div className="chat_structure">
            {isWideScreen ? (
              <>
                <Text />
                <hr className="line" />
                <Media />
              </>
            ) : (
              <History />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default main;
