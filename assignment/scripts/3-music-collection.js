console.log('***** Music Collection *****')

let collection = [];

// ADD TO COLLECTION

function addtoCollection(title, artist, year, tracks) {
  
  let obj = {
    title: title,
    artist: artist,
    year: year, // shortened from yearPublished
    tracks: tracks
  }

  collection.push(obj);

  return obj;
}

// NOTE - for brevity, I am only including the first three songs on each of these albums.

console.log('👍 addtoCollection() test:')

console.log(
addtoCollection( 'Of Unsound Mind', 'Lydia Liza', 2019,
  [ { title: 'Gardenia', duration: '3:25' },
    { title: 'Crow On A Branch', duration: '3:52' },
    { title: 'Be Minor', duration: '4:56' } ]
),

addtoCollection( 'DAMN.', 'Kendrick Lamar', 2017,
  [ { title: 'BLOOD.', duration: '1:58' },
    { title: 'DNA.', duration: '3:06' },
    { title: 'YAH.', duration: '2:40' } ]
),

addtoCollection( 'Mr. Morale & the Big Steppers', 'Kendrick Lamar', 2022,
  [ { title: 'United In Grief', duration: '4:15' },
    { title: 'N95', duration: '3:16' },
    { title: 'Worldwide Steppers', duration: '3:23' } ]
),

addtoCollection( 'Few Good Things', 'Saba', 2022,
  [ { title: 'Free Samples', duration: '2:08' },
    { title: 'One Way', duration: '2:46' },
    { title: 'Survivor\'s Guilt', duration: '3:43' } ]
),

addtoCollection( 'Feed Me to the Forest', 'Feed Me to the Forest', 2017,
  [ { title: 'Walking in the Direction of a Car Crash', duration: '2:15' },
    { title: 'Survivor\'s Guilt', duration: '4:40' },
    { title: 'If You Love the Ocean So Much, Then Drown in It', duration: '2:50' }]
),

addtoCollection('Ten', 'Pearl Jam', 1991,
  [ { title: 'Once', duration: '3:52' },
    { title: 'Even Flow', duration: '4:54' },
    { title: 'Alive', duration: '5:41'} ]
),

addtoCollection( 'Broken Bells', 'Broken Bells', 2010,
  [ { title: 'The High Road', duration: '3:52' },
    { title: 'Vaporize', duration: '3:30' },
    { title: 'Your Head Is On Fire', duration: '3:04' } ]
)) // test ok

console.log('logging full collection object:', collection); // test ok

// SHOW COLLECTION

function showCollection(array) {
  
  console.log('The record collection consists of', array.length, 'albums:');

  for (let item of array) {
    console.log(`'${item.title}' by ${item.artist}, released ${item.year}:`);

    // Set variable to print track number - this will scale with any number of tracks
    let i = 1;
    for (let track of item.tracks) {
      console.log('  ' + i + '. ' + track.title + ': ' + track.duration);
      i++;
    }
  }
}

console.log('**************************')
console.log('💿 showCollection() test:');

showCollection(collection); // test

console.log('**************************')

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

console.log('🎨 findByArtist() test:')
console.log('Finding all albums by Kendrick Lamar:', findByArtist('Kendrick Lamar')); // test ok

// STRETCH GOALS
// SEARCH FUNCTION

console.log('*************************')
console.log('🔍 Stretch Goals - Search Function')

// This search function will return any albums that match all of the *included* criteria,
// even if not every *possible* criteria is included. It will also match regardless of type case.

function search(criteria) {
  let arr = [];
  
  // If criteria is either falsy or empty, return entire collection
  if (!criteria || Object.keys(criteria).length === 0) { return collection };

  // Loop over collection
  for (let item of collection) {

    // If artist is a match or empty, check title
    if (!criteria.artist || criteria.artist.toLowerCase() === item.artist.toLowerCase()) {

      // If album title is a match or empty, check year
      if (!criteria.title || criteria.title.toLowerCase() == item.title.toLowerCase()) {
        // If year is a match or empty, check track titles
        if (criteria.year == item.year || !criteria.year) {
          
          // If track title is empty, push album to the array
          if (!criteria.trackTitle) { arr.push(item) } else {
            
            // otherwise loop over track titles
            for (let track of item.tracks) {
              // If track title is a match, push album to the array
              if (criteria.trackTitle.toLowerCase() == track.title.toLowerCase()) {
                arr.push(item);
              }

            } // end track for-of
          } // end track if
        } // end year if
      } // end title if
    } // end artist if
  } // end collection for-of loop

  return arr; // Return array

} // end function search()

// Testing search

console.log('Searching for albums released by Kendrick Lamar',
  search( { artist: 'kendrick lamar' } )); // test ok

console.log('Searching for albums with a track called "Survivor\'s Guilt"', 
  search( { trackTitle: 'Survivor\'s Guilt' } ) ) // test ok

console.log('Searching for albums released in 2022', 
  search ( { year: 2022 } ) ) // test ok

console.log('Searching for albums released by Kendrick Lamar in 2022, with a track called "N95":',
  search( { artist: 'Kendrick Lamar', year: 2022, trackTitle: 'N95' } )); // test ok

console.log('Searching for an album with all string criteria listed with insensitive case:', 
  search( { artist: 'lydia liza', title: 'OF UNSOUND MIND', trackTitle: 'crOw oN a braNCH' } ))
// test ok - returns correct entry regardless of case

console.log('Searching for albums released by Ray Charles:',
  search( { artist: 'Ray Charles' } )); // test ok - returns empty

console.log('Searching for albums with no search criteria:', search());
// test ok - returns full collection

console.log('Searching for albums with an empty object as criteria:', search( {} ));
// test ok - returns full collection