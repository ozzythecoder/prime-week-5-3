console.log('***** Music Collection *****')

let collection = [];

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
console.log(addtoCollection('For My Mama And Anyone Who Look Like Her', 'McKinley Dixon', 2021))
console.log(addtoCollection('Ten', 'Pearl Jam', 1991))
console.log(addtoCollection('Broken Bells', 'Broken Bells', 2010))

console.log(collection);

function showCollection(array) {
  console.log(array.length);
  for (let item of array) {
    console.log(`${item.title} by ${item.artist}, released ${item.yearPublished}`);
  }
}

showCollection(collection);