import Spesification from "@/UseCase/_Spesification";

let fakeData = {
  name: 'Rahmat Agung Julians',
  email: 'rahmatagungj@gmail.com'
} 

export default function Controller() {

  const {name, email} = fakeData

  return new Spesification().run({greeting})
}
