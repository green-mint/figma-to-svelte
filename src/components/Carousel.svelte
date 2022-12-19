<!-- A carousel that changes images after every 3 secs and loops through all the images -->

<script> 
  const images = [1, 2, 3, 4, 5].map((i) => `./src/images/content/carousel/${i}.png`); 

  let index = 0;

  // This function is called every 3 seconds
  setInterval(() => {
    index = (index + 1) % images.length;
  }, 3000);

</script>

<!-- Carousel component -->
<div>
  <img src="{images[index]}" alt="" />
</div>