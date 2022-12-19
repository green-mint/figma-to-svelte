<!-- carousel without dots and custom foward and back components  -->
<script>
	import { onMount } from 'svelte';
	import ClickCarouselItem from './ClickCarouselItem.svelte';
  import Icon from '@iconify/svelte';

	let Carousel;
	onMount(async () => {
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});
</script>

<svelte:component this={Carousel} dots={false} let:showPrevPage let:showNextPage>
  <div class="flex items-center" slot="prev" on:click={showPrevPage} >
    <Icon icon="material-symbols:arrow-back-ios-new-rounded" style="font-size: 55px; opacity: 70%" />
  </div>
    <ClickCarouselItem />
  <div class="flex items-center" slot="next" on:click={showNextPage}>
    <Icon icon="material-symbols:arrow-forward-ios-rounded" style="font-size: 55px; opacity: 70%" />
  </div>
</svelte:component>
