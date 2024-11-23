"use client";

import React from "react";
import {
  Heading,
  HeadingText,
  List,
  ListItem,
  Paragraph,
  Pill,
  Separator,
  SubHeading,
} from "./Common";
import Image from "next/image";
import { Sidebar } from "../Sidebar";

export default function Work() {
  return (
    <div className="mt-12 mb-32">
      <div className="flex justify-center">
        <Image src="/kotak.png" width={109} height={32} alt="" />
      </div>
      <h1 className="text-xl sm:text-4xl font-display sm:leading-display text-center max-w-240 container mt-6">
        Streamlining Mutual Fund Advisor Portal: Simplifying Access, Enhancing
        Engagement.
      </h1>

      <Image
        src="/frame.png"
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
                Redesign the Mutual Fund Advisor Portal and create a scalable
                product
              </HeadingText>
              <div className="mt-6">
                <Paragraph>
                  We engaged in a collaborative effort with the Kotak Mutual
                  Funds team to revamp the mutual funds advisor portal. Our
                  primary objective was to craft visually captivating screens
                  while simultaneously addressing any user experience
                  challenges, ensuring a seamless and intuitive journey for the
                  end users.
                </Paragraph>
              </div>
            </div>
            <div className="mt-16 text-xl">
              <div>
                <span className="font-bold">My Role</span>
                <p className="mt-2">Lead Designer in a team of 3</p>
              </div>
              <Separator className="my-8" />
              <div>
                <span className="font-bold">Timeline</span>
                <p className="mt-2">November 2022 - May 2023 (7 mo)</p>
              </div>
              <Separator className="my-8" />
              <div>
                <span className="font-bold">Scope</span>
                <div className="mt-2 flex items-center gap-2">
                  <p>9 Flows</p>|<p>28 Unique Screens</p>
                </div>
              </div>
            </div>
          </section>

          {/* Current Experience */}
          <section className="mt-40 max-w-240 container">
            <SubHeading>Current Experience</SubHeading>
            <div className="mt-4">
              <HeadingText>What is the Current Experience like?</HeadingText>
              <div className="mt-6">
                <List>
                  <ListItem>
                    The mutual fund advisor portal was designed to assist users
                    in managing investor portfolios and monitoring progress in
                    total systematic investment plans (SIPs) and total assets
                    under management (AUM).
                  </ListItem>
                  <ListItem>
                    However, the portal falls short in delivering a smooth
                    overall experience due to complex navigation, unstructured
                    information hierarchy, and a dashboard that lacks prominent
                    display of relevant information.
                  </ListItem>
                </List>
              </div>
              <div className="mt-12 flex flex-wrap gap-6">
                <Pill>Irrelevant Content in the dashboard</Pill>
                <Pill>Poor and unintuitive Navigation</Pill>
                <Pill>Outdated UI Design</Pill>
              </div>
            </div>
            <div className="mt-16">
              <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                IMAGE HERE
              </div>
            </div>
          </section>

          {/* Experiences */}
          <section className="mt-40 max-w-240 container">
            <SubHeading>Experiences</SubHeading>
            <div className="mt-4">
              <HeadingText>Who are the Primary Users?</HeadingText>
              <div className="mt-6 flex gap-12">
                <Paragraph>
                  The target users are existing and new mutual fund advisors who
                  help Kotak investors to create and manage portfolio. Also the
                  support staff, individuals assisting the mutual fund advisors
                  with administrative tasks and data management. These
                  professionals are responsible for managing investor
                  portfolios, monitoring their progress in total SIPs, and
                  overseeing total assets under management (AUM). The portal is
                  designed to enhance their efficiency and effectiveness in
                  providing financial guidance and support to their clients.
                </Paragraph>
                <div className="hidden sm:flex flex-col gap-7">
                  <div className="w-32 h-32 flex items-center justify-center bg-[#438BDE] rounded-full">
                    <Image src="/card.png" alt="" width={76} height={98} />
                  </div>
                  <div className="w-32 h-32 flex items-center justify-center bg-[#438BDE] rounded-full">
                    <Image src="/card.png" alt="" width={76} height={98} />
                  </div>
                </div>
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
                  .getElementById("design")
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
                    Create a scalable product with appropriate nudges,
                    digestible data, and a minimal yet playful UI to enhance
                    user engagement
                  </HeadingText>
                </div>
              </div>
              <div className="mt-20 sm:mt-32">
                <SubHeading>Project Constraints</SubHeading>
                <div className="mt-4">
                  <HeadingText>
                    As a part of a bigger portfolio of products that Kotak
                    offers, the redesign was constrained by brand language,
                    existing feature list, and standardised UI patterns across
                    the products.{" "}
                  </HeadingText>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="pt-24 container max-w-240" id="process">
            <Heading>Process</Heading>
            <div className="mt-4">
              <HeadingText>Behind the Scenes</HeadingText>
              <div className="mt-6">
                <List>
                  <ListItem>
                    Working on this project was a highly collaborative process.
                    From the initial phase to the final stages, I worked closely
                    with the Kotak team&apos;s project manager, actively
                    coordinating on the user flows and design development.
                  </ListItem>
                  <ListItem>
                    Meetings were held every few days to initially grasp the
                    domain and user pain points, followed by discussions on
                    project progress and feedback rounds.
                  </ListItem>
                  <ListItem>
                    We conducted multiple rounds of discussions to finalise the
                    portal&apos;s style and flow, and after further iterations
                    and feature additions to the design prototype, my team and I
                    prepared the design file for handoff to the developers.
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                IMAGE HERE
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="bg-light py-32 mt-24" id="research">
            <div className="container max-w-240">
              <Heading>Research</Heading>
              <div className="mt-4">
                <HeadingText>Competitive Benchmarking Overview</HeadingText>
              </div>
              <div className="mt-6">
                <List>
                  <ListItem>
                    To understand the problem space better I first conducted a
                    thorough analysis of leading industry players. By examining
                    the strengths, weaknesses and unique features of advisor
                    portals from Axis, HDFC, DSP, ICICI, SBI, and Nippon India
                    Mutual Funds, valuable insights were gathered.
                  </ListItem>
                  <ListItem>
                    This benchmarking process helped identify industry
                    standards, gaps in existing solutions, and opportunities to
                    create a more intuitive, feature-rich platform that caters
                    specifically to the needs of mutual fund advisors.
                  </ListItem>
                </List>
              </div>
              <div className="mt-6">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>
          </section>

          {/* Concept */}
          <section className="pt-24 container max-w-240" id="concepts">
            <Heading>Concepts</Heading>
            <div className="mt-4">
              <HeadingText>Nudging towards Goal Completion</HeadingText>
            </div>
            <div className="mt-6">
              <Paragraph>
                The aim is to create an interactive experience which updates the
                users and nudges them towards their goal. <br />
                We combined multiple concepts to make the overall experience
                smooth and intuitive for the users
              </Paragraph>
            </div>
            <div className="mt-6">
              <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                IMAGE HERE
              </div>
            </div>
          </section>

          {/* wireframes */}
          <section className="container max-w-240 pt-24" id="wireframes">
            <Heading>wireframes</Heading>
            <div className="mt-4">
              <HeadingText>Initial Conceptual Designs</HeadingText>
            </div>
            <div className="mt-6">
              <Paragraph>
                Through the wireframes, I optimized the navigation, enhanced the
                homepage with appropriate nudges, and reorganized content with a
                better structure to make it easier and quicker for users.
                <br />
                We went ahead with mobile-first approach.
              </Paragraph>
            </div>
            <div className="mt-6">
              <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                IMAGE HERE
              </div>
            </div>
          </section>

          {/* Visual Design */}
          <section className="bg-light pb-16 pt-16 sm:pt-32 mt-10">
            <div className="container max-w-240">
              .<SubHeading>visual design</SubHeading>
              <div className="mt-4">
                <HeadingText>Style Guide</HeadingText>
              </div>
              <div className="mt-6">
                <Paragraph>
                  We aimed for a fun, clean aesthetic with a pastel colour
                  palette, while maintaining the brand&apos;s base color as per
                  the guidelines. Relevant illustrations are used throughout to
                  keep the interface fresh and engaging, striking a balance
                  between professionalism and visual appeal. This approach
                  ensures a user-friendly experience that is both modern and
                  aligned with the brand identity.
                </Paragraph>
              </div>
              <div className="mt-16">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
              <div className="mt-32">
                <HeadingText>Design System</HeadingText>
                <div className="mt-8">
                  <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                    IMAGE HERE
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Final Design */}
          <section className="pt-32" id="design">
            <div className="container max-w-240">
              <Heading>final design</Heading>
              <div className="mt-4">
                <HeadingText>Intuitive, scalable solution</HeadingText>
              </div>
              <div className="mt-10">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>

            <div className="py-28 bg-light">
              <div className="container max-w-240">
                <HeadingText>Dashboard Components</HeadingText>
                <div className="mt-10">
                  <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                    IMAGE HERE
                  </div>
                </div>
              </div>
            </div>

            <div className="py-28 bg-kotak">
              <div className="container max-w-240">
                <HeadingText>Goal completion</HeadingText>
                <div className="mt-10">
                  <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                    IMAGE HERE
                  </div>
                </div>
              </div>
            </div>

            <div className="py-28 bg-light">
              <div className="container max-w-240">
                <HeadingText>Transaction</HeadingText>
                <div className="mt-10">
                  <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                    IMAGE HERE
                  </div>
                </div>
              </div>
            </div>

            <div className="py-28 bg-kotak">
              <div className="container max-w-240">
                <HeadingText>Opportunity</HeadingText>
                <div className="mt-10">
                  <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                    IMAGE HERE
                  </div>
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
                  <div className="w-9 h-9 bg-slate-200 rounded-full shrink-0 flex items-center justify-center">
                    I
                  </div>
                  <div>
                    <span className="font-bold text-2xl">
                      Get feedback early
                    </span>
                    <p className="mt-1">
                      Ensure product requirements are clear and discuss concepts
                      thoroughly before starting on key screen designs.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-9 h-9 bg-slate-200 rounded-full shrink-0 flex items-center justify-center">
                    I
                  </div>
                  <div>
                    <span className="font-bold text-2xl">
                      Go back to basics
                    </span>
                    <p className="mt-1">
                      During the design process, we often place too much
                      emphasis on visuals and overlook the core user needs. My
                      team and I had to step back and refocus on presenting the
                      data clearly, rather than solely prioritizing visual
                      appeal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="w-9 h-9 bg-slate-200 rounded-full shrink-0 flex items-center justify-center">
                    I
                  </div>
                  <div>
                    <span className="font-bold text-2xl">Take command</span>
                    <p className="mt-1">
                      As one of the first projects I led, I was responsible for
                      managing client expectations, meeting deadlines, and
                      motivating both myself and my team to keep iterating for
                      the best results. This experience taught me how to
                      effectively communicate and collaborate with clients.
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

          {/* More Projects */}
          <section className="mt-32 container max-w-240">
            <HeadingText>More Projects</HeadingText>

            <div className="mt-2 w-full h-[1px] bg-primary" />

            <div className="mt-8 grid auto-fit-[300px] gap-6">
              <article className="md:max-w-[468px]">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
                <span className="text-xs sm:text-base mt-6 block font-semibold uppercase">
                  Deutsche Telekom
                </span>
                <p className="font-display text-lg sm:text-2xl leading-display mt-3">
                  Empowering Every User: Solving Accessibility Challenges in
                  Smart Home Technology
                </p>
              </article>

              <article className="md:max-w-[468px]">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
                <span className="text-xs sm:text-base mt-6 block font-semibold uppercase">
                  Innovapptive
                </span>
                <p className="font-display text-lg sm:text-2xl leading-display mt-3">
                  Creating custom icons for the application
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
