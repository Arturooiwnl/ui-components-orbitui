import os
import json

default_path_button_component = "./src/components/ui/button/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id'].capitalize()}.astro"
    for comp in [
        {
            "id": "defaults",
            "title": "Default",
            "component": "Defaults",
            "link": "/buttons/default"
        },
        {
            "id": "basic-1",
            "title": "Basic 1",
            "component": "Basic1",
            "link": "/buttons/basic-1"
        },
        {
            "id": "basic-2",
            "title": "Basic 2",
            "component": "Basic2",
            "link": "/buttons/basic-2"
        },
        {
            "id": "neoBrutalist-1",
            "title": "Neo Brutalist 1",
            "component": "NeoBrutalist1",
            "link": "/buttons/neoBrutalist-1"
        },
        {
            "id": "retro-1",
            "title": "Retro 1",
            "component": "Retro1",
            "link": "/buttons/retro-1"
        },
        {
            "id": "modern-1",
            "title": "Modern 1",
            "component": "Modern1",
            "link": "/buttons/modern-1"
        },
        {
            "id": "tech-1",
            "title": "Tech 1",
            "component": "Tech1",
            "link": "/buttons/tech-1"
        },
        {
            "id": "ia-1-glowing",
            "title": "IA 1 - Glowing",
            "component": "IA1",
            "link": "/buttons/ia-1-glowing"
        },
        {
            "id": "ia-2-simple",
            "title": "IA 2 - Simple",
            "component": "IA2",
            "link": "/buttons/ia-2-simple"
        },
        {
            "id": "minimal-1",
            "title": "Minimal 1",
            "component": "Minimal1",
            "link": "/buttons/minimal-1"
        }
    ]
}

buttonsBlocks = [
    {
        "id": "defaults",
        "title": "Default",
        "component": "Defaults",
        "link": "/buttons/default"
    },
    {
        "id": "basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/buttons/basic-1"
    },
    {
        "id": "basic-2",
        "title": "Basic 2",
        "component": "Basic2",
        "link": "/buttons/basic-2"
    },
    {
        "id": "neoBrutalist-1",
        "title": "Neo Brutalist 1",
        "component": "NeoBrutalist1",
        "link": "/buttons/neoBrutalist-1"
    },
    {
        "id": "retro-1",
        "title": "Retro 1",
        "component": "Retro1",
        "link": "/buttons/retro-1"
    },
    {
        "id": "modern-1",
        "title": "Modern 1",
        "component": "Modern1",
        "link": "/buttons/modern-1"
    },
    {
        "id": "tech-1",
        "title": "Tech 1",
        "component": "Tech1",
        "link": "/buttons/tech-1"
    },
    {
        "id": "ia-1-glowing",
        "title": "IA 1 - Glowing",
        "component": "IA1",
        "link": "/buttons/ia-1-glowing"
    },
    {
        "id": "ia-2-simple",
        "title": "IA 2 - Simple",
        "component": "IA2",
        "link": "/buttons/ia-2-simple"
    },
    {
        "id": "minimal-1",
        "title": "Minimal 1",
        "component": "Minimal1",
        "link": "/buttons/minimal-1"
    }
]

output_data = []

for comp in buttonsBlocks:
    comp_id = comp["id"]
    filepath = component_file_map.get(comp_id)

    if not filepath or not os.path.exists(filepath):
        print(f"⚠️  Archivo no encontrado para {comp_id}")
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

output_ts_path = "componentsData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")
    f.write("export const componentsData = ")
    f.write(json.dumps(output_data, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"succes: {output_ts_path}")