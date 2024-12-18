"use client";

import { motion } from "framer-motion";
import { slugify } from "./layouts/Common";

const imageMotion = {
  initial: { scale: 1 },
  animate: { scale: 0.98 },
};

export const Card = ({
  brand,
  title,
  image,
  alt = "",
  tags,
}: {
  brand: string;
  title: string;
  image: string;
  alt?: string;
  tags?: string[];
}) => {
  return (
    <article className="mb-4 sm:mb-8">
      <motion.a
        href={`/work/${slugify(brand)}`}
        initial="initial"
        animate="initial"
        whileHover="animate"
      >
        <motion.img
          src={image}
          alt={alt}
          variants={imageMotion}
          transition={{ type: "spring", stiffness: 200 }}
        />
        <h3 className="font-semibold uppercase mt-6 tracking-wide">{brand}</h3>
        <p className="mt-1 sm:mt-3 font-display leading-display text-xl sm:text-2xl">
          {title}
        </p>
      </motion.a>
      {tags ? (
        <div className="mt-6 flex gap-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-3xl text-sm border border-solid border-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
};
