export function generateFakeCategories(length:number):Category[] {
  let data: Category[]=[];
  for (let i = 0; i < length; i++) {
    data.push({
      title: `Dress Look ${i + 1}`,
      description: 'Quilted design, inspired by the white Flory dresses.',
      price: Math.floor(Math.random() * 300) + 1,
      trending: true,
      image: 'https://honornyc.com/wp-content/uploads/2020/05/Honor_Resort2015_Look_01.jpg',
    })
  }
  return data;
}

type Category = {
  title: string;
  description: string;
  price: number;
  trending: boolean;
  image: string;
}
