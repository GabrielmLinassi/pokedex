# Pokedex NextJS App

This is a Next.js Pokedex application made with PokeAPI and Tailwind.css that provides functions such as listing all first 150 pokemons and some of its details. The main idea is to build a hybrid application with server-side rendering together with static-pages

![Screenshot_3](https://user-images.githubusercontent.com/17390090/105651980-06145300-5e97-11eb-9de4-def2f6490728.png)

## Features
- Uses Static-page generator (nextjs getStaticProps) to generate the index page with all the 150 pokemons on the build
- Uses SSR (Nextjs GetServerSideProps) to fetch the pokemon details so it's rendered dynamic on demand.

Live version can be accessed on [https://pokedex-phi-sage.vercel.app](https://pokedex-phi-sage.vercel.app)
