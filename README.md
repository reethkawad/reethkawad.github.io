My portfolio website

## Content updates

To refresh the extracted document text after editing the Word file, run:

```powershell
C:/Users/reeth/AppData/Local/Programs/Python/Python311/python.exe scripts/refresh_doc_text.py "../Reeth_Kawad_Master_Career_Doc_v2 (1).docx" data/doc_text.txt
```

After that, hard refresh the site in your browser. The About section reads from `data/doc_text.txt`, so changes to the short bio show up automatically after this refresh step. The project cards and experience blocks still use `data/site-data.js`, and the project thumbnails live under `assets/projects/`.
