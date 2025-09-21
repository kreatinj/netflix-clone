import { loadSvgElement } from "../../js/core.js";

const netflixLogo = loadSvgElement("assets/header/netflix-logo.svg");
const searchIcon = loadSvgElement("assets/header/search-icon.svg");
const notificationIcon = loadSvgElement("assets/header/notification-icon.svg");

/**
 * @async
 * @function Header
 *
 * @returns {Promise<string>}
 */
export async function Header() {
  const [logo, search, notification] = await Promise.all([
    netflixLogo,
    searchIcon,
    notificationIcon,
  ]);

  return `
<header>
  <nav class="navbar" aria-label="Main navigation">
    <div class="nav-left">
      <div class="logo">
        <a href="#">
          ${logo}
        </a>
      </div>
      <ul class="nav-tabs">
        <li><a class="current" href="#">홈</a></li>
        <li><a href="#">시리즈</a></li>
        <li><a href="#">영화</a></li>
        <li><a href="#">게임</a></li>
        <li><a href="#">내가 찜한 리스트</a></li>
        <li><a href="#">언어별로 찾아보기</a></li>
      </ul>
    </div>
    <ul class="nav-right">
      <li>
        <a href="#">${search}</a>
      </li>
      <li>
        <a href="#">${notification}</a>
      </li>
      <li>
        <a href="#"><img src="assets/header/profile-icon.png" alt="User Profile" /></a>
      </li>
    </ul>
  </nav>
</header>
`.trim();
}
