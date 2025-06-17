import os

img_section_path = "/blocks/sections/"

sections_blocks =  [
        {   "id":"pricing-1",
            "title": "Princing 1",
            "component": "Princing1",
            "img": f"{img_section_path}pricing-1.png"
        },
        {   "id":"ai-chat-1",
            "title": "AI Chat 1",
            "component": "AiChat1",
            "img": f"{img_section_path}ai-chat-1.png"
        },
        {   "id":"features-1",
            "title": "Features 1",
            "component": "Features1",
            "img": f"{img_section_path}features-1.png"
        },
        {   "id":"testimonies-1",
            "title": "Testimonies 1",
            "component": "Testimonies1",
            "img": f"{img_section_path}features-1.png"
        },
    ]

component_name_file = "sections"

blocks = sections_blocks

component_import_path = f"@/components/ui/{component_name_file}/snippets"
default_path_button_component = f"./src/components/ui/{component_name_file}/snippets/"

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
        "img": comp["img"],
        "code": source_code
    })

output_ts_path = f"./src/data/{component_name_file}BlocksData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")

    for comp in output_data:
        f.write(f"import {comp['component']} from '{component_import_path}/{comp['id'].capitalize()}.astro'\n")
    
    f.write(f"\nexport const {component_name_file}BlocksData  = [\n")

    for comp in output_data:
        f.write("  {\n")
        f.write(f"    id: '{comp['id']}',\n")
        f.write(f"    title: '{comp['title']}',\n")
        f.write(f"    lang: '{comp['lang']}',\n")
        f.write(f"    img: '{comp['img']}',\n")
        f.write(f"    component: {comp['component']},\n")  
        code_escaped = comp['code'].replace("`", "\\`")
        f.write(f"    code: `{code_escaped}`\n")
        f.write("  },\n")
    
    f.write("];\n")

print(f"success: {output_ts_path}")
