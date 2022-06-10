import { clean_product_pathname, is_product_pathname } from "./amazon";

test("returns a cleaned Amazon pathname.", () => {
  expect(clean_product_pathname("BOOK_TITLE/dp/B00AQY7IFK/SOME_METADATA")).toBe(
    "/dp/B00AQY7IFK"
  );
  expect(clean_product_pathname("/gp/product/B00AQY7IFK/SOME_METADATA")).toBe(
    "/gp/product/B00AQY7IFK"
  );
});

test("leaves pathname as it is if a URL is not Amazon.", () => {
  expect(clean_product_pathname("/path/to/something")).toBe(
    "/path/to/something"
  );
});

test("returns true if the pathname is an Amazon product URL.", () => {
  expect(is_product_pathname("/dp/B00AQY7IFK")).toBe(true);
  expect(is_product_pathname("/gp/product/B00AQY7IFK")).toBe(true);
});
