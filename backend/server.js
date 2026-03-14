const express = require('express');
const cors = require('cors');
const axios = require('axios'); 
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/users/search', async (req, res) => {
  const searchQuery = req.query.q;

  if (!searchQuery) {
    return res.json({ data: [] });
  }

  // Cấu hình gọi sang RapidAPI
  const options = {
    method: 'GET',
    url: 'https://tiktok-api23.p.rapidapi.com/api/search/account',
    params: {
      keyword: searchQuery, 
      cursor: '0',
      search_id: '0'
    },
    headers: {
      'x-rapidapi-key': process.env.RAPIDAPI_KEY,
      'x-rapidapi-host': 'tiktok-api23.p.rapidapi.com'
    }
  };

  try {
    // Gọi sang TikTok API
    const response = await axios.request(options);
    
    // Trả cục dữ liệu thật đó về lại cho React
    // Lưu ý: response.data là toàn bộ kết quả, bạn có thể console.log ra để xem
    const users = response.data.user_list.slice(0, 5)
    res.json({ data: users }); 
    // console.log("Dữ liệu nhận được từ RapidAPI:", response.data);
    
  } catch (error) {
    console.error("Lỗi khi gọi RapidAPI:", error);
    res.status(500).json({ error: "Có lỗi xảy ra" });
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
