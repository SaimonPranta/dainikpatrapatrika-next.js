import React from "react";
import Header from "@/shared/components/header/header"

const Page = () => {
  return (
    <div>
      <Header/>
    <div className="policy-page">
    <p style={{ fontSize: "11pt" }}>
    <span style={{ fontSize: "13.5pt" }}>
      <strong>Advertisement Policy</strong>
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>1. Types of Ads:</strong>
      <br />
      We use third-party advertising networks such as Google AdSense to display
      ads on our website. These ads may be targeted based on your browsing
      behavior and interests.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>2. Ad Placement:</strong>
      <br />
      Ads will be displayed throughout the website in designated ad spaces. We
      ensure that the ads do not interfere with the user experience or
      functionality of the website.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>3. Ad Content:</strong>
      <br />
      While we strive to ensure that all ads are appropriate and relevant,{" "}
      <strong>Dainik Patra Patrika</strong> is not responsible for the content
      of third-party ads. Ads are governed by the terms and privacy policies of
      the third-party advertising networks.
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>4. User Responsibility:</strong>
      <br />
      By using our website, you agree to view advertisements placed on our site.
      If you have any concerns or questions about the ads, please contact us at{" "}
    </span>
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="mailto:dainikpatrapatrika@gmail.com"
    >
      <span style={{ fontSize: "12pt" }}>dainikpatrapatrika@gmail.com</span>
    </a>
    <span style={{ fontSize: "12pt" }}>.</span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      <strong>5. Ad Clicks:</strong>
      <br />
      We do not encourage or incentivize users to click on ads. Users are
      advised to click on ads only if they are genuinely interested in the
      content they promote.
    </span>
  </p>
  <hr />
  <p>
    <span style={{ fontSize: "13.5pt" }}>
      <strong>Footer Section</strong>
    </span>
  </p>
  <p>
    <span style={{ fontSize: "12pt" }}>
      © 2024 <strong>Dainik Patra Patrika</strong> All rights reserved.
      <br />
      <strong>Editor:</strong> Md. Amimul Ehsan
      <br />
      <strong>Phone:</strong> +8801922140592
      <br />
      <strong>Advertisement:</strong> +8801515216271
      <br />
      <strong>Email:</strong>{" "}
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
      <strong>Advertisement Email:</strong>{" "}
    </span>
    <a
      target="_blank"
      rel="noopener noreferrer nofollow"
      href="mailto:dainikpatrapatrika24@gmail.com"
    >
      <span style={{ fontSize: "12pt" }}>dainikpatrapatrika24@gmail.com</span>
    </a>
    <span style={{ fontSize: "12pt" }}>
      <br />
      <strong>Address:</strong> Vill: Mohonpur, PS: Monirampur, PO: Monirampur,
      Jasohre, Bangladesh.
    </span>
  </p>
    </div>
    </div>
  );
};

export default Page;
