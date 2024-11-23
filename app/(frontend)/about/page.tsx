import ReactMarkdown from "react-markdown";
import { client } from "@/app/client";

async function App() {
  const data = await client.fetch('*[_type == "about"][0]');

  return (
    <main>
      <div className="container max-w-240">
        <h1 className="font-display leading-display text-4xl text-center mt-6">
          {data.heading}
        </h1>

        <div className="mt-10 text-center h-[496px] bg-[#AF8484] " />

        <div className="mt-10 whitespace-pre-wrap">
          <ReactMarkdown>{data?.headingText}</ReactMarkdown>
        </div>
      </div>

      <div className="mt-10 h-[256px] bg-gray-200" />

      <div className="my-28 container max-w-240 text-center">
        <p className="font-display leading-display text-2xl">
          {data.footerSubtitle}
        </p>
        <div className="font-display leading-display text-4xl mt-4 whitespace-pre-wrap">
          <ReactMarkdown
            components={{
              a: ({ ...props }) => <a {...props} className="hover:underline" />,
            }}
          >
            {data.footerText}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}

export default App;
