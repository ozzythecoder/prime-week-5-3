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