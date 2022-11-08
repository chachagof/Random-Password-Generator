function checkRepeatWord(option) {
  // build a variable
  const index = option.excludeCharacters

  // Check for duplicates
  const checkBox = index.split('')
  let checkedBox = []
  checkBox.filter(item => {
    if (!checkedBox.includes(item.toString())) {
      checkedBox.push(item)
      return true
    }
  })

  // change the array to string and delete ',' then return
  return checkedBox.toString().replace(/,/g, '')
}

module.exports = checkRepeatWord