let questions = [
    {
        number: 0,
        head: "בחרו את סוג הטיפול בהתאם לראשי תיבות ״חסן דפק ברז״:",
        type: "american",
        option: ["טיפול לפני תנועה", "טיפול אחרי תנועה", "טיפול יזום"],
        answer: "טיפול לפני תנועה"
    },
    {
        number: 1,
        part: "a",
        head: "מה מסמלת האות ח בחסן דפק ברז?",
        type: "open",
        option: [],
        answer: "חיזוקים"
    },
    {
        number: 1,
        part: "b",
        head: "מה נחזק בטלת?",
        type: "american",
        option: ["צלבי c6 וc7, גלגלים מניע ומתח את כל הברגים,בגלגלי מרכוב 3 ברגים בצורת משולש", "צלבי c6 וc7, גלגלים מניע מרכוב ומתח את כל הברגים", "צלבי c6 וc7, רק את הגלגלי מרכוב 3 ברגים בצורת משלוש", "אף תשובה"],
        answer: "צלבי c6 וc7, גלגלים מניע ומתח את כל הברגים,בגלגלי מרכוב 3 ברגים בצורת משולש"
    },
    {
        number: 2,
        head: `מתחו קו בין הצמד הנכון:<br>(לחצו על מנת לחבר)`,
        type: "connect",
        pairs: [
            {
                left: "צלב c6",
                right: "מפתח 9/16"
            },
            {
                left: "צלב c7",
                right: "מפתח 3/4"
            },
            {
                left: "גלגלים",
                right: "בוקסה 15/16"
            }
        ]
    },
    {
        number: 3,
        part: "a",
        head: "מה מסמלת האות נ בחסן דפק ברז?",
        type: "open",
        option: [],
        answer: "נוזלים"
    },
    {
        number: 3,
        part: "b",
        head: "מהם סוגי הנוזלים שיש לנו בנגמ״ש?",
        type: "open",
        option: [],
        answer: "שמן, סולר ,ומים"
    },
    {
        number: 4,
        head: "מה נוודא בדלת חיר בטלת?",
        type: "american",
        option: ["שאינה נצורה", "שהיא נצורה", "שהיא פתוחה"],
        answer: "שאינה נצורה"
    },
    {
        number: 5,
        head: "בטלת אנו נוודא שכל הפיני ביטחון תקינים,ובמידה ומדף פתוח אנו נאבטח אותו בעזרת הפין ביטחון.",
        type: "truth",
        option: ["נכון", "לא נכון"],
        answer: "נכון"
    },
    {
        number: 6,
        head: "בטיפול אחרי תנועה אנו נשתמש בראשי תיבות חנך תמר",
        type: "truth",
        option: ["נכון", "לא נכון"],
        answer: "נכון"
    },
    {
        number: 7,
        head: "מה נבדוק באות כ בראשי התיבות חנך תמר?",
        type: "open",
        option: [],
        answer: "שהכבש עולה ויורד"
    },
    {
        number: 8,
        head: "סמנו נכון/לא נכון במידה וסימנתם לא נכון רשמו את התשובה הנכונה.<br>האות מ' בטאת מסמלת מים,נבדוק שיש מספיק מים.",
        type: "truth-open",
        option: ["נכון", "לא נכון"],
        answer: {
            truth: "לא נכון",        //**** TODO: ****// 
            text: "האות מ מסמלת מזקו״ם,נבצע בדיקה ויזואלית לראות שהמזקו״ם תקין."
        }
    },
    {
        number: 9,
        head: "מתי נבצע טפ״ש?",
        type: "open",
        option: [],
        answer: "טפ״ש זה טיפול שבועי,נבצע אחרי שנסענו עם הנגמ״ש במהלך השבוע."
    },
    {
        number: 10,
        head: "על פי ראשי התיבות פג שכח מצברים - <br>מה מסמלת האות פ ומה נעשה?",
        type: "open",
        option: [],
        answer: "פילטר אוויר,ננקה עם לחץ אוויר."
    },
    {
        number: 11,
        head: "רשמו 2 דוגמאות למקומות בהם נשמן עם ספרי שמן בטפ״ש.",
        type: "open",
        option: [],
        answer: "פרפרית נהג ,ווי גרירה, בורג ביצים,פרפרית מפקד."
    },
    {
        number: 12,
        head: "מה שונה בין חיזוק הגלגלים בטל״ת לחיזוק גלגלים בטפ״ש?",
        type: "open",
        option: [],
        answer: "בטפ״ש נחזק את כל הברגים וגלגלים,בטל״ת בגלגלי מרכוב נחזק 3 ברגים."
    },
    {
        number: 13,
        head: "כיצד מתבצע ניקוי המצברים?<br>(בחר 2 תשובות נכונות)",
        type: "multiple-choice",
        option: ["נפתח את החורים שבפקקים", "נשטוף עם מים את המצברים", "לא מנקים את המצברים", "ננקה את המצברים בעזרת מטלית יבשה"],
        answer: ["נפתח את החורים שבפקקים", "ננקה את המצברים בעזרת מטלית יבשה"]
    }
];

