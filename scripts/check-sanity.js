fetch('https://uzsdz3sl.api.sanity.io/v2025-06-01/data/query/production?query=' + encodeURIComponent('*[_type == "post"]'))
  .then(res => res.json())
  .then(data => {
    console.log("SANITY TOTAL POSTS:", data.result ? data.result.length : 0);
    console.log(JSON.stringify(data.result, null, 2));
  })
  .catch(err => console.error(err));
