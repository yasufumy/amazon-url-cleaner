import { clean_amazon_pathname } from "./cleaners";

const pathname = document.location.pathname;
const cleaned_pathname = clean_amazon_pathname(pathname);

if (
  pathname !== cleaned_pathname ||
  document.location.search !== "" || // query parameters
  document.location.hash // fragment parameters
) {
  history.replaceState(null, "", cleaned_pathname);
}
