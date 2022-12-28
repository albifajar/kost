<script>
	// @ts-nocheck
	export let title;
	export let image;
	export let description;
	export let id;
	export let price;
	export let timePeriod;

	import { Img } from 'flowbite-svelte';
	import IconPlus from './IconPlus.svelte';
	import IconDot from './IconDot.svelte';
	import { Card } from 'flowbite-svelte';
</script>

<div>
	<a
		class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md flex max-w-sm flex-col hover:bg-gray-100 dark:hover:bg-gray-700"
		href="/detail/{id}"
	>
		<img class="rounded-t-lg h-32 object-fit" src={image} alt="" />
		<div class="p-3">
			<h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400 leading-tight">
				{description}
			</p>
			<div>
				<span class="text-base font-bold  text-gray-700">{price}<small>/{timePeriod}</small></span>
			</div>
		</div>
	</a>
</div>
