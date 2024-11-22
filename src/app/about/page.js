import React from "react";
import Header from "@/shared/components/header/header"

const Page = () => {
  return (
    <div>
      <Header/>
    <div className="policy-page">
      <p style={{ fontSize: "11pt" }}>
        <span style={{ fontSize: "13.5pt" }}>
          <strong>About Us</strong>
        </span>
      </p>
      <p>
        <span style={{ fontSize: "12pt" }}>
          <strong>Dainik Patra Patrika</strong> is a leading online news portal
          that provides comprehensive news and updates from Bangladesh and
          around the world. Our mission is to deliver timely, accurate, and
          reliable news to our readers. We cover a wide range of topics,
          including politics, sports, entertainment, business, and lifestyle.
        </span>
      </p>
      <p>
        <span style={{ fontSize: "12pt" }}>
          Our editorial team is dedicated to providing unbiased and fact-based
          content, adhering to high journalistic standards. We believe in
          keeping our audience informed with quality content that enriches lives
          and fosters positive discussions.
        </span>
      </p>
      <p>
        <span style={{ fontSize: "12pt" }}>
          <strong>Editor:</strong> Md. Amimul Ehsan
          <br />
          <strong>Contact Information:</strong>
          <br />
          Phone: +8801922140592
          <br />
          Email:{" "}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="mailto:dainikpatrapatrika@gmail.com"
        >
          <span style={{ fontSize: "12pt" }}>dainikpatrapatrika@gmail.com</span>
        </a>
        <span style={{ fontSize: "12pt" }}>
          <br />
          Advertisement Email:{" "}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="mailto:dainikpatrapatrika24@gmail.com"
        >
          <span style={{ fontSize: "12pt" }}>
            dainikpatrapatrika24@gmail.com
          </span>
        </a>
      </p>
      <p />
    </div>
    </div>
  );
};

export default Page;
