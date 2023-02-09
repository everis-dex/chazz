import React from "react";

import { IPolicyBody, IPolicyTableRow } from "../../../../../interfaces/cms";

type Props = { body: IPolicyBody[] };

export const BodyContent = ({ body }: Props) => {
  // Return structure based on body content type

  function bodyType(b: IPolicyBody) {
    switch (b.type) {
      case "text":
        if (b.content) {
          const paragraphs = b.content.split(/\n/);
          return <>{paragraphs.map((p: string, index: number) => (p !== "" ? <div key={index}>{p}</div> : <br />))}</>;
        }
        break;

      case "table":
        if (b.rows) {
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
        }
        break;

      default:
        return <></>;
    }
  }

  return (
    <>
      {body.map((body: IPolicyBody, index: number) => (
        <div key={index}>{bodyType(body)}</div>
      ))}
    </>
  );
};
