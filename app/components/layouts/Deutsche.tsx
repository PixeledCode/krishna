"use client";

import Image from "next/image";
import {
  ArchetypeCard,
  Heading,
  HeadingText,
  List,
  ListItem,
  Paragraph,
  Separator,
  SubHeading,
} from "./Common";

export default function Work() {
  return (
    <main className="mt-12 mb-32">
      <div className="flex justify-center">
        <Image src="/deutsche.png" width={109} height={32} alt="" />
      </div>
      <h1 className="text-xl sm:text-4xl font-display sm:leading-display text-center max-w-240 container mt-6">
        Empowering Every User: Solving Accessibility Challenges in Smart Home
        Technology
      </h1>

      <Image
        src="/deutsche_frame.png"
        width={1440}
        height={720}
        alt=""
        className="w-full object-cover mt-16"
      />

      <div className="mt-24">
        {/* Overview */}
        <section className="max-w-240 container">
          <Heading>Overview</Heading>
          <div className="mt-4">
            <HeadingText>
              Addressing Accessibility Challenges in a Smart Home Solution
              Mobile App to Meet EU Compliance
            </HeadingText>
            <div className="mt-6">
              <Paragraph>
                We collaborated on a redesign project with a designer from the
                MagentaZuhause app, a smart home solution by Deutsche Telekom,
                after it failed to meet the European Union’s accessibility
                guidelines during an audit. The audit revealed major
                accessibility barriers for users with impairments. With a
                complete overhaul not feasible due to resource limitations, the
                project focused on targeted redesigns of critical screens and
                elements to ensure compliance while preserving a seamless
                experience for all users, including those without disabilities.
              </Paragraph>
            </div>
          </div>
          <div className="mt-16">
            <div>
              <span className="font-bold">My Role</span>
              <p className="mt-2">UX Research & Design in a team of 2</p>
            </div>
            <Separator className="my-8" />
            <div>
              <span className="font-bold">Timeline</span>
              <p className="mt-2">April 2024 - June 2024 (3 mo)</p>
            </div>
            <Separator className="my-8" />
            <div>
              <span className="font-bold">Scope</span>
              <div className="mt-2 flex items-center gap-2">
                <p>5 Flows</p>|<p>40 Unique Screens</p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Experience */}
        <section className="mt-40 max-w-240 container">
          <SubHeading>Exploring the Landscape</SubHeading>
          <div className="mt-4">
            <HeadingText>What is Web Accessibility?</HeadingText>

            <p className="italic mt-6">
              “Web Accessibility means that websites, tools, and technologies
              are designed and developed so that people with disabilities can
              use them.”
            </p>
            <p className="font-bold text-end">W3.org</p>

            <div className="mt-12">
              <h4 className="font-display text-2xl">What is WCAG?</h4>
              <p className="mt-4">
                The Web Content Accessibility Guidelines (WCAG) are a set of
                guidelines designed to make web content more accessible to
                people with disabilities. Developed by the World Wide Web
                Consortium (W3C) through the Web Accessibility Initiative (WAI),
                these guidelines help ensure that websites are usable by
                everyone, including those with various impairments.
              </p>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="mt-40 max-w-240 container">
          <SubHeading>Archetypes</SubHeading>
          <div className="mt-4">
            <HeadingText>Who are we redesigning for?</HeadingText>
            <div className="mt-6">
              <List>
                <ListItem>
                  Understanding disabilities is crucial for creating accessible
                  digital experiences. Disabilities can affect how individuals
                  interact with technology, and designing with these
                  considerations in mind ensures that everyone has equal access
                  to online content and services.
                </ListItem>
                <ListItem>
                  Recognising the various types of disabilities and the
                  challenges they present helps designers and developers create
                  inclusive and user-friendly digital environments.
                </ListItem>
              </List>
            </div>
          </div>

          <div className="mt-6 grid auto-fit-[280px] gap-6">
            <ArchetypeCard
              image="/card.png"
              name="Visual"
              list={["Blind Users", "Low Vision Users", "Color Blind Users"]}
            />
            <ArchetypeCard
              image="/card.png"
              name="COGNITIVE"
              list={[
                "Users with Learning Disabilities",
                "Users with Memory Impairments",
                "Users with Attention Deficits ",
              ]}
            />
            <ArchetypeCard
              image="/card.png"
              name="AUDITORY"
              list={[
                "Deaf Users",
                "Users with Hearing Loss",
                "Hard of Hearing Users",
              ]}
            />
            <ArchetypeCard
              image="/card.png"
              name="Anxiety"
              list={[
                "Users with Social Anxiety",
                "Users with Generalized Anxiety Disorder (GAD)",
                "Users with Panic Disorders",
              ]}
            />
            <ArchetypeCard
              image="/card.png"
              name="SPEECH"
              list={[
                "Non-Verbal Users",
                "Users with Speech Impairments",
                "Users with Voice Disorders",
              ]}
            />
            <ArchetypeCard
              image="/card.png"
              name="MOTOR"
              list={[
                "Users with Limited Dexterity (e.g., Arthritis, Parkinson’s)",
                "Users with Limited Mobility (e.g., Quadriplegia",
                "Users with Tremors",
              ]}
            />
          </div>
        </section>

        {/* Skip */}
        <section className="mt-36 flex justify-center flex-col items-center">
          <h2 className="font-display text-2xl">Short on time? No problem!</h2>
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
            <SubHeading>Project Goal</SubHeading>
            <div className="mt-4">
              <HeadingText>Design Goals</HeadingText>
            </div>
            <div className="mt-6 flex gap-4 flex-col font-medium text-xl list-decimal list-inside">
              <p className="px-6 py-4 bg-[rgba(247,75,1,0.6)] border border-primary rounded-2xl flex gap-1">
                <span>1.</span>
                Achieve Accessibility Compliance: Ensure the smart home solution
                mobile application meets the European Union’s accessibility
                guidelines (WCAG 2.1 AA) to pass future audits.
              </p>
              <p className="px-6 py-4 bg-[rgba(247,75,1,0.6)] border border-primary rounded-2xl flex gap-1">
                <span>2.</span>
                Enhance User Experience for All: Redesign key elements and
                screens to provide an inclusive experience for users with
                disabilities (visual, auditory, motor, cognitive).
              </p>
              <p className="px-6 py-4 bg-[rgba(247,75,1,0.6)] border border-primary rounded-2xl flex gap-1">
                <span>3.</span>
                Maintain Brand and Functional Integrity: Ensure the redesign of
                accessible elements aligns with the brand’s existing design
                language and functionality, avoiding disruption to non-disabled
                users.
              </p>
            </div>
          </div>

          <div className="container max-w-240 mt-16">
            <SubHeading>Project Constraints</SubHeading>
            <div className="mt-4">
              <HeadingText>Balancing Compliance and Feasibility</HeadingText>
            </div>
            <div className="mt-6 flex gap-4 flex-col font-medium text-xl list-decimal list-inside">
              <p className="px-6 py-4 bg-[rgba(247,75,1,0.6)] border border-primary rounded-2xl flex gap-1">
                <span>1.</span>
                No Complete Redesign: The project must focus on targeted
                redesigns of screens and elements to address accessibility
                issues, as a complete overhaul is not feasible due to time and
                resource constraints.
              </p>
              <p className="px-6 py-4 bg-[rgba(247,75,1,0.6)] border border-primary rounded-2xl flex gap-1">
                <span>2.</span>
                Time Restrictions: The redesign must be completed within a
                limited time frame to meet upcoming audit deadlines and
                regulatory requirements.
              </p>
              <p className="px-6 py-4 bg-[rgba(247,75,1,0.6)] border border-primary rounded-2xl flex gap-1">
                <span>3.</span>
                Existing Brand Guidelines: The redesign must adhere to the
                company’s existing brand identity, including visual style, color
                palettes, and typography.
              </p>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mt-24 container max-w-240">
          <Heading>Process</Heading>
          <div className="mt-4">
            <HeadingText>Design Process Overview</HeadingText>
            <div className="mt-6">
              <List>
                <ListItem>
                  I worked closely with the designer from the MagentaZuhause
                  team to address the accessibility challenges identified in the
                  audit.
                </ListItem>
                <ListItem>
                  Our collaborative approach involved extensive research and
                  design efforts to ensure compliance with EU accessibility
                  guidelines while maintaining a seamless user experience.
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
        <section className="bg-light py-32 mt-24">
          <div className="container max-w-240">
            <Heading>Research</Heading>
            <div className="mt-4">
              <HeadingText>Analysing Audit Document</HeadingText>
            </div>
            <div className="mt-6">
              <List>
                <ListItem>
                  Working closely with the client team, i carefully examined the
                  audit findings and systematically categorized the
                  accessibility barriers.
                </ListItem>
                <ListItem>
                  To streamline the resolution process, I segregated the issues
                  into three categories: UI/UX-related, development-related, and
                  a combination of both. This allowed us to address design and
                  technical challenges separately, ensuring more focused
                  solutions.
                </ListItem>
                <ListItem>
                  Additionally, I prioritized the issues based on their
                  severity—classifying them as critical, moderate, or minor—so
                  that the most urgent accessibility barriers could be tackled
                  first.
                </ListItem>
                <ListItem>
                  This structured approach enabled us to create a clear roadmap
                  for the redesign process, aligning efforts across design and
                  development teams.
                </ListItem>
              </List>
            </div>
            <div className="mt-10">
              <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                IMAGE HERE
              </div>
            </div>
          </div>
        </section>

        <section className="container max-w-240">
          <div className="mt-24">
            <HeadingText>Key WCAG Guidelines and Success Criteria</HeadingText>
          </div>
          <List>
            <ListItem>
              To ensure compliance with accessibility standards, I conducted a
              detailed study of the European Union&apos;s Web Content
              Accessibility Guidelines (WCAG 2.1).
            </ListItem>
            <ListItem>
              These guidelines serve as the foundational framework for creating
              inclusive digital experiences, specifically targeting users with
              visual, auditory, motor, and cognitive impairments.
            </ListItem>
          </List>
          <div className="mt-10">
            <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
              IMAGE HERE
            </div>
          </div>
        </section>

        {/* Final Design */}
        <section className="mt-32" id="final-design">
          <div className="container max-w-240">
            <Heading>Design Execution</Heading>
            <div className="mt-4">
              <HeadingText>Refine and improve Accessibility</HeadingText>
            </div>
            <p className="mt-6">
              After the audit review, I gathered the screens with identified
              issues and began the iteration process, keeping the WCAG
              guidelines in mind.
            </p>
          </div>

          <div className="py-28 bg-deutche gradient text-white mt-6">
            <div className="container max-w-240">
              <p className="text-2xl font-semibold">
                1. QR Code scanner not feasible for all users
              </p>
              <p className="mt-3">
                After discussing the issue with the product team, I began
                working on an achievable solution. By adding an alternate
                login/invite method, users can manually add entries, which also
                improves compatibility with screen readers.
              </p>
              <div className="mt-6">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>
          </div>

          <div className="py-28 bg-light">
            <div className="container max-w-240">
              <div className="text-2xl font-semibold">
                <p>
                  2. The color of the lamp can only be perceived or adjusted via
                  the visual impression
                </p>
                <p className="mt-3">
                  3. Sliders require complex pointer operation
                </p>
              </div>
              <p className="mt-3">
                I focused on creating solutions that not only make tasks simpler
                to perform but are also compatible with screen readers. I
                researched best practices for both color selection and slider
                design. <br />I carefully considered each design decision with
                all user bases in mind, aiming for a solution that is
                straightforward and accessible for screen readers while aligning
                with the overall design language
              </p>
              <div className="mt-6">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>
          </div>

          <div className="py-28 bg-deutche gradient text-white">
            <div className="container max-w-240">
              <p className="text-2xl font-semibold">
                4. Schedules: Time period not easy to record
              </p>
              <p className="mt-3">
                The existing flow for this section was complicated, with a
                disorganized structure and missing key information, which led to
                confusion. <br />
                My primary goal was to streamline the flow through multiple
                iterations, retaining only relevant information while
                readjusting familiar screens to ensure they were accessible for
                screen readers
              </p>
              <div className="mt-6">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>
          </div>

          <div className="py-28 bg-light">
            <div className="container max-w-240">
              <p className="text-2xl font-semibold">
                5. New messages/news only marked graphically
              </p>
              <p className="mt-3">
                The issue with the screen was that the only indicator for a new
                notification was a visual highlight, which is not accessible to
                all users. I improved accessibility by adding a simple label and
                establishing a proper annotation order for screen reader.
              </p>
              <div className="mt-6">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>
          </div>

          <div className="py-28 bg-deutche relative gradient text-white">
            <div className="container max-w-240 z-20 relative">
              <SubHeading>Annotation</SubHeading>
              <div className="mt-4">
                <HeadingText>Enhancing Screen Reader Accessibility</HeadingText>
              </div>
              <div className="mt-6">
                <List>
                  <ListItem>
                    For the screen reader annotation exercise, I conducted
                    extensive research by reviewing multiple resources on
                    accessibility best practices and consulting with an
                    accessibility expert.
                  </ListItem>
                  <ListItem>
                    Additionally, I collaborated with the development team to
                    identify areas where proper labelling and logical reading
                    order were missing or incorrect.
                  </ListItem>
                  <ListItem>
                    After pinpointing these gaps, I implemented clear,
                    descriptive labels and ensured a well-structured annotation
                    flow, enabling screen readers to accurately convey the
                    content to users with visual impairments.
                  </ListItem>
                </List>
              </div>
              <div className="mt-6">
                <div className="w-full h-[500px] bg-slate-200 rounded-md flex items-center justify-center">
                  IMAGE HERE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Takeaway */}
        <section className="bg-light py-32">
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
                    Accessibility is not a choice; it’s a necessity.
                  </span>
                  <p className="mt-1">
                    Empathizing with users is crucial for a product designer,
                    and this project tested that at every step. I learned to
                    keep all users in mind while designing, and studying
                    accessibility revealed user pain points and struggles I
                    hadn’t previously considered or fully understood. This
                    project exposed me to an important and often overlooked
                    aspect of design.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="w-9 h-9 bg-slate-200 rounded-full shrink-0 flex items-center justify-center">
                  I
                </div>
                <div>
                  <span className="font-bold text-2xl">Function over form</span>
                  <p className="mt-1">
                    Throughout the redesign process, I was compelled to
                    iterating on designs that would be accessible to all users.
                    I dedicated time to brainstorming concepts and discussing
                    potential solutions with the client. Eventually, I focused
                    on simpler solutions that would pass the accessibility test
                    while also aligning with the client’s business goals and
                    remaining feasible for development.
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
                Empowering Every User: Solving Accessibility Challenges in Smart
                Home Technology
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
      </div>
    </main>
  );
}
