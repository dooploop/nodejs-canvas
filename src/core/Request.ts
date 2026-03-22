import { IncomingMessage } from 'node:http';

export class Request {
  public method: string;        // GET, POST, PUT...
  public url: string;           // /users/1?lang=ru
  public headers: Record<string, string | string[] | undefined>; // заголовки запроса
  public body: Record<string, unknown> = {};   // тело - заполнит json миддлвар позже
  public params: Record<string, string> = {};  // /users/:id → { id: '1' } — заполнит роутер
  public query: Record<string, string> = {};   // ?lang=ru → { lang: 'ru' } — заполним сами

  constructor(public raw: IncomingMessage) {
    this.method = raw.method || 'GET';   // если метод не указан - по умолчанию GET
    this.url = raw.url || '/';           // если url не указан - корневой путь
    this.headers = raw.headers;          // берём заголовки как есть
  }
}