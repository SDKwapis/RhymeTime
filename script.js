let rhyme1 = "Armed and dangerous";
let rhyme2 = "Ain't too many can bang with us";
let vowels = ["a", "e", "i", "o", "u"];

function rhymeTime() {
  const rhymeSplit1 = rhyme1.split(" ");
  console.log(rhymeSplit1);
  const rhymeSplit2 = rhyme2.split(" ");
  console.log(rhymeSplit2);
  const word1 = rhymeSplit1[rhymeSplit1.length - 1];
  console.log(word1);
  const word2 = rhymeSplit2[rhymeSplit2.length - 1];
  console.log(word2);
  for (i = 0; i < vowels.length; i++) {
    let v1 = [];
    if (word1.includes(vowels[i])) {
      v1.push(vowels[i]);
      console.log(v1);
    } else {
      console.log("no matching vowels");
    }
    for (i = 0; i < vowels.length; i++) {
      let v2 = [];
      if (word2.includes(vowels[i])) {
        v2.push(vowels[i]);
        console.log(v2);
        if (JSON.stringify(v1) == JSON.stringify(v2)) {
          console.log("They Rhyme!");
        }
      }
    }
  }
}

rhymeTime();
