import os
import json

default_path_button_component = "./src/components/ui/alert/blocks/snippets/"

component_file_map = {
    comp["id"]: f"{default_path_button_component}{comp['id'].capitalize()}.astro"
    for comp in [
        {
            "id": "basic-1",
            "title": "Basic 1",
            "component": "Basic1",
            "link": "/alerts/basic-1"
        },
        {
            "id": "alert-ia-1",
            "title": "IA Alert 1",
            "component": "Ia1",
            "link": "/alerts/alert-ia-1"
        },
        {
            "id": "warning-1",
            "title": "Warning 1",
            "component": "Warning1",
            "link": "/alerts/warning-1"
        },
        {
            "id": "danger-1",
            "title": "Danger 1",
            "component": "Danger1",
            "link": "/alerts/danger-1"
        },
        {
            "id": "success-1",
            "title": "Success 1",
            "component": "Success1",
            "link": "/alerts/success-1"
        },
        {
            "id": "info-1",
            "title": "Info 1",
            "component": "Info1",
            "link": "/alerts/info-1"
        },
        {
            "id": "experimental-1",
            "title": "Experimental 1",
            "component": "Experimental1",
            "link": "/alerts/experimental-1"
        },
    ]
}

buttonsBlocks = [
    {
        "id": "basic-1",
        "title": "Basic 1",
        "component": "Basic1",
        "link": "/alerts/basic-1"
    },
    {
        "id": "alert-ia-1",
        "title": "IA Alert 1",
        "component": "Ia1",
        "link": "/alerts/alert-ia-1"
    },
    {
        "id": "warning-1",
        "title": "Warning 1",
        "component": "Warning1",
        "link": "/alerts/warning-1"
    },
    {
        "id": "danger-1",
        "title": "Danger 1",
        "component": "Danger1",
        "link": "/alerts/danger-1"
    },
    {
        "id": "success-1",
        "title": "Success 1",
        "component": "Success1",
        "link": "/alerts/success-1"
    },
    {
        "id": "info-1",
        "title": "Info 1",
        "component": "Info1",
        "link": "/alerts/info-1"
    },
    {
        "id": "experimental-1",
        "title": "Experimental 1",
        "component": "Experimental1",
        "link": "/alerts/experimental-1"
    }
]

output_data = []

for comp in buttonsBlocks:
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

output_ts_path = "alertsData.ts"

with open(output_ts_path, "w", encoding="utf-8") as f:
    f.write("// AUTO-GENERATED FILE. DO NOT EDIT.\n\n")
    f.write("export const alertsData = ")
    f.write(json.dumps(output_data, indent=2, ensure_ascii=False))
    f.write(";\n")

print(f"succes: {output_ts_path}")