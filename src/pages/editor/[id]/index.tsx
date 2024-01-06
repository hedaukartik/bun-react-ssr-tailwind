import { Layout } from "@components/layout";

export default function (props: any) {
  return (
    <Layout title="Editor">
      <div style={{ height: "20px" }}>{props.id}</div>
      <p>
        <a href="/settings">Settings</a>
      </p>
    </Layout>
  );
}
