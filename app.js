let result = document.getElementById("result");
let btn = document.getElementById("get-leap-years");

btn.addEventListener("click", () => {
    let startYear = Number(document.getElementById("start-year").value);
    let endYear = Number(document.getElementById("end-year").value);

    if (
        (startYear < 1582 || startYear > 2999) &&
        (endYear < 1582 || endYear > 2999)
    ) {
        result.innerHTML = `<b>The start year and end year should be greater than 1581 and less than 3000.</b>`;
    }

    else if (startYear > endYear) {
        result.innerHTML = `<b>End year should be greater than the start year.</b>`;
    }

    else if (startYear < 1582 || startYear > 2999) {
        result.innerHTML = `<b>The start year should be greater than 1581 and less than 3000.</b>`;
    }

    else if (endYear < 1582 || endYear > 2999) {
        result.innerHTML = `<b>The end year should be greater than 1581 and less than 3000.</b>`;
    }

    else {
        let leapYears = [];
        for (let i = startYear; i <= endYear; i++) {

            if ((i % 4 == 0 && i % 100 != 0) || i % 400 == 0) {
                leapYears.push(i);
            }
        }

        result.innerHTML = `<b>There are ${leapYears.length
            } leap years between ${startYear} & ${endYear}.</b><span>${leapYears
                .toString()
                .split(",")
                .join(", ")}</span>`;
    }
});