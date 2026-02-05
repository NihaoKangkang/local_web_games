import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "index.html"

def load_game_meta(folder: Path):
    meta_path = folder / "game.json"
    if meta_path.exists():
        data = json.loads(meta_path.read_text(encoding="utf-8"))
        return {
            "title": data.get("title", folder.name),
            "subtitle": data.get("subtitle", ""),
            "cover": data.get("cover", ""),
        }
    # fallback
    return {
        "title": folder.name,
        "subtitle": "",
        "cover": "",
    }


def main():
    game_folders = []
    for p in ROOT.iterdir():
        if not p.is_dir():
            continue
        if p.name in {"assets", "scripts", "example-game", ".git"}:
            continue
        if (p / "index.html").exists():
            game_folders.append(p)

    game_folders.sort(key=lambda x: x.name)

    cards = []
    for folder in game_folders:
        meta = load_game_meta(folder)
        cover = meta["cover"] or "assets/gifs/placeholder.png"
        if cover and not cover.startswith("assets/"):
            cover = f"{folder.name}/{cover}"
        cards.append(
            f'''        <a class="card" href="{folder.name}/index.html">\n'''
            f'''          <img src="{cover}" alt="{meta['title']}" />\n'''
            f'''          <div class="card-body">\n'''
            f'''            <div class="card-title">{meta['title']}</div>\n'''
            f'''            <div class="card-desc">{meta['subtitle']}</div>\n'''
            f'''          </div>\n'''
            f'''        </a>\n'''
        )

    html = f"""<!doctype html>
<html lang=\"zh-CN\">
  <head>
    <meta charset=\"utf-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
    <title>本地网页小游戏合集</title>
    <link rel=\"stylesheet\" href=\"styles.css\" />
  </head>
  <body>
    <div class=\"page\">
      <header class=\"topbar\">
        <div class=\"brand\">
          <div class=\"logo\">LG</div>
          <div>
            <div class=\"title\">Local Web Games</div>
            <div class=\"subtitle\">单机小游戏合集 · 一键进入</div>
          </div>
        </div>
        <div class=\"actions\">
          <div class=\"hint\">选择一个游戏开始</div>
        </div>
      </header>

      <main class=\"grid\">
{''.join(cards).rstrip()}
      </main>
    </div>
  </body>
</html>
"""

    OUTPUT.write_text(html, encoding="utf-8")
    print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
    main()
