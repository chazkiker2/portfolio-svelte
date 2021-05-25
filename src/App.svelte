<script lang="ts">
	import { Router, Route } from "svelte-navigator";
	import Header from "./components/header.svelte";

</script>


<div class="app">
	<Router>
		<Header />

		<main>
			<Route path="/">
				<h3>Home</h3>
				<p>Home sweet home...</p>
			</Route>
		</main>

	</Router>
</div>

<style>
	:global(:root) {
		--base-gray: #333;
		--p1: #080705;
		--p2: #141414;
		--p3: #1a1a1c;
		--p4: #1f2023;
		--p5: #363841;
		--p6: #393c45;
		--p7: #40434e;
		--p8: #51545e;
		--p9: #61646d;
		--txt: #FFF;
		--link: #3e92cc;
	}

</style>
