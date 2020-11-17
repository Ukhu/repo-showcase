const dateStringOptions = { year: 'numeric', month: 'short', day: 'numeric' };

export function repoCard({name, description, primaryLanguage, forkCount, stargazerCount, pushedAt}) {
  return `
    <div class="repo-card">
      <div class="repo-details">
        <h3>${name}</h3>
        ${description ? `<p>${description}</p>` : ''}
        <div>
          ${ primaryLanguage ? `<span><span class="lang-color" style="background: ${primaryLanguage.color};"> </span>${primaryLanguage.name}</span>` : ''}
          ${ stargazerCount ? `<span><i class="far fa-star repo-icon"></i>${stargazerCount}</span>` : ''}
          ${ forkCount ? `<span><i class='fas fa-code-branch repo-icon'></i>${forkCount}</span>` : ''}
          Updated <span>  on ${new Date(Date.parse(pushedAt)).toLocaleDateString('en-NG', dateStringOptions)}</span>
        </div>
      </div>
      <div class="repo-star">
        <div>
          <button><i class="far fa-star"></i> Star</button>
        </div>
      </div>
    </div>
  `
};

export function profileSection(name, login, bio, avatarUrl) {
  return `
    <div>
      <img
        class="avatar-big"
        src="${avatarUrl}"
        alt="Account owner large"
        width="260"
        loading="lazy"
        height="260">
      <div class="smiley">
        <i class="far fa-smile"></i>
      </div>
      <h1 class="profile-details">
        <span class="full-name">${name}</span>
        <span class="handle">${login}</span>
      </h1>
    </div>
    <p id="bio" class="profile-summary">${bio}</p>
  `
}
