const range = document.querySelector('#range'),
    progressbar = document.querySelector('.progress-bar');

    console.log(range,progressbar);
 
range.addEventListener('input', function () {
    const value = range.value;
    progressbar.style.setProperty('--progress', value);
})