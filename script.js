const inputField = document.getElementById('behaviorInput');
const result = document.getElementById('result');
const yesSound = document.getElementById('yesSound');
const noSound = document.getElementById('noSound');

// 自定義行為回覆池（行為名稱須為全形或統一格式）
const behaviorResponses = {
  "鞠躬": [
    "YES - YOU HAVE BEEN RECOGNIZED AS VALID",
    "YES - THE FRAME ALIGNS WITH YOUR GESTURE"
  ],
  "拜拜": [
    "NO - THIS MOVEMENT BREACHES THE DESIGNATED LIMITS",
    "NO - THIS ACTION VIOLATES UNSEEN RULES"
  ]
};

// 通用 YES 回覆池
const yesResponses = [
  "YES - THIS BEHAVIOR IS ACCEPTED BY THE SYSTEM",
  "YES - YOU HAVE BEEN RECOGNIZED AS VALID",
  "YES - THE FRAME ALIGNS WITH YOUR GESTURE",
  "YES - YOUR ACTION FITS WITHIN THE PARAMETERS",
  "YES - PERMISSION GRANTED FOR THIS OCCUPATION",
  "YES - THIS MOVEMENT IS ALLOWED HERE",
  "YES - THE SYSTEM RESPONDS POSITIVELY",
  "YES - YOUR PRESENCE IS WELCOME IN THIS SPACE",
  "YES - THE SQUARE ACKNOWLEDGES YOUR ENTRY",
  "YES - THIS CHOICE MATCHES THE CODE",
  "YES - YOU ARE WITHIN TOLERABLE BOUNDARIES",
  "YES - ACCESS GRANTED TO THIS AREA",
  "YES - THE GRID ACCEPTS YOUR CONTRIBUTION",
  "YES - YOUR INTENTION IS IN ALIGNMENT",
  "YES - YOU ARE ACTING WITHIN PERMISSION",
  "YES - THIS GESTURE IS REGISTERED AS VALID",
  "YES - THE STRUCTURE ALLOWS THIS ENTRY",
  "YES - YOUR PRESENCE FITS THE SET ORDER",
  "YES - SYSTEM FLAGS THIS BEHAVIOR AS APPROVED",
  "YES - YOU MAY CONTINUE IN THIS FORMAT",
  "YES - THE SYSTEM CONFIRMS YOUR POSITION",
  "YES - YOU HAVE PASSED THROUGH THE CHECKPOINT",
  "YES - THE ZONE RESPONDS IN YOUR FAVOR",
  "YES - THIS IS AN AUTHORIZED USE OF SPACE",
  "YES - THE GRID ADJUSTS TO YOUR MOVEMENT"
];

// 通用 NO 回覆池
const noResponses = [
  "NO - THIS BEHAVIOR IS OUTSIDE PERMITTED PARAMETERS",
  "NO - YOUR PRESENCE IS NOT RECOGNIZED HERE",
  "NO - THE SYSTEM CANNOT APPROVE THIS ACTION",
  "NO - THIS MOVEMENT BREACHES THE DESIGNATED LIMITS",
  "NO - YOU ARE OCCUPYING A RESTRICTED SPACE",
  "NO - SUCH ACTION IS NOT AUTHORIZED",
  "NO - THE FRAME REJECTS THIS GESTURE",
  "NO - YOU ARE BEYOND THE LINE OF ACCEPTABILITY",
  "NO - THIS CHOICE FALLS OUTSIDE THE SYSTEM'S TOLERANCE",
  "NO - THE GRID CANNOT ACCOMMODATE YOU HERE",
  "NO - THIS CONDUCT IS FLAGGED AS IMPROPER",
  "NO - ACCESS TO THIS ZONE IS DENIED",
  "NO - YOUR INTENTION DISRUPTS THE SET ORDER",
  "NO - THIS ACTION VIOLATES UNSEEN RULES",
  "NO - YOU ARE NOT WELCOME IN THIS FORM",
  "NO - THE SQUARE HOLDS NO SPACE FOR YOU",
  "NO - THIS BEHAVIOR FALLS OUTSIDE OUR CODE",
  "NO - THE SYSTEM REMAINS SILENT TO YOUR REQUEST",
  "NO - THIS MOVEMENT IS NOT RECOGNIZED AS VALID",
  "NO - RESTRICTIONS OVERRIDE YOUR INTENT",
  "NO - THIS INTERACTION IS BLOCKED BY DEFAULT",
  "NO - THE MARGIN HAS BEEN BREACHED",
  "NO - YOU ARE ACTING WITHOUT PERMISSION",
  "NO - THIS GESTURE IS OUT OF ALIGNMENT",
  "NO - THE STRUCTURE DISALLOWS THIS ENTRY"
];

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

inputField.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const inputRaw = inputField.value.trim();
    if (!inputRaw) return;

    inputField.classList.remove('green', 'red');
    const key = inputRaw; // 保持原始輸入格式與自定義對應

    let message = "";
    let isYes = null;

    if (behaviorResponses[key]) {
      message = randomFromArray(behaviorResponses[key]);
      isYes = message.startsWith("YES");
    } else {
      isYes = Math.random() > 0.5;
      message = isYes
        ? randomFromArray(yesResponses)
        : randomFromArray(noResponses);
    }

    // 顏色與聲音效果
    inputField.classList.add(isYes ? 'green' : 'red');
    (isYes ? yesSound : noSound).play();

    result.innerText = message;
  }
});

