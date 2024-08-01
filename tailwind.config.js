/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: "46rem 56rem",
        friend: "4.8rem 1fr auto",
        "add-friend": "1fr 1.5fr",
        "split-bill": "1fr 12rem",
      },
    },
  },
  plugins: [],
};
