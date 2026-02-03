# Music Artwork Images

このフォルダにMusicページで表示するアートワーク画像を配置してください。

## 画像の配置方法

1. このフォルダ（`public/music/`）に画像ファイルを配置します
2. ファイル名は `src/data/music.js` の `artwork` フィールドで指定した名前と一致させる必要があります

## 現在の設定

- `noisy.jpg` - Noisy by Johya
- `trust.jpg` - TRUST by Johya
- `runnin.jpg` - Runnin by Johya

## 画像形式

- 推奨形式: JPG, PNG, WebP
- 推奨サイズ: 正方形（例: 1000x1000px）
- ファイルサイズ: できるだけ軽量化してください（1MB以下推奨）

## 新しい作品を追加する場合

1. `src/data/music.js` に新しい作品データを追加
2. このフォルダに画像ファイルを配置
3. `artwork` フィールドに `/music/画像ファイル名` を指定

例:
```javascript
{
  id: 4,
  slug: "new-track",
  category: "Beatmake",
  title: "New Track",
  artist: "Artist Name",
  artwork: "/music/new-track.jpg",  // ← ここで画像パスを指定
  description: "Description here",
}
```
