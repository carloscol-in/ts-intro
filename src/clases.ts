export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {

    // properties
    id: number;
    title: string;
    orientation: PhotoOrientation;

    // constructor
    constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // methods
    toString() {
        return `[${this.id}, ${this.title}, ${this.orientation}]`;
    }

}

class Album {

    // properties
    id: number;
    title: string;
    pictures: Picture[];

    // constructor
    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    // methods
    addPicture(picture: Picture) {
        this.pictures.push(picture);
    }

}

let album: Album = new Album( 1, "Last Trip" );
let pic1: Picture = new Picture( 1, "Landscape", PhotoOrientation.Panorama );
album.addPicture(pic1);
console.log(album);