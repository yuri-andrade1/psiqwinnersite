const query = '*[_type == "post" && slug.current == $slug][0] {_id, title, "slug": slug.current, coverImage, excerpt, body, publishedAt, author, category, tags}';

fetch('https://uzsdz3sl.api.sanity.io/v2025-06-01/data/query/production?query=' + encodeURIComponent(query) + '&%24slug=%22ansiedade%22')
  .then(res => res.json())
  .then(data => {
    console.log("POST BY SLUG RESULT:", JSON.stringify(data.result, null, 2));
  })
  .catch(err => console.error(err));
