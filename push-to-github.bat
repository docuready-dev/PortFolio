@echo off
set "PATH=C:\Users\pixlp\.tools\git\cmd;C:\Program Files\GitHub CLI;%PATH%"
cd /d "C:\Users\pixlp\.gemini\antigravity\scratch\spatial-portfolio"

echo ========================================================
echo  Ashley Ajoy Ghose - 3D Spatial Portfolio Git Push
echo ========================================================
echo.
echo Pushing branch 'main' to https://github.com/docuready-dev/PortFolio ...
echo.

git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo [SUCCESS] Code pushed successfully to GitHub!
    echo GitHub Actions will now build and deploy to GitHub Pages.
) else (
    echo.
    echo [AUTH REQUIRED] Please authenticate with GitHub.
    echo Running: gh auth login ...
    echo.
    gh auth login
    echo Retrying push...
    git push -u origin main
)

pause
