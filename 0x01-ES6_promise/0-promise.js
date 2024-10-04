<<<<<<< HEAD
export default function getResponseFromAPI() {
  return Promise.resolve();
}
=======
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    });
  }  
>>>>>>> 8254c78a9910984ca038ff6c8d100318f5444cd6
