class Header extends HTMLElement{
    constructor(){
        super();

        this.innerHTML = `
		<header class="">
			<div class="container">
				<div class="header">
					<span class="logo">
						<a href="./index.html">
							<svg
  viewBox="0 0 63 20"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="xMidYMin meet"
>
  <g fill-rule="evenodd" transform="translate(24, 0.5) scale(1)">
    <path
      d="M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"
    ></path>
  </g>
</svg>

						</a>
					</span>
					<nav class="navigation">
						<ul>
							<li>
								<a class="navigation-link">Premium</a>
							</li>
							<li>
								<a class="navigation-link">Songs</a>
							</li>
							<li>
								<a class="navigation-link">Help</a>
							</li>
							<li>
								<a class="navigation-link">Download</a>
							</li>
							<li class="vertical_separator"></li>
							<li>
								<button class="profile_btn" type="button" onclick="profile()">
									<div class="usericon">
										<svg viewBox="0 0 1024 1024" aria-labelledby="mh-usericon-title">
											<title id="mh-usericon-title">Profil</title>
											<path d="M730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084Q106.388 763.84 84.96 802.41t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path>
										</svg>
									</div> 
									<div class="profile-title">
										<span>Profile</span> 
										<svg viewBox="0 0 1024 1024">
											<path d="M476.455 806.696L95.291 425.532Q80.67 410.911 80.67 390.239t14.621-34.789 35.293-14.117 34.789 14.117L508.219 698.8l349.4-349.4q14.621-14.117 35.293-14.117t34.789 14.117 14.117 34.789-14.117 34.789L546.537 800.142q-19.159 19.159-38.318 19.159t-31.764-12.605z"></path>
										</svg>
									</div>
								</button>
								<div id="profileMenu" class="profileMenu">
									<ul class="">
										<li class="">
											<a class="" href="./Spotify-songs/songs.html">Welcome</a> 
										</li>
								
									</ul>
								</div>
							</li>
						</ul>
					</nav>
					<div class="profile_icon-mobile">
						<div class="usericon">
							<a href="">
								<svg viewBox="0 0 1024 1024" aria-labelledby="mh-usericon-title">
									<title id="mh-usericon-title">Profil</title>
									<path d="M730.06 679.64q-45.377 53.444-101.84 83.443t-120 29.999q-64.032 0-120.75-30.503t-102.6-84.451q-40.335 13.109-77.645 29.747t-53.948 26.722l-17.142 10.084Q106.388 763.84 84.96 802.41t-21.428 73.107 25.461 59.242 60.754 24.705h716.95q35.293 0 60.754-24.705t25.461-59.242-21.428-72.603-51.679-57.225q-6.554-4.033-18.907-10.84t-51.427-24.453-79.409-30.755zm-221.84 25.72q-34.285 0-67.561-14.873t-60.754-40.335-51.175-60.502-40.083-75.124-25.461-84.451-9.075-87.728q0-64.032 19.915-116.22t54.452-85.964 80.67-51.931 99.072-18.151 99.072 18.151 80.67 51.931 54.452 85.964 19.915 116.22q0 65.04-20.167 130.58t-53.948 116.72-81.426 83.443-98.568 32.268z"></path>
								</svg>
							</a>
						</div> 
						<div class="container-togg" onclick="toggler(this)">
							<div class="bar1"></div>
							<div class="bar2"></div>
							<div class="bar3"></div>
						</div>
					</div>
				</div>
				<div id="mySidenav" class="sidenav">
					<ul>
						<li>
							<a class="sidenav-link" href="./premium.html">Premium</a>
						</li>
						<li>
							<a class="sidenav-link" href="./help.html">Help</a>
						</li>
						<li>
							<a class="sidenav-link" href="./download.html">Download</a>
						</li>
						<li class="h_separator"></li>
						<li>
							<a class="sidenav-link light" href="#">Welcome</a>
						</li>
						<li>
							<a class="sidenav-link light son" href="./index.html"
								>Logout</a
							>
						</li>
					</ul>
					<span class="img">
                                <img src="./assets/spotifyLogo.png" alt="">
                            </span>
				</div>
			</div>
		</header>
        `;
    }
}

window.customElements.define('custom-header', Header);