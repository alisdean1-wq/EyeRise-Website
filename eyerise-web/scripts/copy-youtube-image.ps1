# Replace public/Youtube.png with the YouTube screenshot from Cursor assets (Late Night Study card).
# Run from repo root: .\eyerise-web\scripts\copy-youtube-image.ps1

$src = "C:\Users\David Ting\.cursor\projects\c-Users-David-Ting-EyeRise\assets\c__Users_David_Ting_AppData_Roaming_Cursor_User_workspaceStorage_0717e026ae95dea8d2a279f9be3bb0c8_images_Screenshot_2026-01-24_164857-e2d8a36d-4bb0-4e6d-bf46-32ab4b265cc8.png"
$dest = Join-Path $PSScriptRoot "..\public\Youtube.png"

if (-not (Test-Path $src)) {
  Write-Error "Source image not found: $src"
  exit 1
}
Copy-Item -LiteralPath $src -Destination $dest -Force
Write-Host "Copied YouTube screenshot to public/Youtube.png (Late Night Study card)"
