import { config, list } from "@keystone-6/core";
import { image, text } from "@keystone-6/core/fields";
import { Lists } from ".keystone/types";

const Post: any = list({
  fields: {
    title: text({ validation: { isRequired: true } }),
    slug: text({ isIndexed: "unique", isFilterable: true }),
    summary: text(),
    image: image(),
    content: text({
      ui: {
        displayMode: "textarea",
      },
    }),
  },
});

export default config({
  db: { provider: "sqlite", url: "file:./database/app.db" },
  experimental: {
    generateNextGraphqlAPI: false,
    generateNodeAPI: true,
  },
  lists: { Post },
});
