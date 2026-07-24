fetch('https://uzsdz3sl.api.sanity.io/v2025-06-01/data/query/production?query=' + encodeURIComponent('*[_type == "post"]'), {
  headers: {
    'Origin': 'https://www.psiwinner.com.br'
  }
})
.then(res => {
  console.log("STATUS:", res.status);
  console.log("CORS ALLOW ORIGIN:", res.headers.get('access-control-allow-origin'));
})
.catch(err => console.error("FETCH ERROR:", err));
