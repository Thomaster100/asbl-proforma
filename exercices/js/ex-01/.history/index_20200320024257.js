window.addEventListener("DOMContentLoaded", function() {

    const entry;
    const submit = document.querySelector(".submit-number");
    const restart = document.querySelector(".restart");
    const result = document.querySelectorAll(".result");
    const totalEntriesResult = document.querySelector(".total-entries-result")

    const tableauResult = [];

    submit.addEventListener("click", () => {
        entry = document.querySelector(".user-input").value;
        tableauResult.push(entry);

        totalEntriesResult.innerHTML = tableauResult.length;


    })

    restart.addEventListener("click", () => {


    })

})