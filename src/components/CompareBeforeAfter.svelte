<script>
  import { CompareImage } from "svelte-compare-image";
  // or
  // import CompareImage from "svelte-compare-image/CompareImage.svelte";
</script>


<CompareImage
  imageLeftSrc="/images/content/before.png"
  imageLeftAlt="Left"
  imageRightSrc="/images/content/after.png"
  imageRightAlt="right"
  --handle-size="2.5rem"
  --slider-color="#ffffff"
  --slider-width="0.125rem"
/>