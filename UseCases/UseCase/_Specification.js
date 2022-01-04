import Payload from "@/Infrastructure/Payload/Payload";
import UserInterface from "@/UserInterface/_UserInterface";

export default class Specification {

  /**
   * 
   * @param {*} props 
   * @returns 
   */
  run(props) {
    const payload = new Payload(200, new UserInterface(props))  
    
    if (payload.status === 200) {
      return payload.data
    }

    throw new Error(payload.data)
  }
}