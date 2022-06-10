import { clean_product_pathname, is_product_pathname } from "./amazon";

function main() {
  const pathname = document.location.pathname;

  if (!is_product_pathname(pathname)) {
    return;
  }

  const cleaned_pathname = clean_product_pathname(pathname);

  history.replaceState(null, "", cleaned_pathname);
}

main();
