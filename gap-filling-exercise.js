// ==========================
// Gap-Filling Items (200)
// ==========================
const ITEMS = [
  // --- 100 Phrasal Verb Items ---
  { sentence: "When are you coming ___ to visit us?", answer: "over" },
  { sentence: "She looks ___ her little brother after school.", answer: "after" },
  { sentence: "He gave ___ smoking last year.", answer: "up" },
  { sentence: "Please turn ___ the lights before you leave.", answer: "off" },
  { sentence: "We ran ___ of milk, so I went to the store.", answer: "out" },
  { sentence: "Can you pick ___ the kids from school?", answer: "up" },
  { sentence: "He put ___ his jacket and left.", answer: "on" },
  { sentence: "I need to figure ___ how to solve this problem.", answer: "out" },
  { sentence: "She broke ___ with her boyfriend.", answer: "up" },
  { sentence: "Let’s set ___ a meeting for next week.", answer: "up" },
  { sentence: "He takes ___ his father in many ways.", answer: "after" },
  { sentence: "Don’t give ___! You can do it.", answer: "up" },
  { sentence: "She got ___ the bus at the next stop.", answer: "off" },
  { sentence: "I’ll call you ___ later.", answer: "back" },
  { sentence: "He’s looking ___ to the holidays.", answer: "forward" },
  { sentence: "Please fill ___ this form.", answer: "in" },
  { sentence: "She turned ___ the job offer.", answer: "down" },
  { sentence: "He put ___ the meeting until Friday.", answer: "off" },
  { sentence: "I can’t put ___ with this noise.", answer: "up" },
  { sentence: "She came ___ with a great idea.", answer: "up" },
  { sentence: "He ran ___ his old friend at the mall.", answer: "into" },
  { sentence: "Let’s go ___ the details together.", answer: "over" },
  { sentence: "She’s getting ___ well at her new job.", answer: "on" },
  { sentence: "He brought ___ an interesting point.", answer: "up" },
  { sentence: "I’ll look ___ the information for you.", answer: "up" },
  { sentence: "She’s looking ___ her keys.", answer: "for" },
  { sentence: "He made ___ an excuse for being late.", answer: "up" },
  { sentence: "Let’s find ___ what happened.", answer: "out" },
  { sentence: "She’s taking ___ a new hobby.", answer: "up" },
  { sentence: "He got ___ the car and drove away.", answer: "into" },
  { sentence: "Please hand ___ your homework.", answer: "in" },
  { sentence: "She’s trying to cut ___ on sugar.", answer: "down" },
  { sentence: "He checked ___ of the hotel early.", answer: "out" },
  { sentence: "Let’s carry ___ with the lesson.", answer: "on" },
  { sentence: "She’s looking ___ to her birthday.", answer: "forward" },
  { sentence: "He’s coming ___ for dinner tonight.", answer: "over" },
  { sentence: "She’s getting ___ the flu.", answer: "over" },
  { sentence: "He’s standing ___ for his friend.", answer: "up" },
  { sentence: "She’s going ___ a difficult time.", answer: "through" },
  { sentence: "He’s picking ___ Spanish quickly.", answer: "up" },
  { sentence: "She’s putting ___ a lot of effort.", answer: "in" },
  { sentence: "He’s setting ___ a new business.", answer: "up" },
  { sentence: "She’s showing ___ late again.", answer: "up" },
  { sentence: "He’s speaking ___ against injustice.", answer: "out" },
  { sentence: "She’s taking ___ her mother.", answer: "after" },
  { sentence: "He’s thinking ___ moving abroad.", answer: "of" },
  { sentence: "She’s turning ___ the volume.", answer: "up" },
  { sentence: "He’s working ___ a new project.", answer: "on" },
  { sentence: "She’s writing ___ her experiences.", answer: "about" },
  { sentence: "He’s breaking ___ a bad habit.", answer: "off" },
  { sentence: "She’s calling ___ her friend.", answer: "up" },
  { sentence: "He’s checking ___ the details.", answer: "out" },
  { sentence: "She’s cleaning ___ her room.", answer: "up" },
  { sentence: "He’s coming ___ with a solution.", answer: "up" },
  { sentence: "She’s dealing ___ a lot right now.", answer: "with" },
  { sentence: "He’s filling ___ for his colleague.", answer: "in" },
  { sentence: "She’s finding ___ about the event.", answer: "out" },
  { sentence: "He’s getting ___ the shock.", answer: "over" },
  { sentence: "She’s giving ___ her old clothes.", answer: "away" },
  { sentence: "He’s going ___ the report.", answer: "over" },
  { sentence: "She’s growing ___ fast.", answer: "up" },
  { sentence: "He’s holding ___ the line.", answer: "on" },
  { sentence: "She’s keeping ___ with her studies.", answer: "up" },
  { sentence: "He’s letting ___ a big secret.", answer: "out" },
  { sentence: "She’s looking ___ the children.", answer: "after" },
  { sentence: "He’s making ___ a story.", answer: "up" },
  { sentence: "She’s moving ___ to a new city.", answer: "on" },
  { sentence: "He’s passing ___ the message.", answer: "on" },
  { sentence: "She’s picking ___ her friend.", answer: "up" },
  { sentence: "He’s putting ___ his shoes.", answer: "on" },
  { sentence: "She’s running ___ of time.", answer: "out" },
  { sentence: "He’s sending ___ invitations.", answer: "out" },
  { sentence: "She’s setting ___ the table.", answer: "up" },
  { sentence: "He’s showing ___ his skills.", answer: "off" },
  { sentence: "She’s speaking ___ in class.", answer: "up" },
  { sentence: "He’s standing ___ for himself.", answer: "up" },
  { sentence: "She’s taking ___ a new job.", answer: "on" },
  { sentence: "He’s thinking ___ the problem.", answer: "about" },
  { sentence: "She’s turning ___ the offer.", answer: "down" },
  { sentence: "He’s working ___ his homework.", answer: "on" },
  { sentence: "She’s writing ___ her plans.", answer: "down" },
  { sentence: "He’s breaking ___ with tradition.", answer: "with" },
  { sentence: "She’s calling ___ for help.", answer: "out" },
  { sentence: "He’s checking ___ the answer.", answer: "over" },
  { sentence: "She’s cleaning ___ after dinner.", answer: "up" },
  { sentence: "He’s coming ___ to the party.", answer: "over" },
  { sentence: "She’s dealing ___ customers.", answer: "with" },
  { sentence: "He’s filling ___ the form.", answer: "in" },
  { sentence: "She’s finding ___ the truth.", answer: "out" },
  { sentence: "He’s getting ___ his cold.", answer: "over" },
  { sentence: "She’s giving ___ her time.", answer: "up" },
  { sentence: "He’s going ___ the list.", answer: "through" },
  { sentence: "She’s growing ___ in London.", answer: "up" },
  { sentence: "He’s holding ___ to hope.", answer: "on" },
  { sentence: "She’s keeping ___ the good work.", answer: "up" },
  { sentence: "He’s letting ___ his feelings.", answer: "out" },
  { sentence: "She’s looking ___ her notes.", answer: "through" },
  { sentence: "He’s making ___ for lost time.", answer: "up" },
  { sentence: "She’s moving ___ with her life.", answer: "on" },
  { sentence: "He’s passing ___ the salt.", answer: "on" },
  { sentence: "She’s picking ___ a new skill.", answer: "up" },
  { sentence: "He’s putting ___ a brave face.", answer: "on" },
  // --- 100 Prepositional Expression Items ---
  { sentence: "We're optimistic ___ the future of our business.", answer: "about" },
  { sentence: "You can rely ___ me to help you with your homework.", answer: "on" },
  { sentence: "Don't worry ___ the test; you've studied hard.", answer: "about" },
  { sentence: "He apologized ___ being late.", answer: "for" },
  { sentence: "She’s interested ___ learning French.", answer: "in" },
  { sentence: "They’re afraid ___ spiders.", answer: "of" },
  { sentence: "I’m proud ___ my achievements.", answer: "of" },
  { sentence: "He’s responsible ___ the project.", answer: "for" },
  { sentence: "She’s famous ___ her paintings.", answer: "for" },
  { sentence: "We’re tired ___ waiting.", answer: "of" },
  { sentence: "He’s married ___ a doctor.", answer: "to" },
  { sentence: "She’s good ___ playing chess.", answer: "at" },
  { sentence: "He’s bad ___ remembering names.", answer: "at" },
  { sentence: "I’m used ___ getting up early.", answer: "to" },
  { sentence: "She’s keen ___ sports.", answer: "on" },
  { sentence: "He’s similar ___ his brother.", answer: "to" },
  { sentence: "They’re different ___ us.", answer: "from" },
  { sentence: "She’s famous ___ her singing.", answer: "for" },
  { sentence: "He’s worried ___ his exams.", answer: "about" },
  { sentence: "I’m interested ___ art.", answer: "in" },
  { sentence: "She’s afraid ___ heights.", answer: "of" },
  { sentence: "He’s proud ___ his son.", answer: "of" },
  { sentence: "We’re responsible ___ the guests.", answer: "for" },
  { sentence: "She’s tired ___ working late.", answer: "of" },
  { sentence: "He’s married ___ Anna.", answer: "to" },
  { sentence: "She’s good ___ languages.", answer: "at" },
  { sentence: "He’s bad ___ sports.", answer: "at" },
  { sentence: "I’m used ___ the cold.", answer: "to" },
  { sentence: "She’s keen ___ music.", answer: "on" },
  { sentence: "He’s similar ___ his cousin.", answer: "to" },
  { sentence: "They’re different ___ their parents.", answer: "from" },
  { sentence: "She’s famous ___ her books.", answer: "for" },
  { sentence: "He’s worried ___ his health.", answer: "about" },
  { sentence: "I’m interested ___ science.", answer: "in" },
  { sentence: "She’s afraid ___ dogs.", answer: "of" },
  { sentence: "He’s proud ___ his work.", answer: "of" },
  { sentence: "We’re responsible ___ the children.", answer: "for" },
  { sentence: "She’s tired ___ studying.", answer: "of" },
  { sentence: "He’s married ___ Lisa.", answer: "to" },
  { sentence: "She’s good ___ math.", answer: "at" },
  { sentence: "He’s bad ___ cooking.", answer: "at" },
  { sentence: "I’m used ___ noise.", answer: "to" },
  { sentence: "She’s keen ___ reading.", answer: "on" },
  { sentence: "He’s similar ___ his uncle.", answer: "to" },
  { sentence: "They’re different ___ their friends.", answer: "from" },
  { sentence: "She’s famous ___ her acting.", answer: "for" },
  { sentence: "He’s worried ___ his job.", answer: "about" },
  { sentence: "I’m interested ___ history.", answer: "in" },
  { sentence: "She’s afraid ___ snakes.", answer: "of" },
  { sentence: "He’s proud ___ his achievements.", answer: "of" },
  { sentence: "We’re responsible ___ the event.", answer: "for" },
  { sentence: "She’s tired ___ running.", answer: "of" },
  { sentence: "He’s married ___ Julia.", answer: "to" },
  { sentence: "She’s good ___ drawing.", answer: "at" },
  { sentence: "He’s bad ___ dancing.", answer: "at" },
  { sentence: "I’m used ___ spicy food.", answer: "to" },
  { sentence: "She’s keen ___ traveling.", answer: "on" },
  { sentence: "He’s similar ___ his aunt.", answer: "to" },
  { sentence: "They’re different ___ their classmates.", answer: "from" },
  { sentence: "She’s famous ___ her cooking.", answer: "for" },
  { sentence: "He’s worried ___ his family.", answer: "about" },
  { sentence: "I’m interested ___ geography.", answer: "in" },
  { sentence: "She’s afraid ___ the dark.", answer: "of" },
  { sentence: "He’s proud ___ his team.", answer: "of" },
  { sentence: "We’re responsible ___ the schedule.", answer: "for" },
  { sentence: "She’s tired ___ cleaning.", answer: "of" },
  { sentence: "He’s married ___ Emma.", answer: "to" },
  { sentence: "She’s good ___ swimming.", answer: "at" },
  { sentence: "He’s bad ___ drawing.", answer: "at" },
  { sentence: "I’m used ___ the heat.", answer: "to" },
  { sentence: "She’s keen ___ gardening.", answer: "on" },
  { sentence: "He’s similar ___ his sister.", answer: "to" },
  { sentence: "They’re different ___ their neighbors.", answer: "from" },
  { sentence: "She’s famous ___ her designs.", answer: "for" },
  { sentence: "He’s worried ___ his grades.", answer: "about" },
  { sentence: "I’m interested ___ literature.", answer: "in" },
  { sentence: "She’s afraid ___ cats.", answer: "of" },
  { sentence: "He’s proud ___ his results.", answer: "of" },
  { sentence: "We’re responsible ___ the plan.", answer: "for" },
  { sentence: "She’s tired ___ shopping.", answer: "of" },
  { sentence: "He’s married ___ Olivia.", answer: "to" },
  { sentence: "She’s good ___ singing.", answer: "at" },
  { sentence: "He’s bad ___ writing.", answer: "at" },
  { sentence: "I’m used ___ the rain.", answer: "to" },
  { sentence: "She’s keen ___ painting.", answer: "on" },
  { sentence: "He’s similar ___ his grandfather.", answer: "to" },
  { sentence: "They’re different ___ their cousins.", answer: "from" },
  { sentence: "She’s famous ___ her dancing.", answer: "for" },
  { sentence: "He’s worried ___ his future.", answer: "about" },
  { sentence: "I’m interested ___ philosophy.", answer: "in" },
  { sentence: "She’s afraid ___ bees.", answer: "of" },
  { sentence: "He’s proud ___ his progress.", answer: "of" },
  { sentence: "We’re responsible ___ the project.", answer: "for" },
  { sentence: "She’s tired ___ waiting.", answer: "of" },
  { sentence: "He’s married ___ Mia.", answer: "to" },
  { sentence: "She’s good ___ running.", answer: "at" },
  { sentence: "He’s bad ___ singing.", answer: "at" },
  { sentence: "I’m used ___ the traffic.", answer: "to" },
  { sentence: "She’s keen ___ photography.", answer: "on" },
  { sentence: "He’s similar ___ his father.", answer: "to" },
  { sentence: "They’re different ___ their teachers.", answer: "from" }
];

