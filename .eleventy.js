module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");

  // Operating-model helpers
  eleventyConfig.addFilter("neighbour", function(list, key, offset) {
    const i = list.findIndex(x => x.key === key);
    return list[i + offset] || null;
  });
  eleventyConfig.addFilter("pad2", n => String(n).padStart(2, "0"));
  eleventyConfig.addFilter("statusLabel", s => ({ live: "Live", draft: "Drafting", planned: "Planned" }[s] || s));

  // Simple date filter
  eleventyConfig.addFilter("date", function(date, format) {
    if (!date) return "";
    const d = new Date(date);
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    if (format === "MMMM YYYY") return `${month} ${year}`;
    if (format === "D MMMM YYYY") return `${day} ${month} ${year}`;
    return `${month} ${year}`;
  });

  eleventyConfig.addCollection("essays", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/essays/*.md").reverse();
  });

  eleventyConfig.addCollection("prototype", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/prototype/*.md").reverse();
  });

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/*.md").reverse();
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
