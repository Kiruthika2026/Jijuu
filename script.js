let currentStep = 0;

const steps = document.querySelectorAll(".step-page");
const sidebarSteps = document.querySelectorAll(".sidebar li");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const finishBtn = document.getElementById("finishBtn");

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    sidebarSteps.forEach(step => step.classList.remove("active"));

    steps[index].classList.add("active");
    sidebarSteps[index].classList.add("active");

    backBtn.style.display = index === 0 ? "none" : "inline-block";
    nextBtn.style.display = "none";

    // Show Finish only on last step
    finishBtn.style.display = index === steps.length - 1 ? "inline-block" : "none";
}

// ===============================
// OPTION BUTTON CLICK HANDLING
// ===============================
document.querySelectorAll(".options button").forEach(button => {
    button.addEventListener("click", () => {

        // Highlight selected option
        button.parentElement.querySelectorAll("button")
            .forEach(btn => btn.classList.remove("selected"));

        button.classList.add("selected");

        // 🔹 STORE INTEREST (ONLY FOR INTEREST STEP)
        if (steps[currentStep].querySelector("h3")
            .innerText.toLowerCase().includes("interest")) {

            localStorage.setItem("interest", button.innerText);
        }

        // Auto move to next step
        setTimeout(() => {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
            }
        }, 300);
    });
});

// ===============================
// BACK BUTTON
// ===============================
backBtn.addEventListener("click", () => {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
});

// ===============================
// FINISH BUTTON
// ===============================
finishBtn.addEventListener("click", () => {
    window.location.href = "result.html";
});

// Initial load
showStep(currentStep);
function goBack() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = "index.html";
    }
}

