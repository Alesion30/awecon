import Axios from '../../plugin/axios';
import { Setting } from '../model/Setting';

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

  public controlAircon = async (setting: Setting) => {
    let query;
    await Axios()
      .get('/control/on', { params: setting })
      .then((res) => {
        console.log(res.data);
        query = res.data.query;
      });
    return query;
  };

  public stopAircon = async () => {
    await Axios()
      .get('/control/off')
      .then((res) => {
        console.log(res.data);
      });
  };
}
export default new ArduinoNetwork();
