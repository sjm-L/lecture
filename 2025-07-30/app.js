class ColorWord {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
}
console.log("ColorWord 클래스 정의 완료");

class StroopTest {
  constructor() {
    this.colors = [];
    this.currentWord = null;
    this.score = 0;
    this.timeLeft = 30;
    this.isGameRunning = false;
    this.timer = null;
  }
}
console.log("StroopTest 클래스 정의 완료");

const stroopTest = new StroopTest();
console.log("스트룹 테스트 인스턴스 생성 완료");

const colorData = [
  ["빨강", "red"],
  ["파랑", "blue"],
  ["초록", "green"],
  ["노랑", "yellow"],
  ["보라", "purple"],
  ["주황", "orange"],
];
console.log("색깔 데이터 배열 생성 완료:", colorData.length + "개 색깔");

for (let i = 0; i < colorData.length; i++) {
  const currentColorData = colorData[i];
  const newColor = new ColorWord(currentColorData[0], currentColorData[1]);
  stroopTest.colors[i] = newColor;
  console.log("색깔 생성:", newColor.text);
}
console.log("모든 색깔 생성 완료:", stroopTest.colors.length + "개");

const body = document.getElementById("app");
const root = document.getElementById("root");
const h1 = root.children[0];
const controlSection = root.children[1];
const wordDisplay = root.children[2];
const startButton = root.children[3];
const colorButtons = root.children[4];
const instruction = root.children[5];

const themeBtn = controlSection.children[0];
const scoreInfo = controlSection.children[1];
const wordArea = wordDisplay.children[0];
const startBtn = startButton.children[0];

console.log(controlSection);

console.log("DOM 요소 접근 완료");

let isDarkMode = false;
console.log("상태 변수 초기화 완료:", isDarkMode);

function createColorButtons() {
  console.log("색깔 버튼 생성 시작");

  for (let i = colorButtons.children.length - 1; i >= 0; i--) {
    colorButtons.removeChild(colorButtons.children[i]);
  }
  console.log("기존 버튼 제거 완료");

  for (let i = 0; i < stroopTest.colors.length; i++) {
    const color = stroopTest.colors[i];

    const colorBtn = document.createElement("button");
    colorBtn.className =
      "padding-10-20 font-size-base font-weight-bold cursor-pointer button-base background-color-" +
      color.color +
      " text-color-white";
    colorBtn.textContent = color.text;

    colorBtn.addEventListener("click", function () {
      handleColorClick(color.color);
    });

    colorButtons.appendChild(colorBtn);
    console.log("색깔 버튼 생성:", color.text);
  }
  console.log("모든 색깔 버튼 생성 완료");
}

function generateRandomWord() {
  console.log("랜덤 단어 생성 시작");

  const randomTextIndex = Math.floor(Math.random() * stroopTest.colors.length);
  const randomColorIndex = Math.floor(Math.random() * stroopTest.colors.length);

  const wordText = stroopTest.colors[randomTextIndex].text;
  const wordColor = stroopTest.colors[randomColorIndex].color;

  stroopTest.currentWord = new ColorWord(wordText, wordColor);

  wordArea.textContent = wordText;
  wordArea.className =
    "font-size-huge font-weight-bold text-color-" + wordColor;

  console.log("랜덤 단어 생성 완료:", wordText + " (색깔: " + wordColor + ")");
}

function handleColorClick(clickedColor) {
  console.log("색깔 버튼 클릭됨:", clickedColor);

  if (stroopTest.isGameRunning === false) {
    console.log("게임이 실행중이 아님");
    return;
  }

  if (clickedColor === stroopTest.currentWord.color) {
    stroopTest.score = stroopTest.score + 1;
    console.log("정답! 현재 점수:", stroopTest.score);
    updateScore();
    generateRandomWord();
  } else {
    console.log("오답! 정답은:", stroopTest.currentWord.color);
  }
}

function updateScore() {
  const scoreSpan = scoreInfo.children[1];
  scoreSpan.textContent = stroopTest.score;
  console.log("점수 업데이트:", stroopTest.score);
}

function updateTimer() {
  const timeSpan = scoreInfo.children[3];
  timeSpan.textContent = stroopTest.timeLeft;
  console.log("타이머 업데이트:", stroopTest.timeLeft);
}

function startGame() {
  console.log("게임 시작");

  stroopTest.isGameRunning = true;
  stroopTest.score = 0;
  stroopTest.timeLeft = 30;

  startBtn.textContent = "게임 진행중...";
  startBtn.className =
    "display-block margin-0-auto padding-15 font-size-large font-weight-bold background-color-gray-dark text-color-white cursor-pointer button-base";

  updateScore();
  updateTimer();
  generateRandomWord();

  stroopTest.timer = setInterval(function () {
    stroopTest.timeLeft = stroopTest.timeLeft - 1;
    updateTimer();

    if (stroopTest.timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  console.log("게임 타이머 시작");
}

function endGame() {
  console.log("게임 종료");

  stroopTest.isGameRunning = false;
  clearInterval(stroopTest.timer);

  wordArea.textContent = "게임 종료! 최종 점수: " + stroopTest.score + "점";
  wordArea.className = "font-size-large font-weight-bold text-color-black";

  startBtn.textContent = "다시 시작";
  startBtn.className =
    "display-block margin-0-auto padding-15 font-size-large font-weight-bold background-color-gray-light text-color-black cursor-pointer button-base";

  console.log("최종 점수:", stroopTest.score);
}

createColorButtons();
console.log("초기 색깔 버튼 렌더링 완료");

startBtn.addEventListener("click", function () {
  console.log("시작 버튼 클릭됨");

  if (stroopTest.isGameRunning === false) {
    startGame();
  }
});
console.log("시작 버튼 이벤트 리스너 등록 완료");

themeBtn.addEventListener("click", function () {
  console.log("다크모드 토글 버튼 클릭됨");

  if (isDarkMode === false) {
    console.log("라이트모드에서 다크모드로 변경 시작");

    body.className =
      "font-family-malgun-gothic padding-20 transition-all-ease background-color-dark text-color-white";
    themeBtn.className =
      "display-block margin-0-auto margin-bottom-15 padding-10-20 font-size-base background-color-gray-darker text-color-white cursor-pointer button-base";
    themeBtn.textContent = "라이트 모드";

    wordDisplay.className =
      "text-align-center margin-bottom-30 min-height-200 display-flex align-items-center justify-content-center border-2-solid border-color-gray-dark background-color-gray-dark";

    isDarkMode = true;
    console.log("다크모드 전환 완료");
  } else {
    console.log("다크모드에서 라이트모드로 변경 시작");

    body.className =
      "font-family-malgun-gothic padding-20 transition-all-ease background-color-white text-color-black";
    themeBtn.className =
      "display-block margin-0-auto margin-bottom-15 padding-10-20 font-size-base background-color-gray-light text-color-black cursor-pointer button-base";
    themeBtn.textContent = "다크 모드";

    wordDisplay.className =
      "text-align-center margin-bottom-30 min-height-200 display-flex align-items-center justify-content-center border-2-solid border-color-gray background-color-white";

    isDarkMode = false;
    console.log("라이트모드 전환 완료");
  }
});
console.log("다크모드 이벤트 리스너 등록 완료");
console.log("스트룹 테스트 애플리케이션 초기화 완료");
