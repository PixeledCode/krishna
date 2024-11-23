"use client";
import Image from "next/image";
import { toast } from "sonner";

export const Footer = ({
  data,
}: {
  data: {
    footerText: string;
    linkedIn: string;
    email: string;
    credits: string;
  };
}) => {
  return (
    <footer className="bg-dark pt-8 sm:pt-16 pb-6 text-text-on-bg whitespace-pre-line">
      <div className="container">
        <div className="flex items-center gap-4 justify-between mt-12">
          <div>
            <p className="font-display leading-display text-lg sm:text-3xl">
              {data?.footerText}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 sm:items-center mt-9 sm:text-xl items-start">
              <a href={data?.linkedIn} className="hover:underline">
                LinkedIn
              </a>
              <span className="h-[18px] w-0.5 bg-bg hidden sm:block" />
              <button
                type="button"
                onClick={() => {
                  if (data?.email) {
                    navigator.clipboard.writeText(data?.email);
                    toast.success("Email is copied to clipboard");
                  } else {
                    toast.error("Error copying email");
                  }
                }}
                className="hover:underline"
              >
                {data?.email}
              </button>
            </div>
          </div>
          <Image
            width={128}
            height={150}
            src="/cup.gif"
            unoptimized
            alt=""
            className="w-32 hidden sm:block"
          />
        </div>
        <p className="mt-12 sm:mt-24 text-sm">&#169; {data?.credits}</p>
      </div>
    </footer>
  );
};
