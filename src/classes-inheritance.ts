export {};

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// superclass
abstract class Item {
    protected readonly _id: number;
    protected _title: string;

    constructor (id: number, title: string) {
        // this.id = id;
        this.title = title;
    }

    get id() {
        return this._id;
    }
    // set id(id: number) {
    //     this._id = id;
    // }

    get title() {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
}

// access methods; get & set

class Picture extends Item {

    public static photoOrientation = PhotoOrientation;
    // properties
    private _orientation: PhotoOrientation;

    // constructor
    public constructor(id: number, title: string, orientation: PhotoOrientation) {
        super(id = id, title = title);
        this._orientation = orientation;
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

class Album extends Item {

    // properties
    private pictures: Picture[];

    // constructor
    public constructor(id: number, title: string) {
        super(id = id, title = title);
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
console.log("album:", album);

// accessing the public members
console.log("picture.id", pic1.id); // get id()
// pic1.id = 100; // private, set id(100)
pic1.title = "Another title"; // private
album.title = "Activities"; // private
console.log("album:", album);

// const item = new Item(1, "Hola"); // error, can't create instance from abstract class
// console.log("item:", item); // error, instance from abstract class

// test static member from picture
console.log("photoOrientation:", Picture.photoOrientation.Portrait);