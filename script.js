const localImage = document.querySelector('#local-da-image');
const localButtons = document.querySelector('#buttons-local');
const localImages = document.querySelector('#local-imagens');

const inputText = document.createElement('input');
inputText.id = 'text-input';
inputText.className = 'form-control';
inputText.maxLength = '60';
localImage.appendChild(inputText);

const containerText = document.createElement('div');
containerText.className = 'container';
containerText.style.width = '400px';
containerText.style.height = '400px';
localImage.appendChild(containerText);

const inputImage = document.createElement('input');
inputImage.type = 'file';
inputImage.id = 'meme-insert';
containerText.appendChild(inputImage);

const divLocalImage = document.createElement('div');
divLocalImage.id = 'meme-image-container';
containerText.appendChild(divLocalImage);

const imageLocal = new Image();
imageLocal.id = 'meme-image';
imageLocal.style.width = '400px';
imageLocal.style.height = '400px';
imageLocal.src = '';
divLocalImage.appendChild(imageLocal);

const textImage = document.createElement('h1');
textImage.id = 'meme-text';
divLocalImage.appendChild(textImage);

inputText.addEventListener('input', () => {
  textImage.innerText = inputText.value;
});

inputImage.addEventListener('change', () => {
  const leitorDeArquivos = new FileReader();
  const imageFile = inputImage.files[0];

  leitorDeArquivos.readAsDataURL(imageFile);
  leitorDeArquivos.addEventListener('loadend', (load) => {
    console.log(load.target.result);
    imageLocal.src = load.target.result;
  });
});

// Requisito 06

const btnStilo = 'btn btn-outline-secondary';

const buttonFire = document.createElement('button');
buttonFire.id = 'fire';
buttonFire.className = btnStilo;
buttonFire.innerText = 'Button Fire';
localButtons.appendChild(buttonFire);

const buttonWater = document.createElement('button');
buttonWater.className = btnStilo;
buttonWater.id = 'water';
buttonWater.innerText = 'Button Whater';
localButtons.appendChild(buttonWater);

const buttonEarth = document.createElement('button');
buttonEarth.className = btnStilo;
buttonEarth.id = 'earth';
buttonEarth.innerText = 'Button Earth';
localButtons.appendChild(buttonEarth);

buttonFire.addEventListener('click', () => {
  divLocalImage.style.border = '3px dashed red';
});

buttonWater.addEventListener('click', () => {
  divLocalImage.style.border = '5px double blue';
});

buttonEarth.addEventListener('click', () => {
  divLocalImage.style.border = '6px groove green';
});

// Requisito 07

const imgone = 'imgs/meme1.png';
const imgtwo = 'imgs/meme2.png';
const imgtre = 'imgs/meme3.png';
const imgfor = 'imgs/meme4.png';
const classMeme = 'images-class';

const imageOne = document.createElement('img');

imageOne.id = 'meme-1';
imageOne.className = classMeme;
imageOne.width = '100';
imageOne.height = '100';
imageOne.src = imgone;
localImages.appendChild(imageOne);

const imagetwo = document.createElement('img');
imagetwo.id = 'meme-2';
imagetwo.className = classMeme;
imagetwo.width = '100';
imagetwo.height = '100';
imagetwo.src = imgtwo;
localImages.appendChild(imagetwo);

const imagetre = document.createElement('img');
imagetre.id = 'meme-3';
imagetre.className = classMeme;
imagetre.width = '100';
imagetre.height = '100';
imagetre.src = imgtre;
localImages.appendChild(imagetre);

const imagefoor = document.createElement('img');
imagefoor.id = 'meme-4';
imagefoor.className = classMeme;
imagefoor.width = '100';
imagefoor.height = '100';
imagefoor.src = imgfor;
localImages.appendChild(imagefoor);

function mudarMemes(event) {
  const element = event.target;
  imageLocal.src = element.src;
}

const imagesprevew = document.querySelectorAll('.images-class');
for (let i = 0; i < imagesprevew.length; i += 1) {
  imagesprevew[i].addEventListener('click', mudarMemes);
}
