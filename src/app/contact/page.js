import React from "react";
import Header from "@/shared/components/header/header"

const Page = () => {
  return (
    <div>
      <Header/>
    <div className="policy-page">
    <p style={{ fontSize: "11pt" }}>
    <span style={{ fontSize: "13.5pt" }}>
      <strong>Communication</strong>
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      At <strong>Dainik Patra Patrika</strong>, we value communication with our
      readers. If you have any questions, concerns, or feedback, please feel
      free to reach out to us through any of the following methods:
    </span>
  </p>
  <ul>
    <li>
      <p>
        <span style={{ fontSize: "12pt" }}>
          <strong>General Inquiries:</strong>{" "}
        </span>
        <a
          target="_blank"
          rel="noopener noreferrer nofollow"
          href="mailto:dainikpatrapatrika@gmail.com"
        >
          <span style={{ fontSize: "12pt" }}>dainikpatrapatrika@gmail.com</span>
        </a>
      </p>
    </li>
    <li>
      <p>
        <span style={{ fontSize: "12pt" }}>
          <strong>Advertisement Inquiries:</strong>{" "}
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
    </li>
    <li>
      <p>
        <span style={{ fontSize: "12pt" }}>
          <strong>Phone:</strong> +8801922140592
        </span>
      </p>
    </li>
    <li>
      <p>
        <span style={{ fontSize: "12pt" }}>
          <strong>Address:</strong> Vill: Mohonpur, PS: Monirampur, PO:
          Monirampur, Jasohre, Bangladesh.
        </span>
      </p>
    </li>
  </ul>
  <p>
    <span style={{ fontSize: "12pt" }}>
      We aim to respond to all inquiries within 48 hours.
    </span>
  </p>
    </div>
    </div>
  );
};

export default Page;
