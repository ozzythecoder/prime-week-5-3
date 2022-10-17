console.log('***** Music Collection *****')

let collection = [];

// ADD TO COLLECTION

function addtoCollection(title, artist, yearPublished) {
  
  let obj = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }

  collection.push(obj);

  return obj;
}

console.log(addtoCollection('Of Unsound Mind', 'Lydia Liza', 2019))
console.log(addtoCollection('DAMN.', 'Kendrick Lamar', 2017))
console.log(addtoCollection('Mr. Morale & the Big Steppers', 'Kendrick Lamar', 2022))
console.log(addtoCollection('Few Good Things', 'Saba', 2022))
console.log(addtoCollection('Ten', 'Pearl Jam', 1991))
console.log(addtoCollection('Broken Bells', 'Broken Bells', 2010))

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

    // ANOTHER OPTION – this code will return searches that only include one of the two criteria
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
