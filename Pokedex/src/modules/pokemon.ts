export class Pokemon {
    constructor(
        public id: string, 
        public name: string,
        public type: string[],
        public photo: string, 
        public description: string,
        public ability: string,
        public heigth: string,
        public weigth: string,

        public hp: string,
        public attack: string,
        public defense: string,
        public spatk: string,
        public spdef: string,
        public speed: string,
        ){
        
    }
}