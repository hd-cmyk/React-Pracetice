import twemoji from "twemoji";
export default function Flag({ emoji }) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, { folder: "svg", ext: ".svg" }),
      }}
    />
  );
}
