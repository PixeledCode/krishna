"use client";

import Image from "next/image";
import {
  Heading,
  HeadingText,
  List,
  ListItem,
  Paragraph,
  Separator,
  SubHeading,
} from "./Common";
import { Sidebar } from "../Sidebar";
import { Card } from "../Card";

export default function Work() {
  return (
    <div className="mt-12 mb-32">
      <div className="flex justify-center">
        <Image src="/innovapptive.png" width={223} height={36} alt="" />
      </div>
      <h1 className="text-xl sm:text-4xl font-display sm:leading-display text-center max-w-240 container mt-6">
        Icon Design for Intuitive Interaction: Developing Iconography for
        Innovapptive
      </h1>

      <Image
        src="/innovapptive_frame.png"
        width={1440}
        height={720}
        alt=""
        className="w-full object-cover mt-16"
      />
      <div className="relative">
        <Sidebar />
        <main>
          {/* Overview */}
          <section className="max-w-240 container pt-24" id="overview">
            <Heading>Overview</Heading>
            <div className="mt-4">
              <HeadingText>
                A focused approach to defining and designing icons for unique
                actions in Innovapptive’s app experience
              </HeadingText>
              <div className="mt-6">
                <Paragraph>
                  As part of a redesign project for Innovapptive, I partnered
                  with the design team to create a cohesive icon set for their
                  mobile and website app experience. The project involved
                  understanding the context of required icons, iterating on
                  design options, and delivering finalized icons in a filled
                  style. Additionally, I provided comprehensive design
                  guidelines to ensure consistent implementation across the
                  platform.
                </Paragraph>
              </div>
            </div>
            <div className="mt-16">
              <div>
                <span className="font-bold">My Role</span>
                <p className="mt-2">Icon Designer</p>
              </div>
              <Separator className="my-8" />
              <div>
                <span className="font-bold">Timeline</span>
                <p className="mt-2">February 2024 (1 mo)</p>
              </div>
              <Separator className="my-8" />
              <div>
                <span className="font-bold">Scope</span>
                <div className="mt-2 flex items-center gap-2">
                  80 unique icons
                </div>
              </div>
            </div>
          </section>

          {/* Current Experience */}
          <section className="mt-40 max-w-240 container">
            <SubHeading>Current Experience</SubHeading>
            <div className="mt-4">
              <HeadingText>Current app experience</HeadingText>

              <p className="mt-6">
                Innovapptive develops software to help businesses operate more
                efficiently by connecting teams and streamlining processes.
                However, the app&apos;s current icon experience is inconsistent
                and lacks cohesion, making navigation less intuitive for users.
                Many icons fail to clearly represent their intended actions or
                terms, resulting in ambiguity.
              </p>
              <div className="mt-10">
                <Image
                  src="/innovapptive/1.png"
                  alt=""
                  width={960}
                  height={417}
                />
              </div>
            </div>
          </section>

          {/* Skip */}
          <section className="mt-36 flex justify-center flex-col items-center">
            <span className="font-display text-2xl">
              Short on time? No problem!
            </span>
            <button
              type="button"
              onClick={() => {
                document
                  .getElementById("final-design")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="uppercase font-lato leading-none py-3 px-4 sm:py-4 sm:px-6 rounded-full border-[2px] border-solid border-primary text-primary sm:text-xl font-bold mt-6"
            >
              skip to final designs
            </button>
          </section>

          {/* Project Goal */}
          <section className="bg-light py-32 mt-24">
            <div className="container max-w-240">
              <div>
                <SubHeading>Project Goal</SubHeading>
                <div className="mt-4">
                  <HeadingText>
                    To design a cohesive and intuitive icon set for
                    Innovapptive’s mobile and web app that enhances user
                    experience, aligns with the design style, and ensures
                    consistency.
                    <br />
                    Additionally, to define icon design guidelines for
                    streamlined development and visual harmony.
                  </HeadingText>
                </div>
              </div>
              <div className="mt-20 sm:mt-32">
                <SubHeading>Project Constraints</SubHeading>
                <div className="mt-4">
                  <HeadingText>
                    The short-term project required efficient ideation,
                    iteration, and delivery. Icons needed to align with the
                    app&apos;s existing design language, cater to diverse
                    functions, and maintain uniformity, with the focus limited
                    to creating icons and defining guidelines.
                  </HeadingText>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="pt-24 container max-w-240" id="process">
            <Heading>Process</Heading>
            <div className="mt-4">
              <HeadingText>Design Process Overview</HeadingText>
              <div className="mt-6">
                <List>
                  <ListItem>
                    I joined the project midway to assist the team with icon
                    design as part of the redesign process.{" "}
                    <strong>Collaborating closely with the design team</strong>,
                    I gathered all the required icons and gained a clear
                    understanding of the context and usage for each action item.
                  </ListItem>
                  <ListItem>
                    Later, I began developing the guidelines and coordinated
                    with the team and clients to finalize the style.
                  </ListItem>
                  <ListItem>
                    After establishing the style and guidelines, I began
                    designing icon options and created filled versions for the
                    finalized selections.
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="mt-6">
              <Image
                src="/innovapptive/2.png"
                alt=""
                width={960}
                height={526}
              />
            </div>
          </section>

          {/* Research */}
          <section className="bg-light py-32 mt-24" id="guidelines">
            <div className="container max-w-240">
              <Heading>GUIDELINES</Heading>
              <div className="mt-4">
                <HeadingText>Grid and Style</HeadingText>
              </div>
              <div className="mt-6">
                <Paragraph>
                  The icon design embraces a round, soft-edged style with clean
                  design elements. This approach prioritises simplicity,
                  clarity, and approachability, enhancing user experience across
                  digital platforms. The rounded edges exude warmth and
                  friendliness, while the clean design ensures legibility and
                  coherence.
                </Paragraph>
              </div>
              <div className="mt-10">
                <Image
                  src="/innovapptive/3.png"
                  alt=""
                  width={960}
                  height={307}
                />
              </div>

              <div className="mt-24">
                <HeadingText>Stroke Weight</HeadingText>
              </div>
              <div className="mt-6">
                <Paragraph>
                  Various options were tested to arrive at the ideal stroke
                  weight, with 1.4 being deemed optimal. This weight strikes a
                  balance, imparting boldness without cluttering the design.
                </Paragraph>
              </div>
              <div className="mt-10">
                <Image
                  src="/innovapptive/4.png"
                  alt=""
                  width={960}
                  height={623}
                />
              </div>

              <div className="mt-24">
                <HeadingText>Usage</HeadingText>
              </div>
              <div className="mt-10">
                <Image
                  src="/innovapptive/5.png"
                  alt=""
                  width={530}
                  height={627}
                />
              </div>
            </div>
          </section>

          {/* Final Design */}
          <section className="pt-32" id="design">
            <div className="container max-w-240">
              <Heading>Design</Heading>
              <div className="mt-4">
                <HeadingText>Icons That Click: The Icon Library</HeadingText>
              </div>
            </div>

            <div className="py-28 bg-innovapptive mt-10">
              <div className="container max-w-240">
                <div className="mt-6">
                  <Image
                    src="/innovapptive/6.png"
                    alt=""
                    width={960}
                    height={1745}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Takeaway */}
          <section className="bg-light py-32" id="takeaway">
            <div className="container max-w-240">
              <Heading>Takeaway</Heading>
              <div className="mt-4">
                <HeadingText>Reflection</HeadingText>
              </div>
              <div className="mt-8 flex flex-col gap-8">
                <div className="flex gap-2 items-start">
                  <Image
                    src="/innovapptive/icon-1.svg"
                    alt=""
                    width={36}
                    height={36}
                  />

                  <div>
                    <span className="font-bold text-2xl">
                      Designing icons from scratch
                    </span>
                    <p className="mt-1">
                      This was my first experience designing icons from scratch.
                      I learned how to create design guidelines and use the pen
                      tool effectively, which helped me enhance my skills and be
                      pixel perfect.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <Image
                    src="/innovapptive/icon-2.png"
                    alt=""
                    width={36}
                    height={36}
                  />

                  <div>
                    <span className="font-bold text-2xl">
                      Importance of having relevant icons
                    </span>
                    <p className="mt-1">
                      This project taught me the importance of creating icons
                      that simplify complex terms and convey context clearly. A
                      good icon should be intuitive and purposeful, helping
                      users understand actions or concepts at a glance without
                      confusion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to top */}
          <section className="mt-24 flex flex-col items-center container">
            <Image
              src="/setup.png"
              alt=""
              width={496}
              height={253}
              className="w-full max-w-80 sm:max-w-[496px]"
            />
            <span className="mt-4 mb-6 font-bold sm:text-2xl">
              You made it till the end of the case-study!
            </span>
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="uppercase font-lato leading-none py-3 px-4 sm:py-4 sm:px-6 rounded-full border-[2px] border-solid border-primary text-primary sm:text-xl font-bold"
            >
              BACK to top
            </button>
          </section>
        </main>
      </div>

      {/* More Projects */}
      <section className="mt-32 container max-w-240">
        <HeadingText>More Projects</HeadingText>
        <div className="mt-2 w-full h-[1px] bg-primary" />

        <div className="mt-8 grid auto-fit-[300px] gap-6">
          <Card
            image="/kotak-card.png"
            title="Redesign the Mutual Fund Advisor Portal and create a scalable product"
            brand="Kotak Mutual Funds"
          />
          <Card
            image="/myysports-card.png"
            title="Reimagining the experience of the product for all users to increase engagement and enhance value proposition"
            brand="MyySports"
          />
        </div>
      </section>
    </div>
  );
}
