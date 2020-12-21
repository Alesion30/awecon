export interface FirebaseStatus {
  status:
    | 0 // 取得中
    | 1 // 取得完了
    | 2; // 取得失敗
}
