/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "body-text-2": "#fcfcfc",
        "primary-color1": "#17abff",
        gray: {
          "100": "#091d41",
          "200": "rgba(0, 0, 0, 0.26)",
        },
        "primary-color": "#00357b",
        dimgray: "#686868",
        "body-text": "#343434",
        aliceblue: "#f4f9ff",
        lightskyblue: "#98c5e8",
        steelblue: "rgba(87, 144, 190, 0.12)",
        whitesmoke: "#e7ebef",
        "colors-backgrounds-light": "#f5f5f5",
      },
      spacing: {},
      fontFamily: {
        "button-text": "Poppins",
        heading1: "Oswald",
        roboto: "Roboto",
      },
      borderRadius: {
        "8xs": "5px",
        sm: "14px",
        xl: "20px",
        smi: "13px",
      },
    },
    fontSize: {
      "6xl": "25px",
      "29xl": "48px",
      sm: "14px",
      smi: "13px",
      "3xs": "10px",
      base: "16px",
      "17xl": "36px",
      "11xl": "30px",
      "5xl": "24px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
