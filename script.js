
let completedChallenges = JSON.parse(
    localStorage.getItem("completedChallenges") || '["html"]'
);

function updateProgress() {
    document.getElementById("completed-count").textContent =
        completedChallenges.length;

    localStorage.setItem(
        "completedChallenges",
        JSON.stringify(completedChallenges)
    );
}

function completeChallenge(id) {
    if (!completedChallenges.includes(id)) {
        completedChallenges.push(id);
    }

    updateProgress();
}

function checkPhishing(answer) {
    const feedback = document.getElementById("phishing-feedback");

    if (answer === "report") {
        feedback.textContent =
            "Correct. Verify the sender through a trusted channel instead of clicking a suspicious link.";
        completeChallenge("phishing");
    } else {
        feedback.textContent =
            "Not quite. Don't click suspicious links. Verify the message through a trusted channel.";
    }
}

function checkEncoding(answer) {
    const feedback = document.getElementById("encoding-feedback");

    if (answer === "no") {
        feedback.textContent =
            "Correct. Base64 is encoding, not encryption. It does not keep information secret.";
        completeChallenge("encoding");
    } else {
        feedback.textContent =
            "Not quite. Base64 can be decoded without a secret key.";
    }
}

function checkSQL(answer) {
    const feedback = document.getElementById("sql-feedback");

    if (answer === "safe") {
        feedback.textContent =
            "Correct. Parameterized queries help keep user input separate from SQL commands.";
        completeChallenge("sql");
    } else {
        feedback.textContent =
            "Not quite. Joining untrusted input directly into a query can create SQL injection vulnerabilities.";
    }
}

updateProgress();
