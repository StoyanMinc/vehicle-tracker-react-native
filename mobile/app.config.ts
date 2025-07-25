import 'dotenv/config';

export default {
  expo: {
    name: 'hicloud-tracker',
    slug: 'hicloud-tracker',
    extra: {
      apiUrl: process.env.API_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
};