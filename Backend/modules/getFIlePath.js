import path from "path";
export function getFilePath(url) {
  const routes = {
    "/": "../HTML/index.html",
    "/styles/variables.css": "../styles/variables.css",
    "/styles/index.css": "../styles/index.css",
    "/styles/general_styles.css": "../styles/general_styles.css",
    "/styles/hero.css": "../styles/hero.css",
    "/javascript/header.js": "../javascript/header.js",
    "/images/logo.png": "../images/logo.png",
    "/images/hero/2681.jpeg": "../images/hero/2681.jpeg",
  };

  const relativePath = routes[url];
  if (!relativePath) return null;
  return path.join(process.cwd(), relativePath);
}
