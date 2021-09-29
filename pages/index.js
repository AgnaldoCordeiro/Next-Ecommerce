import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import data from '../utilis/data'
import NextLink from 'next/link';


export default function Home() {
  return (

    <Layout>
    <div>
      <h1>Products</h1>
     <Grid container spacing={3}>
       {data.products.map((products) => (
         <Grid item md={4} key={products.name}>
           <Card>
             <NextLink href={`/product/${products.slug}`} passHref>
             <CardActionArea>
               <CardMedia 
               component="img" 
               image={products.image} 
               title={products.name}>
               </CardMedia>
               <CardContent>
                 <Typography>
                   {products.name}
                 </Typography>
               </CardContent>
             </CardActionArea>
             </NextLink>
             <CardActions>
               <Typography>${products.price}</Typography>
               <Button size="small" color="primary">
                 Add to cart
               </Button>
             </CardActions>
           </Card>
         </Grid>
       ))}
     </Grid>
    </div>
    </Layout>
    
  )
}
