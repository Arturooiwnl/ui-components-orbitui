import os
import json

default_path_button_component = "./src/components/ui/input/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id'].capitalize()}.astro"
    for comp in [
        {   "id":"basic-1",
            "title": "Basic 1",
            "component": "Basic1",
            "link": "/inputs/basic-1"
        },
        {   
            "id":"ia-1-glowing",
            "title": "IA 1 - Glowing",
            "component": "Glowing1",
            "link": "/inputs/ia-1-glowing"
        },
        {   
            "id":"minimal-1",
            "title": "Minimal 1",
            "component": "Minimal1",
            "link": "/inputs/minimal-1"
        },
        {   
            "id":"retro-1",
            "title": "Retro 1",
            "component": "Retro1",
            "link": "/inputs/retro-1"
        },
        {   
            "id":"rounded-1",
            "title": "Rounded 1",
            "component": "Rounded1",
            "link": "/inputs/rounded-1"
        },
        {   
            "id":"tech-1",
            "title": "Tech 1",
            "component": "Tech1",
            "link": "/inputs/tech-1"
        }
    ]
}

buttonsBlocks = [
    {   
        "id":"basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/inputs/basic-1"
    },
    {   
        "id":"ia-1-glowing",
        "title": "IA 1 - Glowing",
        "component": "Glowing1",
        "link": "/inputs/ia-1-glowing"
    },
    {   
        "id":"minimal-1",
        "title": "Minimal 1",
        "component": "Minimal1",
        "link": "/inputs/minimal-1"
    },
    {   
        "id":"retro-1",
        "title": "Retro 1",
        "component": "Retro1",
        "link": "/inputs/retro-1"
    },
    {   
        "id":"rounded-1",
        "title": "Rounded 1",
        "component": "Rounded1",
        "link": "/inputs/rounded-1"
    },
    {   
        "id":"tech-1",
        "title": "Tech 1",
        "component": "Tech1",
        "link": "/inputs/tech-1"
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

output_ts_path = "componentsDataInputs.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")
    f.write("export const componentsDataInputs = ")
    f.write(json.dumps(output_data, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"succes: {output_ts_path}")