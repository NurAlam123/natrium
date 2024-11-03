import { Poppins, Bebas_Neue } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const bebasNeue = Bebas_Neue({
  weight: ["400"],
  variable: "--font-bebas-neue",
});
