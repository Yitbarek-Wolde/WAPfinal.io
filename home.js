function PerviousPicture() {
    let picChangeElements = document.querySelectorAll('.PicChange');

    for (let i = 0; i < picChangeElements.length; i++) {
        let element = picChangeElements[i];


        element.addEventListener('click', function () {

            let parentDiv = this.parentElement;
            let ImageContainer = parentDiv.previousElementSibling;
            let Checking = ImageContainer.getAttribute('name');

            if (Checking.indexOf('1') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('1', '3');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('2') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('2', '1');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('3') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('3', '2');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else
                console.log('Error')

        })
    }
}

function NextPicture() {
    let picChangeElements = document.querySelectorAll('.PicChangeN');

    for (let i = 0; i < picChangeElements.length; i++) {
        let element = picChangeElements[i];


        element.addEventListener('click', function () {

            let parentDiv = this.parentElement;
            let ImageContainer = parentDiv.previousElementSibling;
            
           
            let Checking = ImageContainer.getAttribute('name');

            if (Checking.indexOf('1') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('1', '2');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('2') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('2', '3');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else if (Checking.indexOf('3') !== -1) {
                console.log(Checking)
                let replaceText = Checking.replace('3', '1');
                ImageContainer.name = replaceText;
                ImageContainer.src = replaceText;
            }
            else
                console.log('Error')
        })
    }

}
