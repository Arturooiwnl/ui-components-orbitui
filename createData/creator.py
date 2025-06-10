import os

from alerts import alerts_blocks # -
from avatars import avatars_blocks # -
from badges import badges_blocks # -
from buttons import buttons_blocks # - 
from cards import cards_blocks # - 
from inputs import inputs_blocks # -

component_name_file = "avatar"

blocks = avatars_blocks

component_import_path = f"@/components/ui/{component_name_file}/blocks/snippets"
default_path_button_component = f"./src/components/ui/{component_name_file}/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id']}.astro"
    for comp in blocks
}

output_data = []

for comp in blocks:
    comp_id = comp["id"]
    component_name = comp["component"]
    filepath = component_file_map.get(comp_id)

    if not filepath or not os.path.exists(filepath):
        print(f"no find: {comp_id}")
        continue

    ext = os.path.splitext(filepath)[1].replace(".", "") #astro

    with open(filepath, "r", encoding="utf-8") as f:
        source_code = f.read()

    output_data.append({
        "id": comp_id,
        "title": comp["title"],
        "lang": ext,
        "component": component_name, 
        "code": source_code
    })

output_ts_path = f"./src/data/{component_name_file}sBlocksData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")

    for comp in output_data:
        f.write(f"import {comp['component']} from '{component_import_path}/{comp['id'].capitalize()}.astro'\n")
    
    f.write(f"\nexport const {component_name_file}sBlocksData  = [\n")

    for comp in output_data:
        f.write("  {\n")
        f.write(f"    id: '{comp['id']}',\n")
        f.write(f"    title: '{comp['title']}',\n")
        f.write(f"    lang: '{comp['lang']}',\n")
        f.write(f"    component: {comp['component']},\n")  
        code_escaped = comp['code'].replace("`", "\\`")
        f.write(f"    code: `{code_escaped}`\n")
        f.write("  },\n")
    
    f.write("];\n")

print(f"success: {output_ts_path}")
