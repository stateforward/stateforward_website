import Link from "next/link";

export default function DocsIndex() {
    return (
      <div>
        <h1>Documentation</h1>
        <Link href="/docs/intro">Introduction</Link>
        {/* You can add links to your MDX pages here */}
      </div>
    );
  }