import { ServerResponse } from 'http'

export class Response{
    public statusCode: number = 200
    constructor(public raw: ServerResponse){

    }

    public status(code: number){
        this.statusCode = code
        this.raw.statusCode = code
        return this
    }

    public json(data: unknown): void {
    this.raw.setHeader('Content-Type', 'application/json');
    this.raw.end(JSON.stringify(data));
  }

    public send(data: string): void {
        this.raw.setHeader('Content-Type', 'text/plain');
        this.raw.end(data);
    }


}