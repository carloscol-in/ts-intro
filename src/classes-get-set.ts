export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// access methods; get & set

class Picture {

    // properties
    private _id: number;
    private _title: string;
    private _orientation: PhotoOrientation;

    // constructor
    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }


    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get orientation() {
        return this._orientation;
    }
    set orientation(orientation: PhotoOrientation) {
        this._orientation = orientation;
    }

    // methods
    public toString() {
        return `[${this.id}, ${this.title}, ${this.orientation}]`;
    }

}

class Album {

    // properties
    private _id: number;
    private _title: string;
    private pictures: Picture[];

    // constructor
    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    get id() {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
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
console.log("picture.id", pic1.id); // get id()
pic1.id = 100; // private, set id(100)
pic1.title = "Another title"; // private
album.title = "Activities"; // private
console.log("album", album);