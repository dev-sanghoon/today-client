import { error } from '@sveltejs/kit';
import axios from 'axios'
 
/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
//   const post = await getPostFromDatabase(params.slug);
  async function getData() {
    try {
      const response = await axios.get('http://localhost:3000/');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  const data = await getData();
  console.log("data:", data);

  if (data) {
    return data;
  }
 
  throw error(404, 'Not found');
}