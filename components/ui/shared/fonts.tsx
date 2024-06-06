import { DM_Sans } from "next/font/google";

export const dmSansFont = DM_Sans({
  preload: true,
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});
