import { useState } from "react";
import Button from "@components/button";
import { Layout } from "@components/layout";

export default function () {
  const [count, setCount] = useState(0);
  return (
    <Layout title="Home">
      <div className="flex justify-end w-full">
        <a href="/settings">Settings</a>
      </div>
      <div className="flex">
        <Button onClick={() => setCount((prev) => prev - 1)}>-</Button>
        <span className="px-4 text-xl">{count}</span>
        <Button
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          +
        </Button>
      </div>
    </Layout>
  );
}
