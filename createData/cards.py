import os
import json

cards_blocks = [
    {
        "id": "default-1",
        "title": "Default",
        "component": "Default1",
        "link": "/cards/default-1"
    },
    {
        "id": "card-1-glass",
        "title": "Glass",
        "component": "CardGlass1",
        "link": "/cards/card-1-glass"
    },
    {
        "id": "card-neobrutalist-1",
        "title": "Neobrutalist",
        "component": "CardNeobrutalist1",
        "link": "/cards/card-neobrutalist-1"
    },
    {
        "id": "retro-1",
        "title": "Retro",
        "component": "Retro1",
        "link": "/cards/retro-1"
    },
    {
        "id": "elegant-1-dark",
        "title": "Elegant Dark",
        "component": "ElegantDark1",
        "link": "/cards/elegant-dark-1"
    },
    {
        "id": "card-tech-1",
        "title": "Tech",
        "component": "CardTech1",
        "link": "/cards/card-tech-1"
    }
]


default_path_button_component = "./src/components/ui/card/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id'].capitalize()}.astro"
    for comp in cards_blocks
}

output_data = []

for comp in cards_blocks:
    comp_id = comp["id"]
    filepath = component_file_map.get(comp_id)

    if not filepath or not os.path.exists(filepath):
        print(f"no find: {comp_id}")
        continue

    ext = os.path.splitext(filepath)[1].replace(".", "") #.astro

    with open(filepath, "r", encoding="utf-8") as f:
        source_code = f.read()

    output_data.append({
        "id": comp_id,
        "title": comp["title"],
        "lang": ext,
        "code": source_code
    })

output_ts_path = "cardsData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")
    f.write("export const cardsData = ")
    f.write(json.dumps(output_data, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"succes: {output_ts_path}")