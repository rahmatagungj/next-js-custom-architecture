import Payload from "src/Infrastructure/Payload/Payload";
import HomeUserInterface from "src/Web/UserInterface/HomeUserInterface";

export default class HomeSpecification {

  /**
   * 
   * @param {*} props 
   * @returns 
   */
  run(props) {
    const payload = new Payload(200, HomeUserInterface(props))  
    
    if (payload.status === 200) {
      return payload.data
    }

    throw new Error(payload.data)
  }
}