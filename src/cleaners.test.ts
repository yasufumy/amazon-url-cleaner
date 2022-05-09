import { clean_amazon_pathname } from "./cleaners";

test("returns a cleaned Amazon pathname.", () => {
  expect(clean_amazon_pathname("BOOK_TITLE/dp/B00AQY7IFK/SOME_METADATA")).toBe(
    "/dp/B00AQY7IFK"
  );
  expect(clean_amazon_pathname("/gp/product/B00AQY7IFK/SOME_METADATA")).toBe(
    "/gp/product/B00AQY7IFK"
  );
});

test("leaves pathname as it is if a URL is not Amazon.", () => {
  expect(clean_amazon_pathname("/path/to/something")).toBe(
    "/path/to/something"
  );
});
