import React, { useContext } from "react";
import StylesContext from "./stylesContext";

export default function RequestFormButton() {
  const buttonStyling = React.useContext(StylesContext);

  return (
    <div>
      <input style={buttonStyling} type="submit" value="Submit" />
    </div>
  );
}
