# Replace public/productivity.png with the Einstein tongue portrait for the Productivity card.
# Run from repo root: .\eyerise-web\scripts\copy-productivity-image.ps1

$src = "C:\Users\David Ting\.cursor\projects\c-Users-David-Ting-EyeRise\assets\c__Users_David_Ting_AppData_Roaming_Cursor_User_workspaceStorage_0717e026ae95dea8d2a279f9be3bb0c8_images_Screenshot_2026-01-24_164949-131b12f2-f205-49cb-9a52-6bde3b8e258a.png"
$dest = Join-Path $PSScriptRoot "..\public\productivity.png"

if (-not (Test-Path $src)) {
  Write-Error "Source image not found: $src"
  exit 1
}
Copy-Item -LiteralPath $src -Destination $dest -Force
Write-Host "Copied Einstein portrait to public/productivity.png (Productivity card)"
