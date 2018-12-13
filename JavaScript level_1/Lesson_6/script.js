window.onload = function () {
    const image = document.getElementsByTagName('img');
    for (img of image) {
        img.onclick = showBigPicture;
    }
}
function showBigPicture(event) {
    const bigPictureBlock = document.getElementById('bigPicture');
    bigPictureBlock.innerHTML = '';
    const smallPicture = event.target;
    const imageNameParts = smallPicture.id.split('_');
    const bigPicture = document.createElement('img');
    bigPicture.src = `imgBig/${imageNameParts[1]}.jpg`;
    bigPictureBlock.appendChild(bigPicture);
    bigPicture.onerror = function () {
        alert('file not found')
    }
}