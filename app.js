const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');

let image = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-btn')
const uploadFile = document.getElementById('upload-file')
const revertBtn = document.getElementById('revert-btn')


document.addEventListener('click', (e) => {
    if(e.target.classList.contains('filter-btn')){
        if(e.target.classList.contains('brightness-add')){
            Caman('#canvas', img, function(){
                this.brightness(5).render();
            })
        }
        else if(e.target.classList.contains('brightness-remove')){
            Caman('#canvas', img, function(){
                this.brightness(-5).render();
            })
        }
        else if(e.target.classList.contains('contrast-add')){
            Caman('#canvas', img, function(){
                this.contrast(5).render();
            })
        }
        else if(e.target.classList.contains('contrast-remove')){
            Caman('#canvas', img, function(){
                this.contrast(-5).render();
            })
        }
        else if(e.target.classList.contains('saturation-add')){
            Caman('#canvas', img, function(){
                this.saturation(5).render();
            })
        }
        else if(e.target.classList.contains('saturation-remove')){
            Caman('#canvas', img, function(){
                this.saturation(-5).render();
            })
        }
        else if(e.target.classList.contains('clip-add')){
            Caman('#canvas', img, function(){
                this.clip(5).render();
            })
        }
        else if(e.target.classList.contains('clip-remove')){
            Caman('#canvas', img, function(){
                this.clip(-5).render();
            })
        }
        else if(e.target.classList.contains('exposure-add')){
            Caman('#canvas', img, function(){
                this.exposure(5).render();
            })
        }
        else if(e.target.classList.contains('exposure-remove')){
            Caman('#canvas', img, function(){
                this.exposure(-5).render();
            })
        }
        else if(e.target.classList.contains('hue-add')){
            Caman('#canvas', img, function(){
                this.hue(10).render();
            })
        }
        else if(e.target.classList.contains('hue-remove')){
            Caman('#canvas', img, function(){
                this.hue(-5).render();
            })
        }
        else if(e.target.classList.contains('sharpen-add')){
            Caman('#canvas', img, function(){
                this.sharpen(5).render();
            })
        }
        else if(e.target.classList.contains('sharpen-remove')){
            Caman('#canvas', img, function(){
                this.sharpen(-5).render();
            })
        }
        else if(e.target.classList.contains('vibrance-add')){
            Caman('#canvas', img, function(){
                this.vibrance(5).render();
            })
        }
        else if(e.target.classList.contains('vibrance-remove')){
            Caman('#canvas', img, function(){
                this.vibrance(-5).render();
            })
        }
        else if(e.target.classList.contains('vintage-add')){
            Caman('#canvas', img, function(){
                this.vintage().render();
            })
        }
        else if(e.target.classList.contains('lomo-add')){
            Caman('#canvas', img, function(){
                this.lomo().render();
            })
        }
        else if(e.target.classList.contains('clarity-add')){
            Caman('#canvas', img, function(){
                this.clarity().render();
            })
        }
        else if(e.target.classList.contains('sincity-add')){
            Caman('#canvas', img, function(){
                this.sinCity().render();
            })
        }
        else if(e.target.classList.contains('crossprocess-add')){
            Caman('#canvas', img, function(){
                this.crossProcess().render();
            })
        }
        else if(e.target.classList.contains('pinhole-add')){
            Caman('#canvas', img, function(){
                this.pinhole().render();
            })
        }
        else if(e.target.classList.contains('nostalgia-add')){
            Caman('#canvas', img, function(){
                this.nostalgia().render();
            })
        }
        else if(e.target.classList.contains('hermajesty-add')){
            Caman('#canvas', img, function(){
                this.herMajesty().render();
            })
        }
        else if(e.target.classList.contains('grungy-add')){
            Caman('#canvas', img, function(){
                this.grungy().render();
            })
        }
        else if(e.target.classList.contains('love-add')){
            Caman('#canvas', img, function(){
                this.love().render();
            })
        }
        else if(e.target.classList.contains('sunrise-add')){
            Caman('#canvas', img, function(){
                this.sunrise().render();
            })
        }
        else if(e.target.classList.contains('hemingway-add')){
            Caman('#canvas', img, function(){
                this.hemingway().render();
            })
        }
    }
})

revertBtn.addEventListener('click', function(){
    Caman('#canvas', img, function(){
        this.revert();
    })
})

downloadBtn.addEventListener('click', function(){
    const fileExtension = fileName.slice(-4);
    let newFileName;

    if(fileExtension === '.jpg' || fileExtension === '.png'){
        newFileName = fileName.substring(0, fileName.length-4) + 'edited.jpg';
    }
    download(canvas, newFileName);
})

function download(canvas, filename){
    let e;
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.8)
    e = new MouseEvent('click');
    link.dispatchEvent(e);
}

uploadFile.addEventListener('change', (e) => {
    const file = document.getElementById('upload-file').files[0]
    const reader = new FileReader();

    if(file){
        fileName = file.name;
        reader.readAsDataURL(file);
    }
    reader.addEventListener('load', () => {
        img = new Image();
        img.src = reader.result;
        img.onload = function(){
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0,0, img.width, img.height)
            canvas.removeAttribute('data-caman-id')
        }
    }, false)
})
// document.addEventListener('click')