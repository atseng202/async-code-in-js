"use strict"

const NUM_BASE_URL = "http://numbersapi.com"
const MULTIPLE_FACTS_FOR_FAV_NUM_URL = "http://numbersapi.com/1,4,17,23,24,32?json";
const FAVORITE_NUM_URL = "http://numbersapi.com/42?json"

async function getFavoriteNumFact() {
  let resp = await axios.get(FAVORITE_NUM_URL);
  let randomNumFact = resp.data.text;

  $(".facts").append($(`<li>${randomNumFact}</li>`))
  $(".facts").append($(`<li>----------------------------</li>`));

}
getFavoriteNumFact();

// 2. Get many facts for single request
async function getManyFacts() {
  let resp = await axios.get(MULTIPLE_FACTS_FOR_FAV_NUM_URL);
  for (let key in resp.data) {
    $(".facts").append($(`<li>${resp.data[key]}</li>`));    
  }

  $(".facts").append($(`<li>----------------------------</li>`));
}

getManyFacts();

// 3. Get 4 facts on our favorite num
async function getRandomNumFacts() {

  // Get 3 random rand nums
  // Ask question if await below will pause execution before each next ele is added
  // let randNum1 = Math.round(Math.random() * 100);
  // let randNum2 = Math.round(Math.random() * 100);
  // let randNum3 = Math.round(Math.random() * 100);
  // let randNum4 = Math.round(Math.random() * 100);

  let p1 = axios.get(FAVORITE_NUM_URL);
  let p2 = axios.get(FAVORITE_NUM_URL);
  let p3 = axios.get(FAVORITE_NUM_URL);
  let p4 = axios.get(FAVORITE_NUM_URL);

  let results = [await p1, await p2, await p3, await p4];

  for (let p of results) {
    $(".facts").append($(`<li>${p.data.text}</li>`));
  }
  $(".facts").append($(`<li>----------------------------</li>`));

}

getRandomNumFacts();