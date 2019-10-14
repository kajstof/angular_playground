export class Point {
    constructor(private x: number, private y: number) { }
    getValue(){
        return `YoPoint: | ${this.x} | ${this.y} |`;
    }

    incrPoint(){
        this.x += 10;
        this.y += 100;
    }
}