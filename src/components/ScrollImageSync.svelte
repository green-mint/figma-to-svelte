<script>
	import Button from './Button.svelte';
	import Carousel from './Carousel.svelte';
	import ScrollImageSyncCard from './ScrollImageSyncCard.svelte';

	const content = [
		{
			title: 'Premier échange en magasin',
			text: 'Pour identifier vos besoins, votre projet, votre budget et vous faire découvrir nos produits.',
			image: '/images/content/scroll/1.png',
			sideImage: '/images/content/carousel/1.png',
			positionClasses: 'bottom-9 right-16'
		},
		{
			title: 'Visite technique à domicile',
			text: 'Afin d’analyser la faisabilité du projet, de vérifier la conformité aux normes et de prendre les côtes.',
			image: '/images/content/scroll/2.png',
			sideImage: '/images/content/carousel/2.png',
			positionClasses: 'bottom-9 right-48'
		},
		{
			title: 'Installation',
			text: "Après avoir validé l'emplacement et préparé le site — protection des meubles, petite maçonnerie, fumisterie... —, nos poseurs expérimentés installent votre poêle / cheminée avec la plus grande minutie.",
			image: '/images/content/scroll/3.png',
			sideImage: '/images/content/carousel/3.png',
			positionClasses: 'bottom-9 right-24'
		},
		{
			title: 'Suivi',
			text: 'Nous vous accompagnons dans l’utilisation de votre appareil et vous proposons des services de maintenance et de dépannage.',
			image: '/images/content/scroll/4.png',
			sideImage: '/images/content/carousel/4.png',
			positionClasses: 'right-32'
		},
		{
			title: 'Savoir-faire',
			text: 'Nous sommes à votre écoute et nous vous proposons des solutions adaptées à vos besoins et à votre budget.',
			image: '/images/content/scroll/5.png',
			sideImage: '/images/content/carousel/5.png',
			positionClasses: 'right-14 top-2'
		}
	];

	let currentId = 0;

  function updateCurrentId(id=0) {
    console.log("The current id is: ", id)
    currentId = id;
  }
</script>

<div class="mx-auto">
	<h1 class="text-center text-5xl text-darkprimary font-semibold">Un service clé en main</h1>
	<p class="max-w-lg mt-5 text-center mx-auto ">
		Que ce soit pour remplacer l’existant ou pour installer votre premier appareil de chauffe, nous
		vous proposons un accompagnement qui s’inscrit dans la durée :
	</p>

	<div class="mt-20 flex items-stretch">
		<div class="w-1/2">
			<div>
        <img src="{content[currentId].sideImage}" alt="" />
      </div>
		</div>

		<div class="w-1/2 max-h-[700px] overflow-scroll hide-bar">
			<div class="flex flex-col space-y-24 mt-44 mb-52 text-darkprimary">
				{#each content as { title, text, image, positionClasses }, i (i)}
          <ScrollImageSyncCard
            on:enter={() => updateCurrentId(i)}
            title={title}
            text={text}
            image={image}
            positionClasses={positionClasses}
            index={i + 1}
          />
				{/each}
			</div>
		</div>
	</div>

	<div class="flex justify-end mt-4 mr-12">
		<Button>Nous retrouver au magasin</Button>
	</div>
</div>
