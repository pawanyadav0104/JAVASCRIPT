const marvel_hero=["thor","ironman","spiderman"];
const dc_hero=["superman","flash","batman"];


marvel_hero.push(dc_hero)// arrays ke andar aaray me push kar deta h 
console.log(marvel_hero);// here it take as single element
console.log(marvel_hero[3][1]);// flash

// to merge two aarays we can use concat
// concat return a new aaray
 const allHeros=marvel_hero.concat(dc_hero);
 console.log(allHeros);


 // we can use spread in place of concat
 const allnewheros=[...marvel_hero,...dc_hero];
 console.log(allnewheros);


 // we can use flat for combining the subaarys into single aaray
 const another=[1,2,3,[4,5],[6,[7,8,[9]]]];
 console.log(another.flat(Infinity));


 console.log(Array.isArray("pawan"));// tells it is array or not 
 console.log(Array.from("pawan"));// convert to array

 