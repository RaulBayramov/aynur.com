import path from "path";
export function getFilePath(url) {
  const routes = {
    "/": "../HTML/index.html",
    "/styles/variables.css": "../styles/variables.css",
    "/styles/index.css": "../styles/index.css",
    "/styles/general_styles.css": "../styles/general_styles.css",
    "/styles/hero.css": "../styles/hero.css",
    "/javascript/header.js": "../javascript/header.js",
    "/images/logo-modern.svg": "../images/logo-modern.svg",
    "/images/hero/2681.jpeg": "../images/hero/2681.jpeg",
    "/images/Categories/cookware.jpg": "../images/Categories/cookware.jpg",
    "/images/Categories/utensils.jpg": "../images/Categories/utensils.jpg",
    "/images/Categories/drinkware.jpg": "../images/Categories/drinkware.jpg",
    "/images/Categories/appliances.jpg": "../images/Categories/appliances.jpg",
    "/images/Categories/bathroom.jpg": "../images/Categories/bathroom.jpg",
    "/images/Categories/living.jpg": "../images/Categories/living.jpg",
    "/images/Categories/bedroom.jpg": "../images/Categories/bedroom.jpg",
    "/images/Categories/decor.jpg": "../images/Categories/decor.jpg",
  };

  const relativePath = routes[url];
  if (!relativePath) return null;
  return path.join(process.cwd(), relativePath);
}
