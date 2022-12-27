<script>
	// @ts-nocheck
	export let title;
	export let image;
	export let description;
	export let id;

	import { Img } from 'flowbite-svelte';
	import IconPlus from './IconPlus.svelte';
	import IconDot from './IconDot.svelte';
	import { Card, Button, Rating, Badge } from 'flowbite-svelte';
</script>

<section class="border-0 shadow-none">
	<a href="/detail/{id}">
		<img class="rounded-lg w-full h-48 object-cover" src={image} alt="product 1" />
	</a>
	<div class="mt-2">
		<a href="/detail/{id}">
			<h5 class="text-base font-semibold tracking-tight text-gray-900 mt-1">{title}</h5>
		</a>
		<div class="flex justify-start items-center gap-2 mt-1">
			<p>{description}</p>
		</div>
	</div>
</section>
