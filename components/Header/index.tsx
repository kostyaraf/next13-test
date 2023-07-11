import Link from "next/link";
import Navigation from "../Navigation";

type Props = {
  color?: string;
}

export default function Header({color}: Props) {
  return (
    <div
      style={{
        width: "100%",
        height: 60,
        background: color || "#000",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: 'relative',
      }}
    >

      <div style={{ position: 'absolute', left: 20, top: 15 }}>
        <Link href="/">
          <svg
            className="svg-icon"
            style={{
              width: "2em",
              height: "2em",
              verticalAlign: "middle",
              fill: "currentColor",
              overflow: "hidden",
            }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M787.7 895.6H618c-8.5 0-15.4-6.9-15.4-15.4V579.5H417.5v300.8c0 8.5-6.9 15.4-15.4 15.4H232.4c-8.5 0-15.4-6.9-15.4-15.4v-347H70.9c-6.2 0-11.9-3.8-14.2-9.5-2.4-5.8-1.1-12.4 3.3-16.8L499.1 67.7c2.9-2.9 6.8-4.5 10.9-4.5 4.1 0 8 1.6 10.9 4.5L960 506.8c4.4 4.4 5.7 11 3.3 16.8-2.4 5.8-8 9.5-14.2 9.5h-146v347c0 8.6-6.9 15.5-15.4 15.5z m-154.3-30.8h138.8v-347c0-8.5 6.9-15.4 15.4-15.4h124.3L522.8 113.3 510 100.5 108.2 502.3h124.3c8.5 0 15.4 6.9 15.4 15.4v347h138.8V564c0-8.5 6.9-15.4 15.4-15.4H618c8.5 0 15.4 6.9 15.4 15.4v300.8z"
              fill="#ffffff"
            />
          </svg>
        </Link>
      </div>

      <Navigation />

    </div>
  );
}
