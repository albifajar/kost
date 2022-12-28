<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */ export let data;
	import Card from './Card.svelte';
	import { Alert } from 'flowbite-svelte';
	const rupiah = (number) => {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(number);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<main class="py-8 px-4 bg-gray-200 min-h-screen">
	<div class="grid grid-cols-2 gap-4">
		{#each data.data as record, i}
			<Card
				id={record.id}
				image={record.attributes.gambar.data.attributes.url}
				title={record.attributes.nama_kosan}
				description={record.attributes.alamat}
				price={rupiah(record.attributes.tarif)}
				timePeriod={record.attributes.jangka_waktu}
			/>
		{/each}
	</div>
</main>