let startBtn, restartBtn, formBtn, quizData, countQuest, userAnswer, timer, message;
quizData = {
    currentQuestion: 0,
    answers: []
};
let isAnswered, isChecked, formState = false;
let questionScore, correctCount = 0;
let timeLeft = 45;
let selectedButton = null;
let userConnections = [];

window.addEventListener("load", () => {
    // INDEX
    if (document.getElementById("open-title")) {
        startBtn = document.getElementById("start-practice");
        startBtn.addEventListener("click", () => { window.location.href = "instructions.html" });

    }
    // INSTRUCTIONS
    else if (document.getElementById("close-instructions")) {
        closeBtn = document.getElementById("close-instructions");
        closeBtn.addEventListener("click", () => { window.location.href = "practice.html" });
    }
    // PRACTICE
    else if (document.getElementById("question")) {
        countQuest = 0;
        showQuestion(countQuest);
        startTimer();
        handleForm(countQuest);
    }
    // FINISH
    else if (document.getElementById("prince-close")) {
        restartBtn = document.getElementById("restart-practice");
        restartBtn.addEventListener("click", () => { window.location.href = "index.html" });
    }
});
function showQuestion(q) {
    document.getElementById("times-out")?.remove();
    isAnswered = false;
    document.getElementById("form-btn").src = "assets/unAnsweredBtn.svg";

    // PROGRESS
    document.getElementById("progress-bar").src = `assets/progress=${questions[q].number}.svg`;

    // HEADER
    document.getElementById("header").innerHTML = questions[q].head

    // INPUT
    const type = questions[q].type;
    const inputDiv = document.getElementById("input-div");
    inputDiv.className = "";
    inputDiv.classList.add(type);

    switch (type) {
        case "open":
            showOpenInput(q);
            break;
        case "multiple-choice":
            showMultipleChoiceInput(q);
            break;
        case "american":
            showAmericanInput(q);
            break;
        case "truth":
            showTruthInput(q);
            break;
        case "truth-open":
            showTruthOpenInput(q);
            break;
        case "connect":
            showConnectInput(q);
            break;
        default:
            alert("404");
    }

    // BUTTON
    formBtn = document.getElementById("form-btn")
    formBtn.alt = "check"
    formBtn.name = "check"
    formBtn.src = "assets/unAnsweredBtn.svg"
};

