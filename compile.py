import json
from jsmin import jsmin
config_file = open("config.json", "r")
config_content = config_file.read()
config = json.loads(config_content)

# write config

app_compiled = "const config =" + config_content + ";\n"

component_file = open("app.js", "r")
app_compiled += component_file.read()

for component in config['components'][::-1]:
    component_file = open("components/" + component + ".js", "r")
    app_compiled += component_file.read()




minified = False
if minified:
    app_compiled = jsmin(app_compiled)

file = open("app_compiled.js","w")
file.write(app_compiled)



