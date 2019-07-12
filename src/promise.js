//inside a function marked as async, you are allowed to place the await keyword in front of an expression that returns a promise.
// When you do, the execution of the async function is paused until the promise is resolved.

/*async function fetchCatAvatars(userId) {
  const response = await fetch(
    //awaits lets us wait until we have the data
    `http://catappapi.herokuapp.com/users/${userId}`
  );
  const user = await response.json(); //awaits to parse the json so it waits for that to finish
  const catImageUrls = []; // when we have the user data, it then constructs an empty array of cat image URLS
  for (const catId of user.cats) {
    // then starts looping the cats array of each user,
    const response = await fetch(
      // for every catId its going to do a fetch and wait for that fetch to complete which resolves into a response.
      `http://catappapi.herokuapp.com/cats/${catId}`
    );
    const catData = await response.json(); // which it calls .json on and waits for that to resolve into the actual catData
    catImageUrls.push(catData.imageUrl); // then it takes the imageUrl on the catData and pushes it into the catImagesUrls array, it does this for every cat.
  }
  return catImageUrls; // it then returns that array of cat urls.
}
const result = fetchCatAvatars(123);
console.log(result);*/