// QUESTION TYPES
function showOpenInput(q) {
    const inputDiv = document.getElementById('input-div');
    inputDiv.innerHTML = "";

    const textInput = document.createElement('input');
    textInput.type = "text";
    textInput.placeholder = "הקלד פה";
    textInput.id = "answer-input";

    const answerBox = document.createElement("div");
    answerBox.id = "correct-answer";
    answerBox.style.display = "none";

    inputDiv.appendChild(textInput);
    inputDiv.appendChild(answerBox);

    textInput.addEventListener("input", () => {
        // isAnswered = textInput.value.trim() !== "";
        setAnswered(textInput.value.trim() !== "");
    });
};
function showMultipleChoiceInput(q) {
    const inputDiv = document.getElementById('input-div');
    inputDiv.innerHTML = "";
    questions[q].option.forEach((option, index) => {
        const wrapper = document.createElement("label");
        wrapper.className = "option-wrapper";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `option-${index}`;
        checkbox.value = option;

        const text = document.createElement("span");
        text.textContent = option;

        wrapper.appendChild(checkbox);
        wrapper.appendChild(text);
        inputDiv.appendChild(wrapper);


        checkbox.addEventListener("change", () => {
            wrapper.classList.toggle("selected", checkbox.checked);

            const checked = document.querySelectorAll('input[type="checkbox"]:checked').length;
            // isAnswered = checked > 0;
            setAnswered(checked > 0)
        });
    })
};
function showAmericanInput(q) {
    const inputDiv = document.getElementById('input-div');
    inputDiv.innerHTML = "";

    questions[q].option.forEach((option) => {
        const americanBtn = document.createElement("button");
        americanBtn.type = "button";
        americanBtn.className = "american-option";
        americanBtn.textContent = option;
        americanBtn.value = option;

        americanBtn.addEventListener("click", () => {
            document
                .querySelectorAll(".american-option")
                .forEach(btn => {
                    btn.classList.remove("selected");
                });
            americanBtn.classList.add("selected");

            // isAnswered = true;
            setAnswered(true)

        });
        inputDiv.appendChild(americanBtn);
    });
};
function showTruthInput(q) {
    const inputDiv = document.getElementById('input-div');
    inputDiv.innerHTML = "";

    questions[q].option.forEach((option) => {
        const truthBtn = document.createElement("button");
        truthBtn.type = "button";
        truthBtn.className = "truth-option";
        truthBtn.textContent = option;
        truthBtn.value = option;

        truthBtn.addEventListener("click", () => {
            document
                .querySelectorAll(".truth-option")
                .forEach(btn => {
                    btn.classList.remove("selected");
                });
            truthBtn.classList.add("selected");

            // isAnswered = true;
            setAnswered(true)

        });
        inputDiv.appendChild(truthBtn);
    });
};
function showTruthOpenInput(q) {
    const inputDiv = document.getElementById("input-div");
    inputDiv.innerHTML = "";

    questions[q].option.forEach(option => {
        const truthBtn = document.createElement("button");
        truthBtn.type = "button";
        truthBtn.className = "truth-option";
        truthBtn.textContent = option;
        truthBtn.value = option;

        truthBtn.addEventListener("click", () => {

            document.querySelectorAll(".truth-option").forEach(btn =>
                btn.classList.remove("selectedTO")
                //btn.classList.remove("selected");
            );

            //truthBtn.classList.add("selected");
            truthBtn.classList.add("selectedTO");

            let input = document.getElementById("truth-open-input");

            if (truthBtn.value === "לא נכון") {

                if (!input) {
                    input = document.createElement("input");
                    input.id = "truth-open-input";
                    input.type = "text";
                    input.placeholder = "כתבו את התשובה הנכונה";

                    input.addEventListener("input", () => {
                        setAnswered(input.value.trim() !== "");
                    });

                    inputDiv.appendChild(input);
                }

                setAnswered(input.value.trim() !== "");
            }
            else {
                input?.remove();
                setAnswered(true);
            }
        });

        inputDiv.appendChild(truthBtn);
    });
}
function showConnectInput(q) {
    selectedButton = null;
    userConnections = [];

    const inputDiv = document.getElementById("input-div");
    inputDiv.innerHTML = "";

    const current = questions[q];

    const container = document.createElement("div");
    container.id = "connect-container";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "connect-lines";

    const leftColumn = document.createElement("div");
    const rightColumn = document.createElement("div");
    leftColumn.className = "connect-column";
    rightColumn.className = "connect-column";
    leftColumn.id = "left-column";
    rightColumn.id = "right-column";


    const shuffledRight = shuffle(
        current.pairs.map(pair => pair.right)
    );

    current.pairs.forEach(pair => {
        const item = document.createElement("button");

        item.type = "button";
        item.className = "connect-left";
        item.textContent = pair.left;

        item.dataset.side = "left";
        item.dataset.value = pair.left;

        item.addEventListener("click", handleConnectClick);

        leftColumn.appendChild(item);
    });

    shuffledRight.forEach(text => {
        const item = document.createElement("button");

        item.type = "button";
        item.className = "connect-right";
        item.textContent = text;

        item.dataset.side = "right";
        item.dataset.value = text;

        item.addEventListener("click", handleConnectClick);

        rightColumn.appendChild(item);
    });
    container.appendChild(svg);
    container.appendChild(leftColumn);
    container.appendChild(rightColumn);
    inputDiv.appendChild(container);
};


