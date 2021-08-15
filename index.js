// Add your functions here





function map(src, callback) {
    const r = [];
  
    for (let i = 0; i < src.length; i++) {
      const theElement = src[i];
      r.push(callback(theElement));
    }
  
    return r;
  }
  