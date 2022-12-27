<script>
	// @ts-nocheck
	/** @type {import('./$types').PageData} */ export let data;

	import { Card, Button, Toggle } from 'flowbite-svelte';
	let vCard = false;
</script>

<section class="max-h-screen overflow-y-hidden">
	<img
		alt="data"
		src="https://res.cloudinary.com/dqtst2xq6/image/upload/v1665217359/large_62b2bf34a8cee_cc81e449bb.webp"
	/>
	<div class="-mt-8">
		<div class="rounded-2xl shadow bg-white z-30 relative px-4 h-96 py-4">
			<div class="flex justify-center">
				<div class="bg-gray-200 py-1 w-10 rounded-md" />
			</div>
			<div class="mt-2">
				<span class="mb-2 text-2xl font-bold tracking-tight text-gray-900"> Nasi Goreng </span>
				<div class="flex justify-start items-center gap-1">
					<span class="dark:text-white text-sm">Food</span>
					<span class="text-sm">15 mins</span>
				</div>
				<div class="border-t-2 mt-4" />
				<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-4">Nasi Goreng</div>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight mt-3">
					Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse
					chronological order.
				</p>
			</div>
			<div class="border-t-2 mt-4" />
			<div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 mt-4">Ingredients</div>
			<div class="">
				<ul>
					<li />
				</ul>
			</div>
		</div>
	</div>
</section>
