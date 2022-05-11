const ghpages = require("gh-pages");
const pathname = `${__dirname}/out`;
const repoURL = "https://github.com/anantojha/anantojha.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "deploy",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
