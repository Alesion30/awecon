import firebase from 'firebase';

// 実際に使用するデータ型
export interface PastData {
    date: firebase.firestore.Timestamp;
    dateStr: string;
    temperature: number
    threshold: number
}

// firestoreから送られるデータ型
export interface FirebaseData {
    date: firebase.firestore.Timestamp;
    temperature: number
    threshold: number
}
