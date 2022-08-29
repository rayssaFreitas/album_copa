export class Album {
    paises!: Array<Pais>;

    constructor(obj?: any){
        Object.assign(this, obj);
    }
}

export class Pais{
    nome!: string;
    figurinhas!: Array<Figurinha>;

    constructor(obj?: any){
        Object.assign(this, obj);
    }
}

export class Figurinha {
    numero!: number;
    quantidades!: number;
    empenhadas!: number;

    constructor(obj?: any){
        Object.assign(this, obj);
    }
}