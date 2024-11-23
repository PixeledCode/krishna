"use client";
// import React from "react";
// import { client } from "../client";;

import { toast } from "sonner";

export function App() {
  //   const data = await client.fetch('*[_type == "homepage"][0]');

  return (
    <main>
      <div className="container max-w-240">
        <h1 className="font-display leading-display text-4xl text-center mt-6">
          Welcome to my little corner
        </h1>

        <div className="mt-10 text-center h-[496px] bg-[#AF8484] " />

        <div className="mt-10">
          Hello! I’m Krishna, a Product Designer based in Bangalore.
          <br />
          With over two years of experience, I bring a blend of creativity and
          precision to my work. My journey began at the National Institute of
          Fashion Technology, where I specialized in jewelry design. This
          background not only honed my design thinking skills but also gave me a
          sharp eye for detail that I carry into every project.
          <br />
          <br />
          I’ve always been fascinated by the world of design—whether it’s the
          intricate textures found in nature, awe-inspiring architectural
          marvels, or abstract creations like Olafur Eliasson’s The Weather
          Project. I believe every design tells a story, and my mission is to
          create experiences that connect people on a deeper level. <br />
          <br />
          Understanding users is at the heart of my process. With each project,
          I strive to empathize more and design solutions that truly resonate
          with their needs. For me, design isn’t just about functionality; it’s
          about creating meaningful connections.
        </div>
      </div>

      <div className="mt-10 h-[256px] bg-gray-200" />

      <div className="my-28 container max-w-240 text-center">
        <p className="font-display leading-display text-2xl">
          This doesn’t have to end yet!
        </p>
        <p className="font-display leading-display text-4xl mt-4">
          Reach me{" "}
          <button
            type="button"
            onClick={() => {
              navigator.clipboard.writeText("krishnasukumaran18@gmail.com");
              toast.success("Email is copied to clipboard");
            }}
            className="hover:text-primary transition-colors duration-200 link"
          >
            here
            <span className="link_underline" />
          </button>{" "}
          to talk about design, coffee, and anything in between.
        </p>
      </div>
    </main>
  );
}

export default App;
