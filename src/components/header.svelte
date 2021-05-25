<script lang="ts">
	import {Link, link} from "svelte-navigator";
</script>


<header>
	<div class="wrapper">
		<a href="/" use:link>
			<h1>Chaz Kiker</h1>
		</a>
	</div>

	<nav class="link-wrapper">
		<Link class="custom-link" to="about">About</Link>
		<Link class="custom-link" to="projects">Projects</Link>
		<Link class="custom-link" to="contact">Contact</Link>
	</nav>
</header>



<style>
	header {
		background-color: var(--p1);
		padding: 0 2rem;
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
	}
	
	h1 {
		font-size: 3rem;
		font-weight: 600;
	}

	.wrapper a {
		text-decoration: none;
	}

	nav {
		display: flex;
		flex-flow: row nowrap;

	}
	.link-wrapper :global(.custom-link) {
		display: inline-block;
		background-color: var(--p2);
		text-decoration: none;
		color: var(--link);
	}

</style>
