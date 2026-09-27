import re

with open('src/data/questionsPart2.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace respostaCorreta: 0 -> respostaCorreta: "A", etc.
content = re.sub(r'respostaCorreta:\s*0\b', 'respostaCorreta: "A"', content)
content = re.sub(r'respostaCorreta:\s*1\b', 'respostaCorreta: "B"', content)
content = re.sub(r'respostaCorreta:\s*2\b', 'respostaCorreta: "C"', content)
content = re.sub(r'respostaCorreta:\s*3\b', 'respostaCorreta: "D"', content)

# Convert string alternatives "A) ..." to { id: "A", texto: "..." }
def repl_alt(match):
    letter = match.group(1)
    text = match.group(2).strip()
    return f'{{ id: "{letter}", texto: "{text}" }}'

content = re.sub(r'"([A-D])\)\s*(.*?)"', repl_alt, content)

with open('src/data/questionsPart2.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully formatted questionsPart2.js")