// ========== Utility Functions ==========
function shuffle(array) {
  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// ========== State ==========
let currentItems = [];
let checked = false;
let correctCount = 0;

// ========== DOM Elements ==========
const exerciseList = document.getElementById('exercise-list');
const checkBtn = document.getElementById('check-btn');
const newBtn = document.getElementById('new-btn');
const scoreSpan = document.getElementById('score');
const progressSpan = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const form = document.getElementById('exercise-form');

// ========== Main Functions ==========
function generateExercise() {
  checked = false;
  correctCount = 0;
  // Pick 15 random items
  currentItems = shuffle([...ITEMS]).slice(0, 15);
  // Render
  renderExercise();
  updateScore();
  updateProgress();
}

function renderExercise() {
  exerciseList.innerHTML = '';
  currentItems.forEach((item, idx) => {
    const div = document.createElement('div');
    div.className = 'exercise-item';
    // Replace ___ with input
    const parts = item.sentence.split('___');
    div.innerHTML =
      `<span>${idx + 1}. ${parts[0]}</span>` +
      `<input type="text" maxlength="20" data-idx="${idx}" autocomplete="off" />` +
      `<span>${parts[1] || ''}</span>` +
      `<span class="correct-answer">(${item.answer})</span>`;
    exerciseList.appendChild(div);
  });
}

function checkAnswers() {
  if (checked) return;
  checked = true;
  correctCount = 0;
  const inputs = exerciseList.querySelectorAll('input[type="text"]');
  inputs.forEach((input, idx) => {
    const userAns = input.value.trim().toLowerCase();
    const correctAns = currentItems[idx].answer.toLowerCase();
    const itemDiv = input.parentElement;
    itemDiv.classList.remove('correct', 'incorrect');
    if (userAns === correctAns) {
      itemDiv.classList.add('correct');
      correctCount++;
    } else {
      itemDiv.classList.add('incorrect');
    }
    input.disabled = true;
  });
  updateScore();
  updateProgress();
}

function updateScore() {
  scoreSpan.textContent = `Score: ${correctCount}/15`;
}

function updateProgress() {
  const percent = Math.round((correctCount / 15) * 100);
  progressSpan.textContent = `Progress: ${percent}%`;
  progressBar.style.width = percent + '%';
}

function resetInputs() {
  const inputs = exerciseList.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    input.value = '';
    input.disabled = false;
    input.parentElement.classList.remove('correct', 'incorrect');
  });
  // Hide all correct answers
  const answers = exerciseList.querySelectorAll('.correct-answer');
  answers.forEach(ans => ans.style.display = 'none');
}

// ========== Event Listeners ==========
checkBtn.addEventListener('click', () => {
  checkAnswers();
  // Show correct answers for incorrect items
  const incorrects = exerciseList.querySelectorAll('.exercise-item.incorrect .correct-answer');
  incorrects.forEach(ans => ans.style.display = 'inline');
});

newBtn.addEventListener('click', () => {
  generateExercise();
  resetInputs();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  checkAnswers();
});

// Allow pressing Enter to move to next input
exerciseList.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    const inputs = Array.from(exerciseList.querySelectorAll('input[type="text"]'));
    const idx = inputs.indexOf(document.activeElement);
    if (idx >= 0 && idx < inputs.length - 1) {
      inputs[idx + 1].focus();
    } else if (idx === inputs.length - 1) {
      checkBtn.focus();
    }
  }
});

// ========== Initialize ==========
generateExercise();
