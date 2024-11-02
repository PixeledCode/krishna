import type { Metadata } from "next";
import { Toaster } from "sonner";
import { client } from "../client";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Krishna Sukumaran",
  description: "Krishna Sukumaran's personal website",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await client.fetch('*[_type == "siteSettings"][0]');

  return (
    <>
      <Toaster richColors closeButton />
      <Header resumeLink={data.resume as string} />
      {children}
      <Footer data={data} />
    </>
  );
}
