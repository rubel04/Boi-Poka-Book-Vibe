// const getStoredReadList = () => {
//     const storedListStr = localStorage.getItem('read-list');
//     if (storedListStr) {
//         const storedList = JSON.parse(storedListStr);
//         return storedList;
//     }
//     return [];
// }


// const addToReadList = (id) => {
//     const storedList = getStoredReadList()
//     if (storedList.includes(id)) {
//         console.log('already exist');
//     }
//     else {
//         storedList.push(id);
//         const storedListStr = JSON.stringify(storedList)
//         localStorage.setItem('read-list', storedListStr);
//     }
// }






const getStoredReadList = () => {
  // read-list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToReadList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    // already exists. do not add it
    console.log(id, "already exists in the read list");
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListStr);
  }
};

export { addToReadList, getStoredReadList };