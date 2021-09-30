import nc from 'next-connect';
import Product from '../../models/Product';
import db from "../../utilis/db";
import data from '../../utilis/data';



const handler = nc();

handler.get(async(req, res) => {
    await db.connect();
    await Product.deleteMany();
    await Product.insertMany(data.products);
    await db.disconnect();
    res.send({ message:'seeded successfully' });
})

export default handler;