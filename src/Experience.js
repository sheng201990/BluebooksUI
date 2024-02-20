import React from "react";
import style from "./experience.module.css";

export const Experience = () => {
  return (
    <div className={style.wraper}>
      <ul className={style.container}>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              {" "}
              2021
              <img
                src="/tooltip.png"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span className={style.tooltiptext} style={{ fontSize: "14px" }}>
                Started my front end develop job as a newbie. We started our
                project with a team of four.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              {" "}
              2022
              <img
                src="/tooltip.png"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span className={style.tooltiptext} style={{ fontSize: "14px" }}>
                Started with my subscription project since a year, learn how to
                use bootstrap, react, recoil, useForm, html and scss etc.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              {" "}
              2023
              <img
                src="/tooltip.png"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span className={style.tooltiptext} style={{ fontSize: "14px" }}>
                Designed different kind of payment methods like credit card,
                sepa debit, paypal express to support other countries like
                United States, United Kingdom, German, Japan, Australia.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              {" "}
              2024
              <img
                src="/tooltip.png"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span className={style.tooltiptext} style={{ fontSize: "14px" }}>
                Finished Designed subscription system and it implemented on the
                market and brought company income to the hightest in this year.
              </span>
            </div>
          </a>
        </li>
        <li className={style.link}>
          <a>
            <div className={style.tooltip}>
              {" "}
              Future
              <img
                src="/tooltip.png"
                width="20"
                height="20"
                style={{ margin: "1px", cursor: "pointer" }}
              ></img>
              <span className={style.tooltiptext} style={{ fontSize: "14px" }}>
                implemented new features to the project.
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
