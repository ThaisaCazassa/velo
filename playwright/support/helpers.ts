export function generateOrderCode() {
    const prefix = 'VLO';
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    function getRandomChar() {
      const index = Math.floor(Math.random() * alphanumeric.length);
      return alphanumeric[index];
    }
  
    let suffix = '';
    for (let i = 0; i < 6; i++) {
      suffix += getRandomChar();
    }
  
    return `${prefix}-${suffix}`;
  }