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

interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
    const pic = {
        title: 'Default',
        date: '2020-01-01',
        orientation: '100x100'
    };

    if (config.title) pic.title = config.title;

    if (config.date) pic.date = config.date;

    return pic
}

let picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({
    title: 'Forest'
});
console.log('picture', picture);
picture = generatePicture({
    title: 'Forest',
    date: '2021-10-05'
});
console.log('picture', picture);

// interface
interface User {
    readonly id: number, // read only
    username: string,
    isPro: boolean
}

let user: User;
user = {
    id: 10,
    username: 'abcdef',
    isPro: true
};
console.log('user', user);
user.username = 'uvwxyz';
// user.id = 100; // shouldn't be allowed
console.log('user', user);