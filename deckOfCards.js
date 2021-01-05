"use strict";

const NEW_DECK_BASE_URL = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let NEW_CARD_BASE_URL;
let DECK_ID;

async function getDeckInfo() {
  let resp = await axios.get(NEW_DECK_BASE_URL);

  if (resp.data.success) {
    DECK_ID = resp.data.deck_id;
    NEW_CARD_BASE_URL = `https://deckofcardsapi.com/api/deck/${DECK_ID}/draw/?count=1`
  }
}

async function getOneCard() {
  let resp = await axios.get(NEW_CARD_BASE_URL);

  if (resp.data.success) {
    let cardInfo = resp.data.cards[0];
    let card = `${cardInfo.value} of ${cardInfo.suit}`
    console.log(card);
    $("#cards").append($("<li>").text(card));
  } else {
    $("#newCardBtn").off("click", getOneCard);
    $("#newCardBtn").remove();
  }
}

$(async function() {
  await getDeckInfo();
  await getOneCard();
  await getOneCard();
  $("#newCardBtn").on("click", getOneCard);
});




