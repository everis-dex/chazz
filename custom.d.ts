/**
 * Custom type for importing svg files as React components.
 *
 * Used for assets that require dynamic color or styling stored in 'src/assets/'.
 *
 * @usage import { ReactComponent as Logo } from "./logo.svg";
 * @see https://create-react-app.dev/docs/adding-images-fonts-and-files/#adding-svgs
 */

declare module "*.svg" {
  import React from "react";
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
