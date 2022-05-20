import Layout from "@theme/Layout";
import React, { useRef, useState } from "react";

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <main className="flex flex-1 w-full h-screen justify-center items-center">
        <h1>Be the King of your data</h1>
      </main>
    </Layout>
  );
};

export default Home;
