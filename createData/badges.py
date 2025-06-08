import os
import json

default_path_button_component = "./src/components/ui/badge/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id'].capitalize()}.astro"
    for comp in [
    {
        "id": "basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/badges/basic-1"
    },
    {
        "id": "basic-2-hover",
        "title": "Basic 2 - Hover",
        "component": "Basic2Hover",
        "link": "/badges/basic-2-hover"
    },
    {
        "id": "ia-1",
        "title": "IA 1",
        "component": "Ia1",
        "link": "/badges/ia-1"
    },
    {
        "id": "admin-1-shield",
        "title": "Admin 1",
        "component": "Admin1Shield",
        "link": "/badges/admin-1-shield"
    },
    {
        "id": "plan-1-free",
        "title": "Plan 1 - Free",
        "component": "Plan1Free",
        "link": "/badges/plan-1-free"
    },
    {
        "id": "plan-2-pro",
        "title": "Plan 2 - Pro",
        "component": "Plan2Pro",
        "link": "/badges/plan-2-pro"
    },
    {
        "id": "plan-3-blocked",
        "title": "Plan 3 - Blocked",
        "component": "Plan3Blocked",
        "link": "/badges/plan-3-blocked"
    },
    {
        "id": "plan-4-temporal",
        "title": "Plan 4 - Temporal",
        "component": "Plan4Temporal",
        "link": "/badges/plan-4-temporal"
    },
    {
        "id": "night-mode-1",
        "title": "Night Mode 1",
        "component": "NightMode1",
        "link": "/badges/night-mode-1"
    },
    ]
}

badges_blocks = [
    {
        "id": "basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/badges/basic-1"
    },
    {
        "id": "basic-2-hover",
        "title": "Basic 2 - Hover",
        "component": "Basic2Hover",
        "link": "/badges/basic-2-hover"
    },
    {
        "id": "ia-1",
        "title": "IA 1",
        "component": "Ia1",
        "link": "/badges/ia-1"
    },
    {
        "id": "admin-1-shield",
        "title": "Admin 1",
        "component": "Admin1Shield",
        "link": "/badges/admin-1-shield"
    },
    {
        "id": "plan-1-free",
        "title": "Plan 1 - Free",
        "component": "Plan1Free",
        "link": "/badges/plan-1-free"
    },
    {
        "id": "plan-2-pro",
        "title": "Plan 2 - Pro",
        "component": "Plan2Pro",
        "link": "/badges/plan-2-pro"
    },
    {
        "id": "plan-3-blocked",
        "title": "Plan 3 - Blocked",
        "component": "Plan3Blocked",
        "link": "/badges/plan-3-blocked"
    },
    {
        "id": "plan-4-temporal",
        "title": "Plan 4 - Temporal",
        "component": "Plan4Temporal",
        "link": "/badges/plan-4-temporal"
    },
    {
        "id": "night-mode-1",
        "title": "Night Mode 1",
        "component": "NightMode1",
        "link": "/badges/night-mode-1"
    },
]

output_data = []

for comp in badges_blocks:
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

output_ts_path = "badgesData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")
    f.write("export const badgesData = ")
    f.write(json.dumps(output_data, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"succes: {output_ts_path}")