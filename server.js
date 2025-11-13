import express from 'express';
const app = express();
const port = process.env.PORT || 8080;

// 静的ファイル配信
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
