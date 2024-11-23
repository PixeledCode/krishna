"use client";

import Image from "next/image";
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
import { Sidebar } from "../Sidebar";
import { Card } from "../Card";

export default function Work() {
  return (
    <div className="mt-12 mb-32">
      <div className="flex justify-center">
        <Image src="/myy-sports.png" width={109} height={36} alt="" />
      </div>
      <h1 className="text-xl sm:text-4xl font-display sm:leading-display text-center max-w-240 container mt-6">
        Revolutionising Local Sports: Redesigning a Mobile App for Players and
        Enthusiasts
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
                Reimagining the experience of the product for all users to
                increase engagement and enhance value proposition.
              </HeadingText>
              <div className="mt-6">
                <Paragraph>
                  The app, a <strong>sports entertainment platform</strong>,
                  allows creators and sports enthusiasts to{" "}
                  <strong>record local matches</strong>, providing a stage for{" "}
                  <strong>players to showcase their skills</strong> and for
                  viewers to <strong>livestream matches</strong>. The primary
                  focus of the redesign was to{" "}
                  <strong>enhance the user experience</strong>, making it easier
                  for players to share their matches while ensuring a{" "}
                  <strong>seamless viewing experience for fans</strong>.
                </Paragraph>
              </div>
            </div>
            <div className="mt-16 text-xl">
              <div>
                <span className="font-bold">My Role</span>
                <p className="mt-2">UX Research & Design in a team of 3</p>
              </div>
              <Separator className="my-8" />
              <div>
                <span className="font-bold">Timeline</span>
                <p className="mt-2">December 2022 - May 2023 (4 mo)</p>
              </div>
              <Separator className="my-8" />
              <div>
                <span className="font-bold">Scope</span>
                <div className="mt-2 flex items-center gap-2">
                  <p>4 Flows</p>|<p>20 Unique Screens</p>
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
                    The current app prioritizes displaying short and long-format
                    videos immediately upon opening, disrupting familiar user
                    patterns and creating a frustrating experience right from
                    the start.
                  </ListItem>
                  <ListItem>
                    The information architecture is overly complex, leading to
                    cognitive overload and a steep learning curve, making it
                    difficult for users to navigate the app efficiently.
                  </ListItem>
                </List>
              </div>
              <div className="mt-12 flex flex-wrap gap-6">
                <Pill>Complex Navigation</Pill>
                <Pill>Duplicated Accounts</Pill>
                <Pill>Poor Content Hierarchy</Pill>
                <Pill>Outdated UI</Pill>
              </div>
            </div>
            <div className="mt-16">
              <Image src="/myysports/1.png" alt="" width={960} height={554} />
            </div>
          </section>

          {/* Experiences */}
          <section className="mt-40 max-w-240 container">
            <SubHeading>Experiences</SubHeading>
            <div className="mt-4">
              <HeadingText>Who are the Users?</HeadingText>
              <div className="mt-6">
                <List>
                  <ListItem>
                    The app aims to foster a{" "}
                    <strong>community experience</strong> for players and sports
                    enthusiasts.
                  </ListItem>
                  <ListItem>
                    Users are categorized into <strong>three groups</strong>,
                    each engaging with the app for different purposes, although
                    a single user may belong to all three.
                  </ListItem>
                  <ListItem>
                    The <strong>primary users are the players</strong>, who
                    utilize the platform to showcase their skills, improve their
                    performance, and leverage the content as a portfolio to
                    secure more match opportunities.
                  </ListItem>
                </List>
              </div>
            </div>

            <div className="mt-6 grid auto-fit-[280px] gap-6">
              <Image src="/myysports/2.png" alt="" width={960} height={338} />
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
              <SubHeading>Project Goal</SubHeading>
              <div className="mt-4">
                <HeadingText>Design Goals</HeadingText>
              </div>
              <div className="mt-6 flex gap-8 flex-wrap font-medium text-xl">
                <span className="px-4 w-[216px] h-[216px] flex justify-center items-center text-center bg-[rgba(247,75,1,0.6)] border border-primary rounded-full">
                  Streamline navigation and content structure
                </span>
                <span className="px-4 w-[216px] h-[216px] flex justify-center items-center text-center bg-[rgba(247,75,1,0.6)] border border-primary rounded-full">
                  Create a functional and engaging profile section
                </span>
                <span className="px-4 w-[216px] h-[216px] flex justify-center items-center text-center bg-[rgba(247,75,1,0.6)] border border-primary rounded-full">
                  Foster Community Experience
                </span>
                <span className="px-4 w-[216px] h-[216px] flex justify-center items-center text-center bg-[rgba(247,75,1,0.6)] border border-primary rounded-full">
                  Simplify Information Architecture to improve ease of
                  exploration for users
                </span>
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
                    We divided the process into two phases. In the first phase,
                    I conducted user interviews and spent time analyzing and
                    mapping the user journey. Afterward, a competitor analysis
                    was conducted.
                  </ListItem>
                  <ListItem>
                    Meanwhile, my team worked closely with stakeholders to
                    establish the new brand identity and guidelines.{" "}
                  </ListItem>
                  <ListItem>
                    Once we gathered all the pain points, the brand identity,
                    and stakeholder expectations, we moved on to concept
                    development and design iterations. We maintained an open
                    channel with the client team to discuss regular updates and
                    seek approvals.
                  </ListItem>
                </List>
              </div>
            </div>
            <div className="mt-6">
              <Image src="/myysports/3.png" alt="" width={960} height={750} />
            </div>
          </section>

          {/* Research */}
          <section className="bg-light py-32 mt-24" id="research">
            <div className="container max-w-240">
              <Heading>Research</Heading>
              <div className="mt-4">
                <HeadingText>Conducting User Interviews</HeadingText>
              </div>
              <div className="mt-6">
                <span className="font-bold">Objective</span>
                <List>
                  <ListItem>
                    To understand what our users think about the current
                    application and uncover areas for improvement.
                  </ListItem>
                </List>

                <div className="mt-4">
                  <span className="font-bold">Recruitment</span>
                  <List>
                    <ListItem>
                      Recruited users from age-group 16-40 from different parts
                      of the country.
                    </ListItem>
                    <ListItem>
                      The criteria was to interview current users of the app,
                      they should be playing a sport or sports enthusiast
                    </ListItem>
                  </List>
                </div>
              </div>
              <div className="mt-10">
                <Image src="/myysports/4.png" alt="" width={960} height={468} />
              </div>

              <div className="mt-24">
                <HeadingText>Key Learnings from User Interviews</HeadingText>
              </div>
              <div className="mt-6 relative">
                <div className="grid auto-fit-[372px] gap-5 max-w-[764px]">
                  <ResearchCard>
                    Lack of clarity and understanding of the purpose of the
                    application when the user gets onboarded.
                  </ResearchCard>
                  <ResearchCard>
                    Lack of clarity and understanding of the purpose of the
                    application when the user gets onboarded.
                  </ResearchCard>
                  <ResearchCard>
                    Lack of clarity and understanding of the purpose of the
                    application when the user gets onboarded.
                  </ResearchCard>
                  <ResearchCard>
                    Lack of clarity and understanding of the purpose of the
                    application when the user gets onboarded.
                  </ResearchCard>
                  <ResearchCard>
                    Lack of clarity and understanding of the purpose of the
                    application when the user gets onboarded.
                  </ResearchCard>
                  <ResearchCard>
                    Lack of clarity and understanding of the purpose of the
                    application when the user gets onboarded.
                  </ResearchCard>
                </div>
                <Image
                  src="/notepad.png"
                  alt=""
                  width={220}
                  height={313}
                  className="absolute -bottom-10 right-0 hidden lg:block"
                />
              </div>
            </div>
          </section>

          {/* Competitor */}
          <section className="mt-32 container max-w-240">
            <HeadingText>Competitor Study</HeadingText>
            <div className="mt-6">
              <Paragraph>
                As part of the research phase, a thorough competitor analysis
                was conducted to gain insights into existing sports
                entertainment apps and identify industry best practices. By
                examining key competitors, valuable lessons were learned that
                informed the redesign strategy, ensuring that the new app not
                only meets but exceeds user expectations in delivering an
                exceptional experience for players and viewers alike.
              </Paragraph>
            </div>
            <div className="mt-10">
              <div className="flex justify-around gap-6 flex-wrap">
                <Image src="/myysports/5.png" alt="" width={705} height={171} />
              </div>
            </div>

            <div className="gap-5 grid auto-fit-[300px] mt-10">
              <div className="bg-light p-6 rounded-xl">
                <h4 className="uppercase font-bold text-2xl">Strategy</h4>
                <div className="mt-6 text-xl">
                  <List>
                    <ListItem>
                      Hotstar provides <strong>shows and clips</strong> from the
                      matches. It <strong>diversifies the content</strong> and
                      keep the users engaged with the platform even if there is
                      no live match streaming.
                    </ListItem>
                    <ListItem>
                      Youtube’s{" "}
                      <strong>
                        optimises both it’s long form and short form content
                      </strong>{" "}
                      by presenting it together in the homepage
                    </ListItem>
                  </List>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <h4 className="uppercase font-bold text-2xl">
                  User experience
                </h4>
                <div className="mt-6 text-xl">
                  <List>
                    <ListItem>
                      Youtube presents a very engaging experience to the viewer
                      when it comes to <strong>personalised content</strong>,
                      buttons <strong>like subscribe, save</strong> lets you
                      curate playlists and content.
                    </ListItem>
                    <ListItem>
                      Youtube provides{" "}
                      <strong>search suggestions and recommends</strong> videos
                      based on the user’s interest{" "}
                    </ListItem>
                  </List>
                </div>
              </div>

              <div className="bg-light p-6 rounded-xl">
                <h4 className="uppercase font-bold text-2xl">content</h4>
                <div className="mt-6 text-xl">
                  <List>
                    <ListItem>
                      Sportskeeda & ESPN provides content in the form of news,
                      articles, videos. It covers{" "}
                      <strong>wide range of topics</strong> within the sports
                      category.
                    </ListItem>
                    <ListItem>
                      ESPN specialises in <strong>live coverage</strong> of
                      various sports leagues
                    </ListItem>
                  </List>
                </div>
              </div>
            </div>
          </section>

          {/* Concept */}
          <section className="pt-32 container max-w-240" id="concepts">
            <Heading>Concepts</Heading>
            <div className="mt-4">
              <HeadingText>Restructuring Information Architecture</HeadingText>
            </div>
            <div className="mt-6">
              <List>
                <ListItem>
                  I worked on a new information architecture to enhance the
                  app’s usability and overall structure. This redesign involved
                  a comprehensive reorganisation of navigation to{" "}
                  <strong>
                    streamline user interactions and ensure intuitive access to
                    key features
                  </strong>
                  .
                </ListItem>
                <ListItem>
                  Additionally, the new architecture was designed with
                  scalability in mind,{" "}
                  <strong>
                    incorporating placeholders for future updates and features
                  </strong>{" "}
                  to align with evolving business requirements.
                </ListItem>
                <ListItem>
                  This strategic approach aimed to provide a more cohesive and
                  efficient user experience while accommodating future growth
                  and enhancements.
                </ListItem>
              </List>
            </div>
            <div className="mt-16">
              <Image src="/myysports/6.png" alt="" width={960} height={182} />
              <Image
                src="/myysports/6-b.png"
                alt=""
                width={960}
                height={1055}
                className="mt-6"
              />
            </div>
          </section>

          {/* wireframes */}
          <section className="bg-light py-32 mt-24" id="wireframe">
            <div className="container max-w-240">
              <Heading>wireframes</Heading>
              <div className="mt-4">
                <HeadingText>Initial Conceptual Designs</HeadingText>
              </div>

              <div className="mt-6">
                <Image
                  src="/myysports/7.png"
                  alt=""
                  width={960}
                  height={3894}
                />
              </div>
            </div>
          </section>

          {/* Visual Design */}
          <section className="mt-32 container max-w-240">
            <SubHeading>visual design</SubHeading>
            <div className="mt-4">
              <HeadingText>Visual Rebranding</HeadingText>
            </div>
            <div className="mt-6">
              <Paragraph>
                The visual rebranding process was inspired by top contemporary
                sports apps, with a focus on creating an aesthetic that is{" "}
                <strong>sleek, bold, dynamic</strong>, inspiring, and
                cutting-edge. This direction aimed to revitalise the app&rsquo;s
                appearance, making it more appealing and engaging for users,
                while reflecting the dynamic and energetic nature of the sports
                community.
              </Paragraph>
            </div>
            <div className="mt-16">
              <Image src="/myysports/8.png" alt="" width={960} height={507} />
            </div>
            <div className="mt-32">
              <HeadingText>Design System & Style Guide</HeadingText>
              <div className="mt-8">
                <Image src="/myysports/9.png" alt="" width={960} height={781} />
              </div>
            </div>
          </section>

          {/* Final Design */}
          <section className="pt-32 " id="design">
            <div className="container max-w-240">
              <Heading>final design</Heading>
              <div className="mt-4">
                <HeadingText>
                  The Ultimate Sports Entertainment Experience
                </HeadingText>
              </div>
            </div>
            <div className="mt-10">
              <Image
                src="/myysports/10.png"
                alt=""
                width={1440}
                height={1002}
                className="w-full"
              />
            </div>
            <div className="bg-light py-32 pb-16">
              <div className="container max-w-240">
                <HeadingText>Homepage</HeadingText>
                <div className="mt-10">
                  <Image
                    src="/myysports/11.png"
                    alt=""
                    width={960}
                    height={812}
                  />
                </div>
              </div>
            </div>
            <Image
              src="/myysports/12.png"
              alt=""
              width={1440}
              height={1598}
              className="w-full"
            />
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
                    src="/myysports/icon-1.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <span className="font-bold text-2xl">
                      Improving User Interview Techniques
                    </span>
                    <p className="mt-1">
                      Conducting user interviews requires strong communication
                      skills to help users feel comfortable and answer questions
                      without feeling nervous or frustrated. Going through
                      multiple interview, I improved my approach and managed to
                      gather valuable insights that were crucial for the concept
                      and design stages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <Image
                    src="/myysports/icon-2.svg"
                    alt=""
                    width={36}
                    height={36}
                  />
                  <div>
                    <span className="font-bold text-2xl">
                      Setting expectations
                    </span>
                    <p className="mt-1">
                      The clients had ambitious requirements, but with guidance
                      from my lead, I learned to prioritize users needs and pain
                      points, finding ways to incorporate the additional
                      requests where possible.
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
            image="/deutsche-card.png"
            title="Empowering Every User: Solving Accessibility Challenges in Smart Home Technology"
            brand="Deutsche Telekom"
          />
          <Card
            image="/innovapptive-card.png"
            title="Icon Design for Intuitive Interaction: Developing Iconography for Innovapptive"
            brand="Innovapptive"
          />
        </div>
      </section>
    </div>
  );
}

const ResearchCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[rgba(247,75,1,0.6)] p-6 font-semibold border border-primary rounded-2xl">
    {children}
  </div>
);
