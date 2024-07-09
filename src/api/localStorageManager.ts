export class LocalStorageManager {
  static setIsLogined() {
    localStorage.setItem('isLogined', 'true');
  }

  static checkIsLogined() {
    const isLogined = localStorage.getItem('isLogined');
    return isLogined !== null;
  }

  static removeIsLodined() {
    localStorage.removeItem('isLogined');
  }
}
