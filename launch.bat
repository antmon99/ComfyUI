@echo off
cd /d "%~dp0"
echo Starting ComfyUI...
.venv\Scripts\python.exe main.py --auto-launch
pause
