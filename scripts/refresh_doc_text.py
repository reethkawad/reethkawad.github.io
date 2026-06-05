from __future__ import annotations

import argparse
import re
import sys
import zipfile
from pathlib import Path
from xml.etree import ElementTree as ET


def extract_docx_text(docx_path: Path) -> str:
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    with zipfile.ZipFile(docx_path) as archive:
      document_xml = archive.read("word/document.xml")

    root = ET.fromstring(document_xml)
    paragraphs = []
    for paragraph in root.findall(".//w:p", ns):
        texts = [node.text for node in paragraph.findall(".//w:t", ns) if node.text]
        text = "".join(texts).strip()
        if text:
            paragraphs.append(re.sub(r"\s+", " ", text))
    return "\n\n".join(paragraphs)


def main() -> int:
    parser = argparse.ArgumentParser(description="Extract plain text from a Word document.")
    parser.add_argument("docx", type=Path, help="Path to the .docx file")
    parser.add_argument("output", type=Path, help="Path to write the extracted text")
    args = parser.parse_args()

    if not args.docx.exists():
        print(f"Missing input file: {args.docx}", file=sys.stderr)
        return 1

    text = extract_docx_text(args.docx)
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(text, encoding="utf-8")
    print(f"Wrote {len(text.splitlines())} lines to {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())