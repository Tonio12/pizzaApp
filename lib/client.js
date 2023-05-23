import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "9mqvmhm7",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-22",
  token:
    "skZJnxwxN0YxOln5aDXTarRuXqx9Ktg2RxSb2NWFB9C9dS4nwjhESDZYnaJvOGasE8bu8C7r4dtP0WRt7dwqCMyLnoq1i7QFm8ZPWj1r1c9c3uG0rzQ4qT5ixhYaSjJcXHQ3mi5hLD467xcdUBMQ5WpbbZHQA5wquEvV2Qv6piUe6acOZUDI",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
