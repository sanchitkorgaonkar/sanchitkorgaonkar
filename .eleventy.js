module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/r");

  // Operating-model helpers
  eleventyConfig.addFilter("neighbour", function(list, key, offset) {
    const i = list.findIndex(x => x.key === key);
    return list[i + offset] || null;
  });
  eleventyConfig.addFilter("pad2", n => String(n).padStart(2, "0"));
  eleventyConfig.addFilter("byKey", (list, key) => list.find(x => x.key === key));
  eleventyConfig.addFilter("year", () => new Date().getFullYear());
  eleventyConfig.addFilter("checkData", list => Object.fromEntries(list.map(l => [l.key, {
    n: l.n, name: l.name, slug: l.slug, title: l.title, questions: l.questions
  }])));
  eleventyConfig.addFilter("seriesFor", (series, key) => series.filter(e => e.layer === key));
  eleventyConfig.addFilter("seriesNext", (series, n) => series.find(e => e.n === n + 1) || null);
  eleventyConfig.addFilter("seriesEntry", (series, url) => series.find(e => e.url === url) || null);
  // Library: reading entries (src/_data/library.js) merged with Sanchit's own notes, newest first
  eleventyConfig.addFilter("libraryItems", (library, notes) => {
    const reading = (library || []).map(e => ({
      kind: "reading", title: e.title, url: e.url, external: true, type: e.type,
      by: e.author + (e.source && e.source !== e.author ? " · " + e.source : ""),
      date: new Date(e.added || e.published), published: e.published, layer: e.layer,
      stance: e.stance, says: e.says, take: e.take
    }));
    const mine = (notes || []).map(n => ({
      kind: "note", title: n.data.title, url: n.url, external: false, type: "My note",
      by: n.data.type || "", date: n.date, year: n.data.year, layer: n.data.layer || null,
      says: n.data.excerpt || ""
    }));
    return reading.concat(mine).sort((a, b) => b.date - a.date);
  });
  eleventyConfig.addFilter("stanceLabel", s => ({ matches: "Matches what I saw", adds: "Adds to it", pushback: "I'd push back" }[s] || ""));
  eleventyConfig.addFilter("monthYear", d => { if (!d) return ""; const x = new Date(d); return x.toLocaleString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" }); });
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

  eleventyConfig.addCollection("notes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/notes/*.md")
      .filter(n => !n.data.hidden)
      .sort((a, b) => (b.data.year || 0) - (a.data.year || 0));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