// FORM STUFF
function handleForm(questionNumber) {
    document.getElementById('question').addEventListener('submit', function (event) {
        event.preventDefault();

        if (isAnswered) {
            if (!isChecked) handleCheck();
            else handleContinue();
        }
    });

}
function handleCheck() {
    clearInterval(timer);
    // questionScore = 0;
    const inputDiv = document.getElementById("input-div");
    const current = questions[countQuest];
    const type = current.type;

    switch (type) {
        case "open":
            userAnswer = document.getElementById("answer-input").value;
            const answerBox = document.getElementById("correct-answer");
            answerBox.innerHTML = `<strong>תשובה:</strong> ${current.answer}`;
            answerBox.style.display = "block";
            document.getElementById("answer-input").disabled = true;

            break;

        case "multiple-choice":
            userAnswer = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(cb => cb.value);
            const wrappers = document.querySelectorAll(".option-wrapper");

            wrappers.forEach(wrapper => {
                const checkbox = wrapper.querySelector("input");
                const value = checkbox.value;
                const isCorrect = current.answer.includes(value);
                const isSelected = checkbox.checked;
                if (isCorrect) {
                    wrapper.classList.add("correct-answer");
                }
                if (isSelected && !isCorrect) {
                    wrapper.classList.add("wrong-answer");
                }
                checkbox.disabled = true;
            });

            correctCount = 0;
            userAnswer.forEach(answer => {
                if (current.answer.includes(answer)) correctCount++;
            });
            break;

        case "american":
            const selected = document.querySelector(".american-option.selected");
            if (selected) userAnswer = selected.value;
            else userAnswer = "";

            document.querySelectorAll(".american-option").forEach(button => {
                const wasSelected = button.classList.contains("selected");
                if (button.value === current.answer) {
                    button.classList.add("correct-answer");
                }
                if (
                    button.classList.contains("selected") &&
                    button.value !== current.answer
                ) {
                    button.classList.add("wrong-answer");
                }
                button.classList.remove("selected");
                button.disabled = true;
            });
            break;

        case "truth":
            const selectedT = document.querySelector(".truth-option.selected");
            userAnswer = selectedT ? selectedT.value : "";

            document.querySelectorAll(".truth-option").forEach(button => {
                if (button.value === current.answer) {
                    button.classList.add("correct-answer");
                }
                if (
                    button.classList.contains("selected") &&
                    button.value !== current.answer
                ) {
                    button.classList.add("wrong-answer");
                }
                button.classList.remove("selected");
                button.disabled = true;
            });
            break;

        case "truth-open":
            const selectedTO = document.querySelector(".truth-option.selectedTO");
            const typed = document.getElementById("truth-open-input")?.value ?? "";

            userAnswer = {
                truth: selectedTO?.value ?? "",
                text: typed
            };

            document.querySelectorAll(".truth-option").forEach(button => {
                if (button.value === current.answer.truth) {
                    button.classList.add("correct-answer");
                }

                if (
                    button.classList.contains("selectedTO") &&
                    button.value !== current.answer.truth
                ) button.classList.add("wrong-answer");

                button.classList.remove("selectedTO");
                button.disabled = true;
            });

            const answerBoxTruth = document.createElement("div");
            answerBoxTruth.id = "correct-answer";
            answerBoxTruth.innerHTML = `<strong>תשובה:</strong> ${current.answer.text}`;
            inputDiv.appendChild(answerBoxTruth);

            document.getElementById("truth-open-input")?.setAttribute("disabled", true);

            break;

        case "connect":
            showUserResult();

            setTimeout(() => {
                showCorrectConnectSolution();

                isChecked = true;
                inputDiv.classList.add("show-result");
                setToContinue();
            }, 2000);

            return;
            break;

        default:
            alert("404");
            break;
    }

    isChecked = true;
    inputDiv.classList.add("show-result");
    setToContinue();
}
function handleContinue() {
    isChecked = false;
    countQuest++;
    // quizData.currentQuestion = countQuest;
    // localStorage.setItem("quizData", JSON.stringify(quizData));

    if (countQuest < questions.length) {
        showQuestion(countQuest);
        startTimer();
    }
    else {
        window.location.href = "finish.html";
    }
}
function setToContinue() {
    formBtn = document.getElementById("form-btn");
    formBtn.src = "assets/nextBtn.svg";
    formBtn.alt = "continue";
}
function handleAnswer(userAnswer) {
    quizData = JSON.parse(localStorage.getItem("quizData"));

    quizData.answers.push({
        question: countQuest,
        answer: userAnswer
    });

    countQuest++;
    quizData.currentQuestion = countQuest;

    localStorage.setItem(
        "quizData",
        JSON.stringify(quizData)
    );

    if (countQuest < questions.length) {
        showQuestion(countQuest);
        startTimer();   //timer test---------------------------
    }
    else window.location.href = "finish.html";
}

