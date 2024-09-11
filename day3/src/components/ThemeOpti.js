import React, { useState } from "react";

export default function ThemeOpti() {
  const [theme, setTheme] = useState(false);
  //using only one state to toggling b/w bcgcolor,font color and theme name

  //this is possible because all the dynamic behaviours are based on one logic if theme is dark do this else do this so we are using conditional rendering using ternary operator



  const handleClick = () => {
    setTheme(!theme);
    //toggling b/w themes that means if theme is dark and button is clicked make it light and vice versa
  };

  return (
    <div
      style={{
        backgroundColor: `${theme === false ? "white" : "black"}`,
        color: `${theme === false ? "black" : "white"}`,
        transition: "all 0.6s linear",
      }}
    >
      <hr color="orange" />
      <h2>This is theme switcher</h2>
      <p style={{ textAlign: "justify", padding: `10px` }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        cupiditate voluptatum, perferendis suscipit modi distinctio atque
        accusantium repellendus quisquam reprehenderit minus rerum aut et nemo
        earum recusandae! Libero, quas qui? Inventore maxime assumenda earum
        modi molestias dolorum illo delectus, optio, fugiat, quae iusto animi
        libero hic suscipit adipisci nam blanditiis veniam deleniti. Minima
        fugit dolore possimus numquam, nam eum debitis, similique nisi quidem,
        quibusdam nostrum ab atque tenetur officia molestiae eligendi quis?
        Ducimus nisi quibusdam quidem eum enim laborum pariatur aliquam
        quisquam, cum repudiandae placeat commodi incidunt, dicta a porro
        explicabo cupiditate fugit impedit ad minima nostrum laudantium eius
        consectetur?
      </p>

      <button onClick={handleClick}>
        {" "}
        {theme === false ? "Dark" : "Light"} Mode
      </button>
      <hr color="orange" />
    </div>
  );
}
