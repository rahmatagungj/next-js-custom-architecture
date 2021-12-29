import Spesification from "@/UseCase/_Spesification";

let fakeData = {
  greeting: 'Hello World',
} 

export default function Controller() {
  return new Spesification().run(fakeData)
}
