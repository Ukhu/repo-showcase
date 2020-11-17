import { fetchRepoDetails } from './graphql/api';
import { profileSection, repoCard } from './components';
import './style.css'

const mainContent = document.getElementById('main-content');
const loadingDiv = document.getElementById('loading');
const loadingSign = document.getElementById('loading-sign');
const profileDetails = document.getElementById('profile-details');
const repoCardsHolder = document.getElementById('repo-cards-holder');
const repoCount = document.getElementById('repo-count');

window.addEventListener('load', function() {
  fetchRepoDetails()
  .then(data => {
    const { name, login, bio, avatarUrl, repositories } = data.user;
    const profile = profileSection(name, login, bio, avatarUrl);
    const repoCards = Array.from(repositories.nodes).map((repo) => repoCard(repo));

    profileDetails.innerHTML = profile;
    repoCount.textContent = repositories.nodes.length;
    repoCardsHolder.innerHTML = `${repoCards.join('')}`;

    mainContent.setAttribute('aria-hidden', 'false');
    loadingDiv.style.display = 'none';
  })
  .catch((e) => {
    console.log(e);
    loadingSign.textContent = 'Error fetching user information!';
  })
})
