"use client";
export default function ErrorPage({ error }: { error: Error }) {
  console.error(">> Error: ", error);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        Oops. Something went wrong!
        <br />
        <br />
        <b>{error.message}</b>
      </div>
    </div>
  );
}
