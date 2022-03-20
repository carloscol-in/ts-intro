export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity {
    id: number;
    title: string;
}

interface Album extends Entity {
    // not necessary to repeat the properties `id` and `title`
    description: string;
}

interface Picture extends Entity {
    // not necessary to repeat the properties `id` and `title`
    orientation: PhotoOrientation;
}

const album: Album = {
    id: 1,
    title: 'Landscapes',
    description: 'Cool lanscapes seen in my last trip.'
};

const picture: Picture = {
    id: 1,
    title: 'Forest',
    orientation: PhotoOrientation.Landscape
}

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture', picture);
console.log('newPicture', newPicture);
