<script>
	import Button from '../components/Button.svelte';
	import '../app.css';
	import HeroSection from '../components/HeroSection.svelte';
	import Bold from '../components/Bold.svelte';
	import Carousel from '../components/Carousel.svelte';
	import ClickCarousel from '../components/ClickCarousel.svelte';
	import Input from '../components/Input.svelte';
	import CompareBeforeAfter from '../components/CompareBeforeAfter.svelte';
	// import ClickCarouselItem from 'src/components/CarouselClick/ClickCarouselItem.svelte';
</script>

<div class=" px-4">
	<HeroSection />
	<div class="flex">
		<div class="w-[55%] py-44 px-3 space-y-20">
			<p class="text-3xl">
				Des solutions de chauffe <Bold>clé en main</Bold>, qui font promesse d’un confort absolu pour
				accueillir, au coin du feu, tous vos moments de vie.
			</p>
	
			<Button><span class="">Demander un <Bold>devis gratuit</Bold></span></Button>
		</div>
		<div class="w-[45%] flex">
			<p class="self-end mb-14 max-w-md mx-auto">
				Ma Cheminée est concessionnaire exclusif de <Bold>Turbofonte</Bold>, marque de référence sur
				le marché, riche de
				<Bold>40 ans d’histoire</Bold>.
			</p>
		</div>
	</div>
	
	<div class="flex space-x-4">
		<div class="w-1/2 text-white bg-[#A0664F] py-20 rounded-xl px-14">
			<small class="text-sm text-neutral-200">Votre magasin à Pontault-Combault</small>
	
			<h2 class="text-5xl mt-8 font-semibold">Une entreprise familiale à vos côtés.</h2>
	
			<div class="mt-48 w-5/6">
				<p>
					Ma Cheminée est une <strong>entreprise familiale</strong>, à taille humaine, portée par une
					volonté forte : trouver un appareil de chauffe adapté à vos envies, qui s’intègre
					ingénieusement dans votre habitat
				</p>
	
				<p class="mt-4">
					Forts de plus de <strong>15 ans d’existence</strong>, nous sommes rompus à la gestion de
					tous types de projets, dans des configurations de foyers très diverses.
				</p>
			</div>
		</div>
		<div class="w-1/2">
			<img src="/images/content/family.png" alt="" />
		</div>
	</div>
	
	<div>
		<div class="mx-auto max-w-xl mt-24 mb-20">
			<p class="text-center text-lg">
				<Bold>Écoute, adaptabilité</Bold> et <Bold>sens du service</Bold> sont les maîtres-mots qui guident
				chacune de nos interventions.
			</p>
	
			<div class="mx-auto w-fit mt-10">
				<Button>Prendre rendez-vous</Button>
			</div>
		</div>
	</div>
	
	<div class="flex space-x-4">
		<div class="w-1/2">
			<img src="/images/content/man.png" alt="" />
		</div>
	
		<div class="bg-[#415A48] w-1/2 pt-20 pb-12 rounded-xl px-14 text-white">
			<small class="text-sm mt-1 text-neutral-300">Turbofonte</small>
	
			<h2 class="text-5xl mt-7 font-semibold">
				Votre interlocuteur unique pour gérer votre projet de A à Z.
			</h2>
	
			<div class="mt-24 w-10/12">
				<p>Nous testons et installons nous-mêmes tous nos poêles depuis plus de 15 ans.</p>
	
				<p class="mt-6">
					En rentrant dans notre magasin Turbofonte, vous pouvez être sûr de recevoir un conseil
					avisé, pour choisir un appareil de chauffe adapté à vos besoins, à votre habitat et à votre
					budget.
				</p>
			</div>
	
			<div class="flex justify-end text-sm mt-20">
				<p class="cursor-pointer">Prendre rendez-vous ↗</p>
			</div>
		</div>
	</div>
	
	<div class="flex my-52">
		<div class="w-[40%] pl-16 py-10 pb-20">
			<h1 class="text-5xl font-semibold">Vos poêles, inserts et cheminées.</h1>
			<div class="mt-10 pr-24">
				<p>
					Avec plus de <Bold>60 articles exposés dans notre showroom</Bold> et pas moins de 200 références
					en entrepôt, nous vous proposons une large gamme de produits : poêles à bois, poêles à pellets,
					inserts, foyers fermés et cheminées neuves aux <Bold>styles variés</Bold> (design, contemporain,
					rustique…).
				</p>
				<p class="mt-7">
					Pensés pour vous offrir le plus grand confort, les poêles, inserts et cheminées Turbofonte
					mêlent habilement esthétique, performance et praticité.
				</p>
			</div>
			<div class="mt-10">
				<Button>Découvrir notre sélection</Button>
			</div>
		</div>
		<div class="w-[60%] flex overflow-clip">
			<img class="h-fit z-10 relative top-72" src="/images/content/fireplace1.png" alt="" />
			<img class="h-fit z-20 relative right-36" src="/images/content/fireplace2.png" alt="" />
			<img class="h-fit z-30 relative top-44 right-60" src="/images/content/fireplace3.png" alt="" />
		</div>
	</div>
	
	<div>
		<h1 class="text-darkprimary font-semibold px-3 text-5xl my-10">Notre expertise en chiffre</h1>
		<div class="flex space-x-4 text-darkprimary">
			<div class="w-1/3 bg-[#EBEAE3] rounded-xl">
				<div class="mx-auto py-[4.5rem] text-center">
					<h3 class="text-6xl font-semibold mb-3">31</h3>
					<span class="text-lg">années d’existence</span>
				</div>
			</div>
	
			<div class="w-1/3 bg-[#EBEAE3] rounded-xl">
				<div class="mx-auto py-[4.5rem] text-center">
					<h3 class="text-6xl font-semibold text-darkprimary mb-3">200+</h3>
					<span class="text-lg">cheminées et poêles en stock</span>
				</div>
			</div>
	
			<div class="w-1/3 bg-[#EBEAE3] rounded-xl">
				<div class="mx-auto py-[4.5rem] text-center">
					<h3 class="text-6xl font-semibold text-darkprimary mb-3">4000+</h3>
					<span class="text-lg">clients accompagnés</span>
				</div>
			</div>
		</div>
		<div class="mt-12 flex justify-end">
			<p class="max-w-[39rem]">
				Ma cheminée Turbofonte, c’est aussi : 550 poses en 2021,  12 personnes à votre service, 1000
				interventions par an — SAV, ramonages et entretiens.
			</p>
		</div>
	</div>
	
	<div class="mt-44">
		<div class="mx-auto">
			<h1 class="text-center text-5xl text-darkprimary font-semibold">Un service clé en main</h1>
			<p class="max-w-lg mt-5 text-center mx-auto ">
				Que ce soit pour remplacer l’existant ou pour installer votre premier appareil de chauffe,
				nous vous proposons un accompagnement qui s’inscrit dans la durée :
			</p>
	
			<div class="mt-20 flex items-stretch">
				<div class="w-1/2">
					<Carousel />
				</div>
	
				<div class="w-1/2 max-h-[700px] overflow-scroll hide-bar">
					<div class="flex flex-col space-y-24 mt-44 mb-20 text-darkprimary">
						<div class="px-20">
							<div class="flex justify-between items-end">
								<h1 class="font-[500] text-[5.6rem]">1</h1>
								<img
									class="relative bottom-9 right-16"
									src="/images/content/scroll/1.png"
									alt=""
								/>
							</div>
							<h3 class="text-3xl font-semibold">Premier échange en magasin</h3>
							<p class="text-lg mt-3 leading-snug">
								Pour identifier vos besoins, votre projet, votre budget et vous faire découvrir nos
								produits.
							</p>
						</div>
						<div class="px-20">
							<div class="flex justify-between items-end">
								<h1 class="font-[500] text-[5.6rem]">2</h1>
								<img
									class="relative bottom-9 right-48"
									src="/images/content/scroll/2.png"
									alt=""
								/>
							</div>
							<h3 class="text-3xl font-semibold">Visite technique à domicile</h3>
							<p class="text-lg mt-3 leading-snug">
								Afin d’analyser la faisabilité du projet, de vérifier la conformité aux normes et de
								prendre les côtes.
							</p>
						</div>
						<div class="px-20">
							<div class="flex justify-between items-end">
								<h1 class="font-[500] text-[5.6rem]">3</h1>
								<img
									class="relative bottom-9 right-24"
									src="/images/content/scroll/3.png"
									alt=""
								/>
							</div>
							<h3 class="text-3xl font-semibold">Installation</h3>
							<p class="text-lg mt-3 leading-snug">
								Après avoir validé l'emplacement et préparé le site — protection des meubles, petite
								maçonnerie, fumisterie... —, nos poseurs expérimentés installent votre poêle /
								cheminée avec la plus grande minutie.
							</p>
						</div>
						<div class="px-20">
							<div class="flex justify-between items-end">
								<h1 class="font-[500] text-[5.6rem]">4</h1>
								<img class="relative right-32" src="/images/content/scroll/4.png" alt="" />
							</div>
							<h3 class="text-3xl font-semibold">Finitions</h3>
							<p class="text-lg mt-3 leading-snug">
								Des touches finales peuvent être apportées pour un résultat d’autant plus raffiné :
								mur de parement, plaque murale…
							</p>
						</div>
						<div class="px-20">
							<div class="flex justify-between items-end">
								<h1 class="font-[500] text-[5.6rem]">5</h1>
								<img class="relative right-14 top-2" src="/images/content/scroll/5.png" alt="" />
							</div>
							<h3 class="text-3xl font-semibold">Suivi & Entretien</h3>
							<p class="text-lg mt-3 leading-snug">
								Nous assurons la performance et la pérennité de votre appareil de chauffe : ramonages
								annuels, changement de pièces détachées, entretien du poêle…
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- <div>
		<CompareBeforeAfter />
	</div> -->
	
	<div class="my-32 px-16">
		<ClickCarousel />
	</div>
	
	<div class="flex space-x-4 mt-20">
		<div class="bg-[#9F5837] rounded-xl	 px-16 py-20 w-1/2 text-white placeholder:text-white">
			<h2 class="text-5xl font-normal">
				Vous souhaitez en savoir plus sur nos services et produits ?
			</h2>
			<div class="mt-8 mb-16">
				<span>Prenez rendez-vous avec un conseiller-expert Turbofonte</span>
			</div>
	
			<div class="flex flex-col space-y-3">
				<Input params={{ placeholder: 'Email *' }} />
				<Input params={{ placeholder: 'TÉLÉPHONE *' }} />
			</div>
	
			<div class="flex items-center space-x-8 my-10 mb-14">
				<div>
					<div class="p-[1.1rem] bg-[#FDEAE11A] bg-opacity-10 rounded-lg" />
				</div>
				<div>
					<p class="text-[0.9rem]">
						J'autorise Turbofonte à m'envoyer du contenu utile sur l'univers du poêle, insert et
						cheminée. Chaque email comporte un lien pour gérer / supprimer mes données et préférences
						email. En savoir plus sur nos politiques de confidentialité.
					</p>
				</div>
			</div>
	
			<div class="">
				<button class="bg-white text-center w-full text-black rounded-lg py-4 font-normal">
					<span>Nous contacter</span>
				</button>
			</div>
		</div>
		<div class="w-1/2">
			<img src="/images/content/store.png" alt="" />
	
			<div class="flex justify-between text-black">
				<div class="w-1/2">
					<h4 class="font-semibold mt-5 mb-3">Horaires</h4>
					<p class="text-sm">
						Nous vous ouvrons les portes de notre magasin du <strong class="font-semibold"
							>mardi au samedi</strong
						>, de
						<strong class="font-semibold">10h à 12h</strong>
						et de <strong class="font-semibold">14h à 19h.</strong>
					</p>
				</div>
	
				<div class="text-right w-1/3">
					<h4 class="font-semibold mt-5 mb-3">Adresse</h4>
					<p class="text-sm">96 Rue des Prés Saint-Martin Pontault-Combault</p>
				</div>
			</div>
		</div>
	</div>
	
	<div class="text-center text-[#B46832] mt-28 mb-20">
		<h2 class="text-3xl my-8">Liens vers autres pages, réseaux sociaux...</h2>
		<h2 class="text-3xl">Section à faire</h2>
		<p class="mt-10 mb-8">
			Ma Cheminée est titulaire de la qualification Qualibois Module Air, gage de la qualité
			d’installation <br /> des appareils de chauffage bois indépendants.
		</p>
		<span>Numéro Qualibois : QB/46629/164233/R.</span>
	</div>
</div>

<style>
	.hide-bar {
		/* display: none; */
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
		
	}

	.hide-bar::-webkit-scrollbar {
  display: none;
}
</style>
