class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

// TODO: 1
// const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         if (isOffline) {
//           rej(new NetworkError("Gagal mendapatkan data dari internet"));
//         } else {
//           res({ name: "John", age: 18 });
//         }
//       }, 500);
//     });
//   };

// TODO: 2
// const gettingUserName = () => {
//   fetchingUserFromInternet((error, user) => {
//     if (error) {
//       return error.message;
//     }
//     return user.name;
//   }, false);
// };

const fetchingUserFromInternet = (isOffline) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (!isOffline) {
        res({ name: "John", age: 18 });
      } else {
        rej(new NetworkError("Gagal mendapatkan data dari internet"));
      }
    }, 500);
  });
};

// TODO: 2
async function gettingUserName() {
  try {
    const user = await fetchingUserFromInternet(false);
    // console.log(user.name);
    return user.name;
  } catch (error) {
    // console.log(error.message);
    return error.message;
  }
}

const a = gettingUserName();
console.log(a);
// console.log(a);

// console.log(c);
// console.log(f);
