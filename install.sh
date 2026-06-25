#!/bin/bash

EXTENSION_PATH="$HOME/.local/share/gnome-shell/extensions/fusion-gnome-extension@napNsleep"

mkdir -p "$EXTENSION_PATH"
cp extension.js metadata.json "$EXTENSION_PATH"

gnome-extensions enable fusion-gnome-extension@napNsleep
