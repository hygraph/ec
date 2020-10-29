import * as React from "react";

function Star(props) {
  return (
    <svg
      className="ui-icon"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      {props.shouldfill === "true" && (
        <path
          fill="currentColor"
          d="M14 4l3 7h7l-5 6 2 7-7-4-7 4 2-7-5-6h7l3-7z"
        />
      )}

      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit={10}
        stroke="#221b38"
        d="M12 2l3 7h7l-5 6 2 7-7-4-7 4 2-7-5-6h7l3-7z"
      />
    </svg>
  );
}

export default Star;
