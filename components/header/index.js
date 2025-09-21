/**
 * @async
 * @function Header
 *
 * @returns {string}
 */
export function Header() {
  return `
<header>
  <nav class="navbar" aria-label="Main navigation">
    <div class="nav-left">
      <div class="logo">
        <a href="#">
          <img src="assets/header/netflix-logo.svg" alt="Netflix Logo" />
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
        <a href="#"><img src="assets/header/search-icon.svg" alt="Search" /></a>
      </li>
      <li>
        <a href="#"><img src="assets/header/notification-icon.svg" alt="Notifications" /></a>
      </li>
      <li>
        <a href="#"><img src="assets/header/profile-icon.png" alt="User Profile" /></a>
      </li>
    </ul>
  </nav>
</header>
`.trim();
}
