import React from "react";
import Header from "@/shared/components/header/header"

const Page = () => {
  return (
    <div>
      <Header/>
    <div className="policy-page">
  <p style={{ fontSize: "11pt" }}>
    <span style={{ fontSize: "13.5pt" }}>
      <strong>Terms of Use</strong>
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>1. Acceptance of Terms:</strong>
      <br />
      By accessing and using <strong>Dainik Patra Patrika</strong>, you agree to
      be bound by the following Terms of Use. If you do not agree with these
      terms, please refrain from using our website.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>2. Content Ownership:</strong>
      <br />
      All content on <strong>Dainik Patra Patrika</strong>, including but not
      limited to text, images, videos, and graphics, is the property of{" "}
      <strong>Dainik Patra Patrika</strong> or its content suppliers. You may
      not copy, distribute, or use any content without prior written permission.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>3. User Conduct:</strong>
      <br />
      You agree not to post or distribute any content that is unlawful, harmful,
      offensive, or violates any third-party rights. We reserve the right to
      remove any content that violates these terms.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>4. Third-Party Links:</strong>
      <br />
      Our website may contain links to third-party websites. We are not
      responsible for the content or practices of these websites. You visit
      third-party sites at your own risk.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>5. Limitation of Liability:</strong>
      <br />
      <strong>Dainik Patra Patrika</strong> will not be liable for any damages
      resulting from the use or inability to use our site or services.
    </span>
  </p>

    </div>
    </div>
  );
};

export default Page;
