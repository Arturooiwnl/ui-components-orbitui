import os
import json

default_path_button_component = "./src/components/ui/avatar/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id'].capitalize()}.astro"
    for comp in [
    {
        "id": "dot-online-1-simple",
        "title": "Dot - Online 1",
        "component": "DotOnline1Simple",
        "link": "/avatars/dot-online-1-simple"
    },
    {
        "id": "dot-online-2-pulse",
        "title": "Dot - Online 2",
        "component": "DotOnline2Pulse",
        "link": "/avatars/dot-online-2-pulse"
    },
    {
        "id": "avatar-tech-1",
        "title": "Tech 1",
        "component": "AvatarTech1",
        "link": "/avatars/avatar-tech-1"
    },
    {
        "id": "avatar-basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/avatars/avatar-basic-1"
    },
    ]
}

avatarsBlocks = [
    {
        "id": "dot-online-1-simple",
        "title": "Dot - Online 1",
        "component": "DotOnline1Simple",
        "link": "/avatars/dot-online-1-simple"
    },
    {
        "id": "dot-online-2-pulse",
        "title": "Dot - Online 2",
        "component": "DotOnline2Pulse",
        "link": "/avatars/dot-online-2-pulse"
    },
    {
        "id": "avatar-tech-1",
        "title": "Tech 1",
        "component": "AvatarTech1",
        "link": "/avatars/avatar-tech-1"
    },
    {
        "id": "avatar-basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/avatars/avatar-basic-1"
    },
]

output_data = []

for comp in avatarsBlocks:
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

output_ts_path = "avatarsData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")
    f.write("export const avatarsData = ")
    f.write(json.dumps(output_data, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"succes: {output_ts_path}")