#!/usr/bin/env python3
"""
Remove white background from EyeRise logo, preserving yellow rays and all logo details.
Output: PNG with transparent background.

Usage: pip install rembg pillow && python remove-logo-background.py
"""

from pathlib import Path

from rembg import remove
from PIL import Image

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = SCRIPT_DIR.parent

SOURCE = Path(
    r"C:\Users\David Ting\.cursor\projects\c-Users-David-Ting-EyeRise\assets"
    r"\c__Users_David_Ting_AppData_Roaming_Cursor_User_workspaceStorage_0717e026ae95dea8d2a279f9be3bb0c8_images_image-6b6d5247-3e71-4ef8-a7e1-b042b027bf59.png"
)
DEST = PROJECT_ROOT / "public" / "eyerise-logo-notext.png"


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Source image not found: {SOURCE}")

    print(f"Reading: {SOURCE}")
    input_img = Image.open(SOURCE)

    print("Removing background (preserving logo details)...")
    output_img = remove(input_img)

    DEST.parent.mkdir(parents=True, exist_ok=True)
    output_img.save(DEST)
    print(f"Saved: {DEST}")


if __name__ == "__main__":
    main()
