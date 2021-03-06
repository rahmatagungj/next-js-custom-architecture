import HomeSpecification from "@/UseCase/HomeSpecification";

let greeting = 'HELLO WORLD'


export async function getStaticProps(context) {
  return {
    props: {
      greeting
    },
  }
}

export default function HomeController(props) {
  return new HomeSpecification().run(props)
}
