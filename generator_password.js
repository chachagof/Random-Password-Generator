// define generatePassword function
function sample(collection) {
  let index = Math.floor(Math.random() * collection.length)
  return collection[index]
}


// define generatorPassword function
function generatorPassword(options) {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '12234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'


  // create a  collection to store things user picked up
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
    // collection = collection.concat(...lowerCaseLetters)  is the same way
  }
  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // remove things user don't need

  collection = collection.filter(character => {
    return !options.excludeCharacters.includes(character)
  })
  // return error notice if collection is empty
  if (collection.length === 0){
    return 'there is no valid character in your selection'
  }

  // start generating password
  let password = ''
  for (let i = 1; i <= Number(options.length); i++) {
    password += sample(collection)
  }


  // return the generated password
  return password
}

module.exports = generatorPassword