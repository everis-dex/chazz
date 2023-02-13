import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import { IPolicyBody, IPolicyTableRow } from "../../../../../interfaces/cms";

import "./BodyContent.styles.scss";

type Props = { body: IPolicyBody[] };

export const BodyContent = ({ body }: Props) => {
  // Creamos un estado con el valor del ancho de la pantalla (windowWidth):
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  // Creamos una función que nos re calcula el ancho de la pantalla:
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Return structure based on body content type
  function bodyType(b: IPolicyBody) {
    switch (b.type) {
      case "text":
        if (b.content) {
          return <ReactMarkdown>{b.content}</ReactMarkdown>;
        }
        break;

      case "table":
        if (b.rows && windowWidth > 768) {
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
                {b.rows.map((row: IPolicyTableRow, index: number) => {
                  const expiration = row.expiration.split("\n");
                  return (
                    <tr key={index}>
                      <td>{row.name}</td>
                      <td>{row.host}</td>
                      <td>
                        {/* Divide in different lines */}
                        {expiration.map((p: string, index: number) => (
                          <div key={index}>{p}</div>
                        ))}
                      </td>
                      <td>{row.service}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        }
        break;
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
