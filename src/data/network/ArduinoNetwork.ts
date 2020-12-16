import Axios from '../../plugin/axios';

class ArduinoNetwork {
  public getCurrentTemp = async () => {
    let temp: number | null = null;
    try {
      const res = await Axios().get('/temp');
      temp = res.data;
      return temp;
    } catch (err) {
      return null;
    }
  };
}
export default new ArduinoNetwork();
