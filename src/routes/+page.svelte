<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */ export let data;
	import Card from './Card.svelte';
	import { Alert } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main class="py-8 px-4">
	<div class="grid grid-cols-2 gap-4">
		{#each data.data as record, i}
			<Card
				id={record.id}
				image={record.attributes.gambar.data.attributes.url}
				title={record.attributes.nama_kost}
				description={record.attributes.description}
			/>
		{/each}
	</div>
</main>
