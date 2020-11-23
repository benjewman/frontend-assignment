const superHeroes = require('./super-heroes.json');

/**
 * Will find all of the marvel characters in the data and return them as an array
 * @returns [
 *  {
 *    ...hero,
 *    publisher: 'Marvel'
 *  }
 * ]
 */
const getDCHeroes = (heroes) => {
  return heroes.filter(hero => hero.publisher === 'DC Comics');
}

/**
 * Converts the character property into an array
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const convertCharactersToArray = (heroes) => {
  const updatedHeroes = heroes.map(hero => {
    const characterArray = hero.characters.split(', ');
    hero.characters = characterArray;
    return hero;
  })
  return updatedHeroes;
}

/**
 * Coverts super hero data so it is grouped the publisher property
 * @returns {
 *   "publisher 1": [
 *     { ...hero }
 *     ...
 *   ],
 *   "publisher 2" :[
 *     {... hero}
 *     ...
 *   ]
 * }
 */
const groupByPublisher = (heroes) => {
  let groupedHeroes = {};
  heroes.forEach(hero => {
    if (typeof groupedHeroes[hero.publisher] === 'undefined') {
      groupedHeroes[hero.publisher] = [hero];
    } else {
      groupedHeroes[hero.publisher].push(hero);
    }
  })
  return groupedHeroes;
}

/**
 * Returns and array of DC Comic heroes that have more than 1 character
 * @returns [
 *  {
 *    ...hero,
 *    character: [
 *      string,
 *      string,
 *      string,
 *    ]
 *  }
 * ]
 */
const getDCHeroesWithMoreThanOneCharacter = (heroes) => {
  const groupedHeroes = groupByPublisher(heroes);
  const dcHeroes = groupedHeroes['DC Comics'];
  const heroResult = dcHeroes.filter(hero => hero.characters.length > 1);
  return heroResult;
}

module.exports = {
  convertCharactersToArray,
  getDCHeroes,
  getDCHeroesWithMoreThanOneCharacter,
  groupByPublisher,
}
