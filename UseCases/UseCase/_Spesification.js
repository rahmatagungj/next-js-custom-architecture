import Payload from "@/Payload/Payload";
import UserInterface from "@/UserInterface/_UserInterface";

export default class Spesification {

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