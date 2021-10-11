export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {

    // properties
    public id: number;
    public title: string;
    public orientation: PhotoOrientation;

    // constructor
    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    // methods
    public toString() {
        return `[${this.id}, ${this.title}, ${this.orientation}]`;
    }

}

class Album {

    // properties
    public id: number;
    public title: string;
    public pictures: Picture[];

    // constructor
    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    // methods
    public addPicture(picture: Picture) {
        this.pictures.push(picture);
    }

}

let album: Album = new Album( 1, "Last Trip" );
let pic1: Picture = new Picture( 1, "Landscape", PhotoOrientation.Panorama );
album.addPicture(pic1);
console.log(album);

// accessing the public members
pic1.id = 100; // public
pic1.title = "Another title"; //public

album.title = "Activities"; // public
console.log("album", album);