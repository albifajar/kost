<script>
	import Card from './Card.svelte';
	import { Alert } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main class="py-8 px-4">
	<div class="grid grid-cols-2 gap-3">
		<Card />
		<Card />
		<Card />
		<Card />
	</div>
</main>
