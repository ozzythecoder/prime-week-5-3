console.log('***** Music Collection *****')

let collection = [];

// ADD TO COLLECTION

function addtoCollection(title, artist, yearPublished, tracks) {
  
  let obj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
    tracks: tracks
  }

  collection.push(obj);

  return obj;
}

console.log(addtoCollection('Of Unsound Mind', 'Lydia Liza', 2019,
  ['1. Gardenia: 3:25', '2: Crow On A Branch: 3:52', '3. Be Minor: 4:56'] ))
console.log(addtoCollection('DAMN.', 'Kendrick Lamar', 2017,
  ['1. BLOOD.: 1:58', '2. DNA.: 3:06', '3: YAH.: 2:40']))
console.log(addtoCollection('Mr. Morale & the Big Steppers', 'Kendrick Lamar', 2022,
  ['1. United In Grief: 4:15', '2. N95: 3:16', '3. Worldwide Steppers: 3:23']))
console.log(addtoCollection('Few Good Things', 'Saba', 2022,
  ['1. Free Samples: 2:08', '2. One Way: 2:46', '3. Survivor\'s Guilt: 3:43']))
console.log(addtoCollection('Ten', 'Pearl Jam', 1991,
  ['1. Once: 3:52', '2. Even Flow: 4:54', '3. Alive: 5:41']))
console.log(addtoCollection('Broken Bells', 'Broken Bells', 2010,
  ['1. The High Road: 3:52', '2. Vaporize: 3:30', '3: Your Head Is On Fire: 3:04']))

console.log(collection); // test

// SHOW COLLECTION

function showCollection(array) {
  console.log('The record collection consists of', array.length, ' albums:');
  for (let item of array) {
    console.log(`'${item.title}' by ${item.artist}, released ${item.yearPublished}`);
  }
}

showCollection(collection); // test

// FIND BY ARTIST

function findByArtist(artist) {
  let arr = [];

  for (let item of collection) {
    if (item.artist === artist) {
      arr.push(item);
    }
  }

  return arr;
}

console.log('Finding all albums by Kendrick Lamar:', findByArtist('Kendrick Lamar')); // test

// STRETCH GOALS
// SEARCH FUNCTION

console.log('*************************')
console.log('Stretch Goals - Search Function')

function search(criteria) {
  let arr = [];
  
  // If criteria is either falsy or empty, return entire collection
  if (!criteria || Object.keys(criteria).length === 0) { return collection };

  // Loop over collection
  for (let item of collection) {

    // If artist & year are a match, push to the array
    if (item.artist === criteria.artist && item.yearPublished === criteria.year) {
      arr.push(item);
    }

    // ANOTHER OPTION – this code will correctly return searches that only include one of the two search criteria
    //
    // if (item.artist === criteria.artist || !criteria.artist) {
    //   if (item.yearPublished === criteria.year || !criteria.year) {
    //     arr.push(item);
    //   }
    // }
  
  }

  return arr; // Return array
}

// Testing search

console.log('Searching for albums released by Kendrick Lamar in 2022:', search( { artist: 'Kendrick Lamar', year: 2022 } ));
console.log('Searching for albums released by Ray Charles:', search( { artist: 'Ray Charles' } ));
console.log('Searching for albums with no search criteria:', search());
console.log('Searching for albums with an empty object as criteria:', search( {} ));

// Testing search with enhanced functionality
// console.log('Searching for albums by Kendrick Lamar:', search( { artist: 'Kendrick Lamar' } ));
// console.log('Searching for albums released in 2022:', search( { year: 2022 } ));

// ADDING TRACKS

