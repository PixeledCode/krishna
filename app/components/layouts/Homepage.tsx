import type { Homepage as Types } from "@/app/types/homepage";
import Image from "next/image";
import { Card } from "../Card";
import ReactMarkdown from "react-markdown";
import { urlFor } from "@/app/client";

export const Homepage = ({ data }: { data: Types }) => {
  return (
    <main>
      <div className="relative pb-32 sm:pb-72 cursor pt-16 sm:pt-36">
        <div className="max-w-240 container">
          <h1 className="text-xl sm:text-7xl font-display sm:leading-display">
            Hi, I’m Krishna, <br />
            <span className="outline-text">
              Digital Product Designer <br />
            </span>
            based in{" "}
            <span className="sm:hover:text-primary transition-colors duration-200">
              Bangalore.
            </span>
          </h1>
          <div className="mt-3 sm:text-xl whitespace-pre-line">
            <ReactMarkdown>{data?.headingText}</ReactMarkdown>
          </div>
        </div>
        <a href="#projects" className="hidden sm:block">
          <Image
            src="/krishna.png"
            alt=""
            width={300}
            height={230}
            className="absolute right-7 -bottom-8"
          />
        </a>
      </div>
      <div className="bg-light pt-16 sm:pt-24 pb-24 sm:pb-44">
        <div className="max-w-240 container">
          <h2
            className="text-3xl sm:text-5xl font-display leading-display pt-20 -mt-20"
            id="projects"
          >
            {data?.projectTitle}
          </h2>
          <p className="sm:text-xl whitespace-pre-line">{data?.projectText}</p>
          <div className="mt-8 sm:mt-16 grid gap-6 auto-fit-[320px]">
            {data?.projectCards?.map((card) => (
              <Card
                key={card._key}
                brand={card.brand}
                title={card.title}
                image={urlFor(card.image.asset._ref).url()}
                tags={card.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
