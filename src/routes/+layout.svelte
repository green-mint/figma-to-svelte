<script>
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="relative px-4 font-light">
	<Nav />
	<slot />

</div>
