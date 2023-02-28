import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { IPolicyBody, IPolicyTableRow } from "../../../../../interfaces/cms";

import "./BodyContent.styles.scss";

type Props = { body: IPolicyBody[] };

export const BodyContent = ({ body }: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return structure based on body content type
  function bodyType(b: IPolicyBody): JSX.Element {
    switch (b.type) {
      case "text":
        if (!b.content) return <></>;
        return <ReactMarkdown>{b.content}</ReactMarkdown>;

      case "table":
        if (!b.rows) return <></>;
        // Desktop mode
        if (windowWidth >= 720) {
          return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Host</th>
                  <th>Expiration</th>
                  <th>Service</th>
                </tr>
              </thead>
              <tbody>
                {b.rows.map((row: IPolicyTableRow, index: number) => (
                  <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.host}</td>
                    <td>{row.expiration}</td>
                    <td>{row.service}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          );
          // Mobile mode
        } else {
          return (
            <div className="body-type--table">
              {b.rows.map((row: IPolicyTableRow, index: number) => (
                <table key={index}>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>{row.name}</td>
                    </tr>
                    <tr>
                      <th>Host</th>
                      <td>{row.host}</td>
                    </tr>
                    <tr>
                      <th>Expiration</th>
                      <td>{row.expiration}</td>
                    </tr>
                    <tr>
                      <th>Service</th>
                      <td className="last">{row.service}</td>
                    </tr>
                  </tbody>
                </table>
              ))}
            </div>
          );
        }

      default:
        return <></>;
    }
  }

  return (
    <div className="body-content">
      {body.map((body: IPolicyBody, index: number) => (
        <div key={index}>{bodyType(body)}</div>
      ))}
    </div>
  );
};
