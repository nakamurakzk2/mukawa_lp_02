# Mukawa LP 02

むかわ町ASUKAチーズのランディングページ（静的HTML版）

## 概要
北海道むかわ町のASUKAチーズのホールチーズ販売ランディングページです。
React/Tailwindから静的HTML/CSS/JSに変換されています。

## ファイル構成
- `index.html` - メインHTMLファイル
- `main.css` - カスタムスタイル
- `main.js` - インタラクティブ機能（Lenis、スクロールアニメーション）
- `images/` - 画像ディレクトリ

## 使用技術
- HTML5
- CSS3
- JavaScript (Vanilla)
- Tailwind CSS (Play CDN)
- Lenis (スムーススクロール)

## ローカルでの表示方法
`index.html`をブラウザで直接開くか、簡易サーバーで起動してください。

```bash
# Python 3の場合
python3 -m http.server 8000

# Node.jsの場合
npx serve
```

## 特徴
- スムーススクロール（Lenis）
- スクロール連動アニメーション
- レスポンシブデザイン
- Sticky Story セクション（画像切り替え）
