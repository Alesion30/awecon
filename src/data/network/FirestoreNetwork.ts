import { firestore } from '../../plugin/firebase';
import { PastData, FirebaseData } from '../model/PastData';
import { formatTimestamp } from '../../util/timestamp';
import { round } from '../../util/round';

class FirestoreNetwork {
  public getPastData = async () => {
    const _data: PastData[] = [];
    const res = await firestore.collection('data').orderBy('date', 'desc').limit(30).get();
    res.forEach((doc) => {
      // firebaseから送られてきたデータ
      const _docData: FirebaseData = {
        date: doc.data().date,
        temperature: doc.data().temperature,
        threshold: doc.data().threshold,
      };

      // データ整形
      const _date = formatTimestamp(_docData.date, 'HH:mm');
      const _temp = round(_docData.temperature, 2);
      const _threshold = round(_docData.threshold, 1);

      // 返り値用のデータ
      const _d: PastData = {
        date: _docData.date,
        dateStr: _date,
        temperature: _temp,
        threshold: _threshold,
      };
      _data.push(_d);
    });
    const data = _data.reverse();
    return data;
  };
}
export default new FirestoreNetwork();
