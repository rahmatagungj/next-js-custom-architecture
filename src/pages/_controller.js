import Specification from "@/UseCase/_Specification";

let fakeData = {
  greeting: 'Hello World',
} 

export default function Controller() {
  return new Specification().run(fakeData)
}
