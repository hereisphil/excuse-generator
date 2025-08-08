window.onload = function () {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];

  const whoTag = document.getElementById("who");
  const actionTag = document.getElementById("action");
  const whatTag = document.getElementById("what");
  const whenTag = document.getElementById("when");

  function updateTag(tag, array) {
    let i = Math.floor(Math.random() * array.length);
    tag.innerHTML = array[i];
  }

  updateTag(whoTag, who);
  updateTag(actionTag, action);
  updateTag(whatTag, what);
  updateTag(whenTag, when);

  document.getElementById("generateBtn").addEventListener("click", () => {
    updateTag(whoTag, who);
    updateTag(actionTag, action);
    updateTag(whatTag, what);
    updateTag(whenTag, when);
  });
};
