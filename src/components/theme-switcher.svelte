<script>
	import IconButton, { Icon } from '@smui/icon-button/styled';

	// initialize lightTheme based on user settings
	let lightTheme = typeof window === 'undefined' || window.matchMedia('(prefers-color-scheme: light)').matches;

	interface ThemeLink extends Element {
		rel: string;
		id: string;
		href: string;
	}

	/**
	 * toggle theme -- light-mode and dark-mode
	 */
	function switchTheme() {
		lightTheme = !lightTheme;
		let themeLink: ThemeLink | undefined = document.head.querySelector('#theme');
		if (!themeLink) {
			themeLink = document.createElement('link');
			themeLink.rel = 'stylesheet';
			themeLink.id = 'theme';
		}
		themeLink.href = `build/smui${lightTheme ? '' : '-dark'}.css`;
		document.head.querySelector('link[href="build/smui-dark.css"]').insertAdjacentElement('afterend', themeLink);
	}
</script>

<IconButton on:click={switchTheme} aria-label="Toggle theme">
	<Icon class="material-icons">{lightTheme ? "light_mode" : "dark_mode"}</Icon>
</IconButton>
