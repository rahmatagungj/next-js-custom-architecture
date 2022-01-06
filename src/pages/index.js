import HomeSpecification from "@/UseCase/HomeSpecification";

let name = 'Rahmat Agung Julians' 
let email = 'rahmatagungj@gmail.com'


export async function getStaticProps(context) {
  return {
    props: {
      name,
      email
    },
  }
}

export default function HomeController(props) {
  return new HomeSpecification().run(props)
}
