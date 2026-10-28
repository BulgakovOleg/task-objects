
export function personUpdate(data) {
  if (data.gender === "female") {
    if ('age' in data) {
      delete data.age;
    }
  } 
  else if (data.gender === "male") {
    if (data.income === undefined) {
      data.income = 100000;
    }
  }
  return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys3 = Object.keys(obj3);
  const allKeys = [...keys1, ...keys2, ...keys3];
  const uniqueKeys = [...new Set(allKeys)];
  return uniqueKeys.sort();
}

export function objectClone(obj, count) {
  const objectArray = [];
  for (let i = 0; i<count; i++) {
    const clone = structuredClone(obj)
    clone.id = i;
    objectArray.push(clone);
  }
  return objectArray;
}
