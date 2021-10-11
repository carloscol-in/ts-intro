export {};

// TypeScript version >= 3.8

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {

    // properties
    #id: number;
    #title: string;
    #orientation: PhotoOrientation;

    // constructor
    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    // methods
    public toString() {
        return `[${this.#id}, ${this.#title}, ${this.#orientation}]`;
    }

}

class Album {

    // properties
    #id: number;
    #title: string;
    #pictures: Picture[];

    // constructor
    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    // methods
    public addPicture(picture: Picture) {
        this.#pictures.push(picture);
    }

}

let album: Album = new Album( 1, "Last Trip" );
let pic1: Picture = new Picture( 1, "Landscape", PhotoOrientation.Panorama );
album.addPicture(pic1);
console.log("album:", album);

// accessing the public members
// pic1.id = 100; // private
// pic1.title = "Another title"; //private
console.log("picture", pic1);

// album.title = "Activities"; // private
console.log("album:", album);