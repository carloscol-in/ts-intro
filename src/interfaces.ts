export {};

// function to show a photograph
enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string,
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture): void {
    console.log(`[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`);
}

let pic = {
    title: 'Forest',
    date: '2020-01-01',
    orientation: PhotoOrientation.Landscape
}
showPicture(pic);
showPicture({
    title: 'Rainy Day',
    date: '2021-01-01',
    orientation: PhotoOrientation.Portrait,
    // test: true // error
});