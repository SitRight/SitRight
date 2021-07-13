import React from "react"

const Thanks = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "4rem 1rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          zIndex: -5,
          height: "100vh",
          width: "100vw",
          opacity: 0.5,
        }}
      />
      <h1 style={{ textAlign: "center" }}>Thank You!</h1>
      <p style={{ textAlign: "center", maxWidth: 440 }}>
          Learn more about the company below or reach out to updates.sitright@gmail.com
      </p>
      <br></br>
      <br></br>
      <div style={{ margin: 60, width: `250px`, position: "relative" }}>
        <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        </div>
        <div
          style={{
            position: "absolute",
            width: "250px",
            top: 0,
          }}
        >
        </div>
      </div>
    </div>
  )
}

export default Thanks