declare module "fantastik" {
  export class fanbase {
    constructor(file?: string);
    private file: string;
    public write(data: string, value: any): void;
    public get(data: string): any;
    public delete(data: string): void;
    public sum(data: string, value: number): void;
    public has(data: string): boolean;
    public getAll(): object;
    public push(array: string, value: any): void;
    public deleteKey(object: string, key: string): void;
  }
}