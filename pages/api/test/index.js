import nc from "next-connect";

const newUser = [
    {name:'Mahinur Rahman', email: 'mahi121.mr@gmail.com', phone: '01778287079',id:1},
    {name:'Ahad Ali Chowdhury', email: 'ahad@gmail.com', phone: '01716xxxxxx', id:2},
    {name:'Sumaiya Oishee', email: 'sumaiya@gmail.com', phone: '07176xxxxxx', id:3}
]

const handler = nc()
  .get((req, res) => {
    res.send(newUser);
  })


export default handler;