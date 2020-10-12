module.exports = config => {
	config.addPassthroughCopy('./src/img/');
	config.addPassthroughCopy('./src/css/');
	config.addPassthroughCopy('./src/js/');
	config.setDataDeepMerge(true);

	// Returns work items, sorted by display order
	config.addCollection('work', collection => {
  return collection
    .getFilteredByGlob('./src/work/*.md')
    .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
	});

	// Returns "featured" work items, sorted by display order
	config.addCollection('featuredWork', collection => {
  return collection
    .getFilteredByGlob('./src/work/*.md')
    .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1))
    .filter(x => x.data.featured);
	});

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist'
    }
  };
};
