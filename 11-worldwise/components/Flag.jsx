import twemoji from "twemoji";

export default function Flag({ emoji, size = 20 }) {
  if (!emoji) return null;
  return (
    <span
      style={{
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
      }}
      dangerouslySetInnerHTML={{
        __html: twemoji.parse(emoji, { folder: "svg", ext: ".svg" }),
      }}
    />
  );
}
