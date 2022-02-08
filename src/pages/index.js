import HomeSpecification from "@/UseCase/HomeSpecification";

let greeting = 'Hello'


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
