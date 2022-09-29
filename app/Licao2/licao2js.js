const range = document.querySelector('#range'),
    progressbar = document.querySelector('.progress-bar1');
 
range.addEventListener('input', function () {
    const value = range.value;
    progressbar.style.setProperty('--progress', value)
})