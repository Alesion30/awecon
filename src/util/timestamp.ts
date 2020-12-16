import moment from 'moment';
import firebase from 'firebase';

// firebaseのtimestamp型をstringに変換
export const formatTimestamp = (ts: firebase.firestore.Timestamp, format: string): string => {
  const _date = moment.unix(ts.seconds).format(format);
  return _date;
};
