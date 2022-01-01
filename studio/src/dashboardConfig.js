export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61d0cb299a1becd1c141f91d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-814t88bq",
                  apiId: "422b3279-ba61-4b11-8f6b-8c751c292608",
                },
                {
                  buildHookId: "61d0cb298b3f2700100aac80",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4c285nwk",
                  apiId: "b1a4d921-687a-4ab3-8dad-ecfee3e6fdc5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/foxtrottwist/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4c285nwk.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
