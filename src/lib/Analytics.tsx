import Script from "next/script";

export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  const host = process.env.NEXT_PUBLIC_ANALYTICS_HOST;

  if (!id || !host) {
    return null;
  }

  return (
    <Script
      strategy="beforeInteractive"
      data-website-id={id}
      src={`http://${host}/umami.js`}
      defer
      async
    />
  );
}
