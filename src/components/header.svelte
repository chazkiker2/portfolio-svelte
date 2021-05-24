<script>
	import ThemeSwitcher from "./theme-switcher.svelte";
	import TopAppBar, {Row, Section, Title} from "@smui/top-app-bar/styled";
</script>

<TopAppBar variant="static" prominent={false} dense={true} >
	<Row>
		<Section>
			<Title>Chaz Kiker</Title>
		</Section>
		<Section align="end" toolbar>
			<ThemeSwitcher />
		</Section>
	</Row>
</TopAppBar>
