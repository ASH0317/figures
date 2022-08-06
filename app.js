let count = 0;

document.addEventListener('click', function (e) {
    if (e.target.classList.contains("btn")) {
        if (e.target.classList.contains("cur")) {
            if (count == 0) {
                count += 1;
                document.querySelector('.first').classList.add('none');
                document.querySelector('.second').classList.remove('none');
            } else if (count == 1) {
                count += 1;
                document.querySelector('.second').classList.add('none');
                document.querySelector('.tri').classList.remove('none');
            } else if (count == 2) {
                count += 1;
                document.querySelector('.tri').classList.add('none');
                document.querySelector('.four').classList.remove('none');
            } else if (count == 3) {
                count += 1;
                document.querySelector('.four').classList.add('none');
                document.querySelector('.five').classList.remove('none');
            } else if (count == 4) {
                count += 1;
                document.querySelector('.five').classList.add('none');
                document.querySelector('.won').classList.remove('none');
            }

        } else {
            document.querySelector('.first').classList.add('none');
            document.querySelector('.second').classList.add('none');
            document.querySelector('.tri').classList.add('none');
            document.querySelector('.four').classList.add('none');
            document.querySelector('.five').classList.add('none');

            document.querySelector('.popap').classList.remove('none');
        }
    }
})



document.addEventListener('click', function (e) {

    if (e.target.classList.contains("rep")) {
        count = 0;

        document.querySelector('.second').classList.add('none');
        document.querySelector('.tri').classList.add('none');
        document.querySelector('.four').classList.add('none');
        document.querySelector('.five').classList.add('none');
        document.querySelector('.popap').classList.add('none');

        document.querySelector('.first').classList.remove('none');
    }

})