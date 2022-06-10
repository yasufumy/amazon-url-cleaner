const AmazonProductLinkPattern = /\/(dp|gp\/product)\/[A-Z0-9]{10}/g;

export function is_product_pathname(pathname: string) {
  return pathname.match(AmazonProductLinkPattern) !== null;
}

export function clean_product_pathname(pathname: string) {
  const matches = pathname.match(AmazonProductLinkPattern);
  if (matches === null) {
    return pathname;
  } else {
    return matches.toString();
  }
}
