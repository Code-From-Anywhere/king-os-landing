import Layout from "@theme/Layout";
import React, { useRef, useState } from "react";

const Home = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Layout>
      <div>
        <main className="flex flex-1 w-full h-full justify-center items-center">
          <h1>Be the King of your data</h1>
        </main>
      </div>
    </Layout>
  );
};

export default Home;
