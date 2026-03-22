import http from 'node:http';

const server = http.createServer((req: any, res: any) => {
  // req — всё о запросе который пришёл
  // res — объект через который отвечаем
});

server.listen(3000);