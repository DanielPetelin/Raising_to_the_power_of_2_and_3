document.addEventListener('click', function(e) {
    // let num = e.target.parentElement.querySelector("#num").value;

    if (e.target.classList.contains("step2")) {
        e.target.parentElement.querySelector("#num").value *= e.target.parentElement.querySelector("#num").value;
    } else if (e.target.classList.contains("step3")) {
        e.target.parentElement.querySelector("#num").value *= e.target.parentElement.querySelector("#num").value *= e.target.parentElement.querySelector("#num").value;
    } else if (e.target.classList.contains("clear")) {
        document.querySelector('#num').value = 0;
    };
});