import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Contribute Images"
      description="Take a photo of yourself to add to dataset"
    />
    <Button>Contribute Image</Button>
  </div>
)

export default CallToAction
