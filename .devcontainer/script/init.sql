-- サンプルテーブル
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  e_mail VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- サンプルデータ
INSERT INTO users (name, e_mail) VALUES ('Taro Yamada', 'taro.yamada@localhost.com'), ('Saki Abe', 'saki.abe@localhost.com');
