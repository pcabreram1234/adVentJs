function listGifts(letter) {
  // ¡Tú puedes!
  /*   let gifts = letter.split(" "); */

  let expReg = new RegExp(/\s/gi);
  let gifts = letter.replace(expReg, " ");
  let giftsObeject = gifts.split(" ")
  let listWithOut_ = []
  let finalList = []
  gifts.split(" ")

  for (let i = 0; i < giftsObeject.length; i++) {
    if (giftsObeject[i].includes("_") === false) {
      listWithOut_.push(giftsObeject[i])
    }
  }

  for (const i of listWithOut_) {
    let count = 0
    let actualItem = i
    for (let e = 0; e < listWithOut_.length; e++) {
      if (listWithOut_[e] === i) {
        count++
        finalList.push(i, count)
      } if (listWithOut_.indexOf(i) === listWithOut_.length - 1) {

      }
    }
  }

  return finalList;
}
const carta = "bici coche balón _playstation bici scoche peluche";

console.log(listGifts(carta));