// helper
function setAnswered(answered) {
    isAnswered = answered;
    document.getElementById("form-btn").src =
        answered
            ? "assets/checkBtn.svg"
            : "assets/unAnsweredBtn.svg";
}
function updateAnsweredState() {
    // Compass question
    if (document.getElementById("compass-container")) {
        const placed = document.querySelectorAll(".compass-drop .dir-item").length;
        setAnswered(placed === 4);
        // setAnswered(placed >= 1);
        return;
    }

    // Table question
    if (document.getElementById("drag-table")) {
        const placed = document.querySelectorAll("#relief .drag-item, #cover .drag-item").length;
        const total = document.querySelectorAll(".drag-item").length;
        setAnswered(placed === total);
        // setAnswered(placed >= 1);
    }
}
function startTimer() {
    clearInterval(timer);
    timeLeft = 45;
    document.querySelector("#timer p").textContent = `00:${String(timeLeft).padStart(2, "0")}`;
    timer = setInterval(() => {
        timeLeft--;
        document.querySelector("#timer p").textContent = `00:${String(timeLeft).padStart(2, "0")}`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timesOut();

            isChecked = true;
            isAnswered = true;

            handleCheck();
        }
    }, 1000);
}
function timesOut() {
    if (document.getElementById("times-out")) return;

    message = document.createElement("div");
    message.id = "times-out";
    message.textContent = "נגמר הזמן!";

    document.getElementById("header").insertAdjacentElement("afterend", message);
}

