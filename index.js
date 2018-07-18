function getIssues() {
  const repo = 'Jirles/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`).then(res => res.json()).then(function(json){
    const issuesDiv = document.getElementById('issues');
    const issuesHTML = json.map(i => `<a href='${i.html_url}'>${i.title}</a>` + `<p>${i.body}</p>`).join('');
    issuesDiv.innerHTML = issuesHTML;
  })
  };

function showIssues(json) {
  const issuesDiv = document.getElementById('issues');
  const issuesHTML =  `<a href='${json.html_url}'>${json.title}</a>` + `<p>${json.body}</p>`;
  issuesDiv.innerHTML = issuesHTML;
}

function createIssue() {
  const repo = 'Jirles/javascript-fetch-lab';
  const issueData = {title: document.getElementById('title').value, body: document.getElementById('body').value};

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'post',
    body: JSON.stringify(issueData),
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => res.json()).then(json => showIssues(json))
}

function showResults(json) {
<<<<<<< HEAD
  const resultsDiv = document.getElementById('results');
  const repoLink = `<a href='${json.html_url}' id='repo-full-name'>${json.full_name}</a>`;
  resultsDiv.innerHTML = repoLink;
=======
  console.log(json);
>>>>>>> 8955a93758a2b6f9ba032ce0d261cd6daa68a3be
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}
<<<<<<< HEAD
  }).then(res => res.json()).then(json => showResults(json))
=======
}).then(res => res.json()).then(json => showResults(json))
>>>>>>> 8955a93758a2b6f9ba032ce0d261cd6daa68a3be
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
<<<<<<< HEAD
  return '';
=======
  //headers: {
  //Authorization: `token 99b90db2c215c2715593880c20261b069e33bed9`
//}
  return '235b4c34290be321b895a61abc6f98ed319dd669';
>>>>>>> 8955a93758a2b6f9ba032ce0d261cd6daa68a3be
}
