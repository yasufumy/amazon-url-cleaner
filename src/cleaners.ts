export function clean_amazon_pathname(pathname: string) {
  const matches = pathname.match(/\/(dp|gp\/product)\/[A-Z0-9]{10}/g);
  if (matches === null) {
    return pathname;
  } else {
    return matches.toString();
  }
}
