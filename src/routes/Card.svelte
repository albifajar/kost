<script>
	import IconPlus from './IconPlus.svelte';
	import IconDot from './IconDot.svelte';
	import { Card, Button, Rating, Badge } from 'flowbite-svelte';
</script>

<section class="border-0 shadow-none">
	<a href="/detail/hello-world">
		<img
			class="rounded-lg"
			src="https://res.cloudinary.com/dqtst2xq6/image/upload/v1665217359/large_62b2bf34a8cee_cc81e449bb.webp"
			alt="product 1"
		/>
	</a>
	<div class="mt-2">
		<a href="/detail/hello-world">
			<h5 class="text-base font-semibold tracking-tight text-gray-900 dark:text-white mt-1">
				Apple
			</h5>
		</a>
		<div class="flex justify-start items-center gap-2 mt-1">
			<span class="dark:text-white text-sm">Food</span>
			<IconDot />
			<span class="text-sm flex justify-start items-center gap-1"> <IconPlus />15 mins</span>
		</div>
	</div>
</section>
