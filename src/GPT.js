import React, { useState } from "react";
import OpenAI from "openai";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const GPT = () => {
  const [aiContent, setAIContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  let contentArray = [];
  console.log("check content:", contentArray);

  if (aiContent !== "") {
    contentArray.push(aiContent);
  }

  // console.log("checking content:", content, process.env.REACT_APP_API_KEY);
  return (
    <div style={{ width: "60%", textAlign: "left", marginLeft: "20%" }}>
      <Card>
        <Form>
          <Card.Body>
            <Card.Body>
              <div style={{ marginTop: "10px", fontWeight: "bolder" }}>
                Answers:
              </div>
              <div style={{ marginTop: "10px", minHeight: "400px" }}>
                {contentArray.map((val, key) => {
                  return (
                    <ul key={key}>
                      <div style={{ whiteSpace: "pre-line" }}>{val}</div>
                    </ul>
                  );
                })}
              </div>
            </Card.Body>

            <div style={{ marginTop: "10px" }}>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "bolder",
                  padding: "10px",
                }}
              >
                Type in your questions, It will tell you the answers:
              </span>
              <span>
                <Form.Control
                  as="textarea"
                  required={true}
                  rows="1"
                  id="text"
                  name="text"
                  style={{
                    marginLeft: "10px",
                    width: "100%",
                    height: "100px",
                  }}
                />
              </span>
            </div>

            <div
              style={{ textAlign: "right", padding: "10px", display: "flex" }}
            >
              <div style={{ marginRight: "10px" }}>
                <Button
                  className="bg-primary"
                  disabled={disableBtn}
                  onClick={async () => {
                    setDisableBtn(true);
                    setIsLoading(true);
                    var content = document.getElementById("text").value;
                    const openai = new OpenAI({
                      apiKey: localStorage.getItem("api_key"),
                      dangerouslyAllowBrowser: true,
                      // apiKey: process.env.API_KEY, // This is the default and can be omitted
                    });
                    try {
                      const completion = await openai.chat.completions.create({
                        messages: [{ role: "user", content: content }],
                        model: "gpt-3.5-turbo",
                      });
                      console.log("test", completion.choices[0]);
                      setAIContent(completion.choices[0]?.message?.content);
                      setDisableBtn(false);
                      setIsLoading(false);
                    } catch (e) {
                      window.alert(e.message);
                      setDisableBtn(false);
                      setIsLoading(false);
                    }
                  }}
                >
                  Send
                </Button>
              </div>
              {isLoading && (
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only"></span>
                </div>
              )}
            </div>
          </Card.Body>
        </Form>
      </Card>
    </div>
  );
};
