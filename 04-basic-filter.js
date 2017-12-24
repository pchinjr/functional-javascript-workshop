function getShortMessages(messages) {
  return messages.filter((el, i, arr) => {
    return arr[i].message.length < 50;
  })
  .map(function(shortMessagesArray) {
    return shortMessagesArray.message
  });
}

module.exports = getShortMessages