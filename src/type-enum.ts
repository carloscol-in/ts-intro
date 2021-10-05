// enum
// photograph orientation
enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Square = 2,
    Panorama = 3
}

const landscape: PhotoOrientation = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('landscape', PhotoOrientation[0]);

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square,
    Panorama
}

console.log('portrait', PictureOrientation.Portrait);

enum Country {
    Mexico = 'mex',
    Bolivia = 'bol',
    Colombia = 'col',
    Espana = 'esp',
    EEUU = 'usa',
    Dinamarca = 'den',
}

const country: Country = Country.Mexico;
console.log('country', country);