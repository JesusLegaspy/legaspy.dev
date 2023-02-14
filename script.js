// https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let globalFirstNumber = null;
let globalSecondNumber = null;
let globalThirdNumber = null;
let seed = null;

// Get an integer between 0-10
const getRandomInteger = () => {
    return Math.floor(Math.random() * 11);
}

$('#request-contact').click(() => {
    // Adds a seed to prevent bots
    seed = getRandomInteger() * 7;
    globalFirstNumber = getRandomInteger() + seed;
    globalSecondNumber = getRandomInteger() + seed;
    globalThirdNumber = getRandomInteger() + seed;
    $('#randomNumberOne').text(globalFirstNumber - seed);
    $('#randomNumberTwo').text(globalSecondNumber - seed);
    $('#randomNumberThree').text(globalThirdNumber - seed);
});

$('#challengeSubmit').click(() => {
    const userResult = Number(($('#challengeResult').val()));
    const actualResult = (globalFirstNumber - seed) + (globalSecondNumber - seed) - (globalThirdNumber - seed);
    if (userResult === actualResult) {
        fetch('./contact.json')
            .then((response) => response.json())
            .then((json) => {
                const linkedin = descrambler(json.linkedin);
                const email = descrambler(json.email);
                const timezone = descrambler(json.timezone);
                const github = descrambler(json.github);
                $('#linkedin').html(`<a href="${linkedin}" target="_blank">${linkedin}</a>`);
                $('#email').html(`<a href="mailto:${email}" target="_blank">${email}</a>`);
                $('#timezone').text(timezone);
                $('#github').html(`<a href="${github}" target="_blank">${github}</a>`);
            });
        $('.blur').removeClass('blur');
        $('#request-contact').remove();
        $('#closeModal').click();
    } else {
        console.log(false);
    }
});

const descrambler = (text) => {
    let temporaryText = [];
    for (let index = 0; index < text.length; index++) {
        temporaryText.push(String.fromCharCode(text.charCodeAt(index) + 1));
    }
    return (temporaryText.reverse().join(''));
}

const scrambler = (text) => {
    let temporaryText = [];
    for (let index = 0; index < text.length; index++) {
        temporaryText.push(String.fromCharCode(text.charCodeAt(index) - 1));
    }
    return (temporaryText.reverse().join(''));
}

