import React from "react";
import style from "./experience.module.css";

export const Experience = () => {
  return (
    <div className={style.wraper}>
      <ul className={style.container}>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              2021
              <img
                src="/tooltip.jpg"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span
                className={style.tooltiptext}
                style={{ fontSize: "14px", padding: "5px" }}
              >
                Maintained and modernized the customer checkout UI by aligning
                with Figma designs, creating reusable Storybook/Bootstrap
                components, and improving responsive, cross-device performance.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              2022
              <img
                src="/tooltip.jpg"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span
                className={style.tooltiptext}
                style={{ fontSize: "14px", padding: "5px" }}
              >
                Developed and enhanced a large-scale CRM platform with
                integrated payment systems (Stripe, Braintree, PayPal), improved
                address validation through Melissa and USPS APIs.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              2023
              <img
                src="/tooltip.jpg"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span
                className={style.tooltiptext}
                style={{ fontSize: "14px", padding: "5px" }}
              >
                Refactored Node APIs to reduce server load by 30%. Additionally,
                built unit and E2E test automation with Cypress and Playwright,
                improving deployment stability by 20%.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              2024
              <img
                src="/tooltip.jpg"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span
                className={style.tooltiptext}
                style={{ fontSize: "14px", padding: "5px" }}
              >
                Designed and implemented a dynamic web access control system
                that conditionally displays a login iframe or block window,
                while maintaining and optimizing the system for long-term
                performance.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              {" "}
              2025
              <img
                src="/tooltip.jpg"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span
                className={style.tooltiptext}
                style={{ fontSize: "14px", padding: "5px" }}
              >
                Kept dependencies up to date to reduce tech debt and set up
                GitLab CI/CD pipelines to enforce code quality and security
                before production.
              </span>
            </div>
          </a>
        </li>
      </ul>

      <p className={style.lead} style={{ marginTop: "40px" }}>
        A streamlined of working experience is brought to create and lead the
        company project, empowering a new generation of entrepreneurs.
      </p>
    </div>
  );
};
