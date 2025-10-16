// app/icon.tsx

import { ImageResponse } from "next/og";

const dimension = 32;

// Image metadata
export const size = {
  width: dimension,
  height: dimension,
};

export const contentType = "image/png"; // Must be 'image/png'

// Image generation function
export default function Icon() {
  return new ImageResponse(
    (
      // JSX element to render your icon
      <div
        style={{
          fontSize: dimension,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          borderRadius: "0%",
        }}
      >
        M
      </div>
    ),
    // ImageResponse options
    { ...size }
  );
}
