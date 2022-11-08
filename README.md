# 隨機密碼產生器

## 介紹

此專案可以依照瀏覽者需求製作隨機的密碼。

### 功能

- 建立4～16位數的密碼
- 密碼可由大小寫英文、數字以及符號組成
- 可以依照使用者的選擇條件產生一組隨機密碼
- 可以輸入想排除在外的特定字母、數字以及符號，使隨機密碼不會出現
- 想排除的字符若有重複會再產生密碼後將其自動替除
- 產生密碼後不會清除使用者先前資料

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，繼續輸入：

   ```bash
   npm run start
   ```

5. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

6. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 18.12.0
- Express 4.18.2
- Express-Handlebars 6.0.6
- Bootstrap 5.2.2
- Font-awesome 5.6.3
