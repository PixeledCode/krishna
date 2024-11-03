"use client";
import { motion } from "framer-motion";

const textMotion = {
  rest: {
    opacity: 0,
    x: "-2%",
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const Link = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}): React.ReactElement => {
  return (
    <a
      href={href}
      className="hover:text-primary transition-colors duration-200 font-semibold link"
    >
      {children}
      <span className="link_underline" />
    </a>
  );
};

export const Header = ({ resumeLink }: { resumeLink: string }) => {
  return (
    <nav className="container py-8 flex justify-between items-center gap-2 font-lato">
      <motion.a
        initial="rest"
        whileHover="hover"
        className="flex items-center font-semibold text-2xl"
        href="/"
      >
        <span className="block w-4 h-4 rounded-full bg-primary mr-1" />
        <div className="bg-bg">K</div>
        <motion.span variants={textMotion} className="hidden sm:block">
          rishna Sukumaran
        </motion.span>
      </motion.a>

      <ul className="flex gap-4 sm:gap-10 sm:text-xl">
        <Link href="/#projects">Work</Link>
        <Link href="/about">About</Link>
        <Link href={resumeLink}>Resume</Link>
      </ul>
    </nav>
  );
};
