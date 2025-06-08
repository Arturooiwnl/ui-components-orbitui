// AUTO-GENERATED FILE. DO NOT EDIT.

export const componentsDataInputs = [
  {
    "id": "basic-1",
    "title": "Basic 1",
    "lang": "astro",
    "code": "---\nimport { Input } from \"@/components/ui/input\";\n---\n\n<Input\n    class=\"w-full bg-slate-800 text-white border border-slate-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 transition\"\n    type=\"email\"\n    name=\"email\"\n    id=\"email\"\n    placeholder=name@company.com\n    required\n/>"
  },
  {
    "id": "ia-1-glowing",
    "title": "IA 1 - Glowing",
    "lang": "astro",
    "code": "---\nimport { Input } from \"@/components/ui/input\";\n\n---\n\n<div class=\"relative group\">\n    <div class=\"absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300\"></div>\n    <div class=\"relative\">\n        <Input\n            class=\"w-full bg-black/80 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300\"\n            type=\"email\"\n            name=\"email-tech\"\n            id=\"email-tech\"\n            placeholder=name@company.com\n            required\n        />\n        <div class=\"absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5 text-blue-400\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                <path fill-rule=\"evenodd\" d=\"M14.243 5.757a6 6 0 10-8.486 8.486l4.243 4.243 4.243-4.243a6 6 0 000-8.486zm-1.414 7.072l-2.829 2.829-2.829-2.829a4 4 0 115.657-5.657 4 4 0 010 5.657z\" clip-rule=\"evenodd\" />\n            </svg>\n        </div>\n    </div>\n    <div class=\"absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500\"></div>\n</div>"
  },
  {
    "id": "minimal-1",
    "title": "Minimal 1",
    "lang": "astro",
    "code": "---\nimport { Input } from \"@/components/ui/input\";\n\n---\n\n<Input\n    class=\" border-0 border-b-2 border-gray-300 focus:border-blue-500 rounded-none px-4 transition-all duration-300 bg-transparent text-gray-100 placeholder:text-gray-500 focus:ring-0\"\n    type=\"email\"\n    name=\"email-minimal\"\n    id=\"email-minimal\"\n    placeholder=name@company.com\n    required\n/>"
  },
  {
    "id": "retro-1",
    "title": "Retro 1",
    "lang": "astro",
    "code": "---\nimport { Input } from \"@/components/ui/input\";\n\n---\n\n<Input\n    class=\"w-full bg-black text-pink-300 border border-pink-500 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-600 transition\"\n    type=\"email\"\n    name=\"email\"\n    id=\"email\"\n    placeholder=name@company.com\n    required\n/>"
  },
  {
    "id": "rounded-1",
    "title": "Rounded 1",
    "lang": "astro",
    "code": "---\nimport { Input } from \"@/components/ui/input\";\n\n---\n\n<div class=\"relative flex justify-center\">\n    <Input\n        class=\"bg-gray-800/70 border-2 border-gray-600 rounded-full px-5 py-3 text-gray-100 placeholder:text-gray-400 focus:border-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-30 transition-all duration-300\"\n        type=\"email\"\n        name=\"email-rounded\"\n        id=\"email-rounded\"\n        placeholder=name@company.com\n        required\n    />\n    <button type=\"submit\" class=\"cursor-pointer absolute right-2 top-1.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full p-2 transition-colors duration-300\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n            <path fill-rule=\"evenodd\" d=\"M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z\" clip-rule=\"evenodd\" />\n        </svg>\n    </button>\n</div>"
  },
  {
    "id": "tech-1",
    "title": "Tech 1",
    "lang": "astro",
    "code": "---\nimport { Input } from \"@/components/ui/input\";\n\n---\n\n<div class=\"max-w-3xl border border-cyan-500 rounded-xl bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] p-6 shadow-lg shadow-cyan-700/30 transition-transform \">\n    <header class=\"mb-3\">\n    <h3 class=\"text-xl font-extrabold text-cyan-400 tracking-tight\">Newsletter</h3>\n    <p class=\"text-sm text-slate-400\">Don't miss the latest news</p>\n    </header>\n\n    <Input\n    class=\"w-full bg-[#020617] text-cyan-200 border border-cyan-600 rounded-lg px-4 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-cyan-500 transition-all\"\n    type=\"email\"\n    name=\"email\"\n    id=\"email\"\n    placeholder=name@company.com\n    required\n    />\n</div>"
  }
];
