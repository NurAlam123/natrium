"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "framer-motion";

type SodiumProps = {
  className?: string;
} & MotionProps;

const Sodium = ({ className, ...rest }: SodiumProps) => {
  return (
    <motion.div
      suppressHydrationWarning
      className={cn("p-2 size-[350px]", className)}
      {...rest}
      aria-hidden
    >
      <div className="flex justify-center items-center size-full relative">
        <Nucleas name="Na" />
        {/* 1st shell - K shell */}
        <Shell size={150}>
          <Electron valign="center" halign="left" />
          <Electron valign="center" halign="right" />
        </Shell>

        {/* 2nd shell - L shell */}
        <Shell size={250} spinDuration={4}>
          <PairElectron direction="horizontal" valign="center" halign="left" />
          <PairElectron direction="horizontal" valign="center" halign="right" />
          <PairElectron direction="vertical" valign="top" halign="center" />
          <PairElectron direction="vertical" valign="bottom" halign="center" />
        </Shell>
        {/* 3rd shell - M shell */}
        <Shell size={350} spinDuration={6}>
          <Electron valign="center" halign="left" />
        </Shell>
      </div>
    </motion.div>
  );
};

const Nucleas: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="size-20 bg-white/20 rounded-full flex justify-center items-center">
      <span className="font-semibold">{name}</span>
    </div>
  );
};

const Shell: React.FC<{
  size: number;
  children: React.ReactNode;
  spinDuration?: number;
}> = ({ size, children, spinDuration = 2 }) => {
  return (
    <motion.div
      style={{
        width: size,
        height: size,
      }}
      animate={{
        rotate: "1turn",
      }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: spinDuration,
      }}
      className="shell"
    >
      {children}
    </motion.div>
  );
};

// ==== Position for Electrons ====
// Vertical Position
const vPosition = {
  top: "top-0",
  bottom: "top-full",
  center: "top-1/2",
};

// Horizontal Position
const hPosition = {
  left: "left-0",
  right: "left-full",
  center: "left-1/2",
};
// =================================

type ElectronProps = {
  halign: "left" | "right" | "center";
  valign: "top" | "center" | "bottom";
};

const Electron: React.FC<ElectronProps> = ({ halign, valign }) => {
  return (
    <>
      <div
        className={cn(
          "electron absolute",
          hPosition[halign],
          vPosition[valign],
        )}
      />
    </>
  );
};

const PairElectron: React.FC<
  { direction: "horizontal" | "vertical" } & ElectronProps
> = ({ halign, valign, direction }) => {
  return (
    <div
      className={cn(
        "flex absolute",
        direction === "horizontal" && "flex-col -translate-y-1/4 ",
        direction === "vertical" && "flex-row -translate-x-1/4",
        hPosition[halign],
        vPosition[valign],
      )}
    >
      <div className="electron" />
      <div className="electron" />
    </div>
  );
};

export default Sodium;
