<script>
	import { inview } from 'svelte-inview';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let text = '';
	export let title = '';
	export let image = '';
	export let positionClasses = '';
	export let index = 0;
</script>

<div class="px-20">
	<!-- <div 
    use:inview={{}} 
    on:exit={(event) => {
      const { scrollDirection } = event.detail;

      if (scrollDirection === 'up') {
        dispatch('exit');
      }
    }}
    class="h-1 w-full " /> -->
	<div class="flex justify-between items-end">
		<h1 class="font-[500] text-[5.6rem]">{index}</h1>
		<img class="relative {positionClasses}" src={image} alt="" />
	</div>
	<h3 class="text-3xl font-semibold">{title}</h3>
	<div
		use:inview={{}}
		on:enter={() => {
			dispatch('enter');
		}}
		class="h-1 w-full "
	/>
	<p class="text-lg mt-3 leading-snug">
		{text}
	</p>
</div>
