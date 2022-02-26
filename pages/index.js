import { useRouter } from "next/router";

export default function () {
  const router = useRouter();
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={() => router.push("/page1")}>
        Page 1
      </button>
      <button onClick={() => router.push("/page2")}>
        Page{" "}
      </button>
    </div>
  );
}