function enableConnect() {
}
function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function handleConnectClick(e) {
    const button = e.currentTarget;

    const existing = userConnections.find(connection =>
        connection.leftElement === button ||
        connection.rightElement === button
    );

    if (existing) {

        existing.line.remove();

        existing.leftElement.classList.remove("matched");
        existing.rightElement.classList.remove("matched");

        userConnections = userConnections.filter(c => c !== existing);
    }

    if (button.classList.contains("matched"))
        return;

    if (!selectedButton) {
        selectedButton = button;
        button.classList.add("selected");
        return;
    }

    if (selectedButton.dataset.side === button.dataset.side) {
        selectedButton.classList.remove("selected");
        selectedButton = button;
        button.classList.add("selected");
        return;
    }

    const firstButton = selectedButton;
    const secondButton = button;

    const leftButton =
        firstButton.dataset.side === "left"
            ? firstButton
            : secondButton;

    const rightButton =
        firstButton.dataset.side === "right"
            ? firstButton
            : secondButton;

    const line = drawConnection(
        firstButton,
        secondButton,   // <- animation direction
        "#F9F2D6"
    );

    userConnections.push({
        left: leftButton.dataset.value,
        right: rightButton.dataset.value,
        leftElement: leftButton,
        rightElement: rightButton,
        line
    });

    // userConnections[userConnections.length - 1].line = line;


    leftButton.classList.remove("selected");
    rightButton.classList.remove("selected");

    leftButton.classList.add("matched");
    rightButton.classList.add("matched");

    selectedButton = null;

    setAnswered(userConnections.length === questions[countQuest].pairs.length);
}
function drawConnection(startButton, endButton, color = "#F9F2D6") {
    const svg = document.getElementById("connect-lines");
    const svgRect = svg.getBoundingClientRect();
    const startRect = startButton.getBoundingClientRect();
    const endRect = endButton.getBoundingClientRect();

    const DOT_RADIUS = 6;

    const x1 = startRect.left + startRect.width / 2 - svgRect.left;
    const x2 = endRect.left + endRect.width / 2 - svgRect.left;
    const y1 = startRect.top + startRect.height / 2 - svgRect.top;
    const y2 = endRect.top + endRect.height / 2 - svgRect.top;
    const length = Math.hypot(x2 - x1, y2 - y1);

    const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line"
    );

    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);

    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", "4");
    line.setAttribute("stroke-linecap", "round");

    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;


    svg.appendChild(line);

    requestAnimationFrame(() => {
        line.style.transition = "stroke-dashoffset .35s ease";
        line.style.strokeDashoffset = "0";
    });

    return line;
}
function showUserResult() {
    const current = questions[countQuest];
    document.querySelectorAll(".connect-left, .connect-right").forEach(button => {
        button.disabled = true;
        button.classList.remove("selected");
    });
    userConnections.forEach(connection => {
        const correct = current.pairs.some(pair =>
            pair.left === connection.left &&
            pair.right === connection.right
        );
        connection.leftElement.classList.remove(
            "matched",
            "correct-answer",
            "wrong-answer"
        );
        connection.rightElement.classList.remove(
            "matched",
            "correct-answer",
            "wrong-answer"
        );

        if (correct) {
            connection.leftElement.classList.add("correct-answer");
            connection.rightElement.classList.add("correct-answer");
            connection.line.setAttribute("stroke", "#3BA55C");
        }
        else {
            connection.leftElement.classList.add("wrong-answer");
            connection.rightElement.classList.add("wrong-answer");
            connection.line.setAttribute("stroke", "#D9534F");
        }
    });
}
function showCorrectConnectSolution() {
    const current = questions[countQuest];

    userConnections = userConnections.filter(connection => {
        const correct = current.pairs.some(pair =>
            pair.left === connection.left &&
            pair.right === connection.right
        );

        if (!correct) {
            connection.line.style.transition = "opacity .3s ease";
            connection.line.style.opacity = "0";

            setTimeout(() => {
                connection.line.remove();
            }, 300);

            connection.leftElement.classList.remove(
                "wrong-answer",
                "matched"
            );
            connection.rightElement.classList.remove(
                "wrong-answer",
                "matched"
            );
        }
        return correct;
    });

    setTimeout(() => {
        current.pairs.forEach((pair, index) => {
            const alreadyShown = userConnections.some(connection =>
                connection.left === pair.left &&
                connection.right === pair.right
            );

            if (alreadyShown) return;

            setTimeout(() => {
                const leftButton = document.querySelector(`.connect-left[data-value="${pair.left}"]`);
                const rightButton = document.querySelector(`.connect-right[data-value="${pair.right}"]`);
                const line = drawConnection(
                    leftButton,
                    rightButton,
                    "#3BA55C"
                );

                leftButton.classList.add("correct-answer");
                rightButton.classList.add("correct-answer");
                leftButton.disabled = true;
                rightButton.disabled = true;

                userConnections.push({
                    left: pair.left,
                    right: pair.right,
                    leftElement: leftButton,
                    rightElement: rightButton,
                    line
                });
            }, index * 350);
        });
    }, 300);
}