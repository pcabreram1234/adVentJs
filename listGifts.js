function listGifts(letter) {
  // ¡Tú puedes!
  let gifts = letter.split(" ");
  let list = [];
  let finalList = [];
  gifts.filter((gift) => {
    if (gift.indexOf("_") !== 0) {
      finalList.push(gift);
    }
  });

  finalList.sort();

  for (let i = 0; i < finalList.length; i++) {
    if (finalList[i] === finalList[i++]) {
      list.push(finalList[i]);
    } else {
      list.push(finalList[i]);
    }
  }

  return list;
}
const carta = "bici coche balón _playstation bici coche peluche";

console.log(listGifts(carta));
