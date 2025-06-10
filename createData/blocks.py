import os

full_blocks = [
    {
        "id": "auth-1-signin",
        "title": "Auth 1 - Sign In",
        "component": "Auth1SignIn",
    },
    {
        "id": "auth-1-signup",
        "title": "Auth 1 - Sign Up",
        "component": "Auth1SignUp",
    },
    {
        "id": "billed-card-1",
        "title": "Billed 1 - Card",
        "component": "Billed1Card",
    },
]

component_import_path = "@/components/ui/blocks/snippets"
default_path_button_component = "./src/components/ui/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id']}.astro"
    for comp in full_blocks
}

output_data = []

for comp in full_blocks:
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

output_ts_path = "./src/data/fullBlocksData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")

    for comp in output_data:
        f.write(f"import {comp['component']} from '{component_import_path}/{comp['id'].capitalize()}.astro'\n")
    
    f.write("\nexport const fullBlocksData = [\n")

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
