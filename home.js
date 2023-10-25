function PerviousPicture(){
    let picChangeElements = document.querySelectorAll('.PicChange');

    for (let i = 0; i < picChangeElements.length; i++) {
        let element = picChangeElements[i];
        
        
        element.addEventListener('click', function() {
            
            let parentDiv = this.parentElement;
            let ImageContainer = parentDiv.previousElementSibling;
            let OneCheck = ImageContainer.src.search('1');
            let TwoCheck = ImageContainer.src.search('2');
            let ThreeCheck = ImageContainer.src.search('3');

            if(OneCheck !== -1)
                ImageContainer.src.replace('1','3')
            else if(TwoCheck !== -1)
                ImageContainer.src.replace('2','1')
            else if(ThreeCheck !== -1)
                ImageContainer.src.replace('3','2')
            else
                console.log('Error')
        
        })
}
    }

function NextPicture(){
    let picChangeElements = document.querySelectorAll('.PicChange');

    for (let i = 0; i < picChangeElements.length; i++) {
        let element = picChangeElements[i];
        
        
        element.addEventListener('click', function() {
            
            let parentDiv = this.parentElement;
            let ImageContainer = parentDiv.previousElementSibling;
            let OneCheck = ImageContainer.src.search('1');
            let TwoCheck = ImageContainer.src.search('2');
            let ThreeCheck = ImageContainer.src.search('3');

            if(OneCheck !== -1)
                ImageContainer.src.replace('1','2')
            else if(TwoCheck !== -1)
                ImageContainer.src.replace('2','3')
            else if(ThreeCheck !== -1)
                ImageContainer.src.replace('3','1')
            else
                console.log('Error')
        })
}

}

