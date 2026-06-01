#!/bin/bash

EXTENSION_PATH="$HOME/.local/share/gnome-shell/extensions/"

mkdir -p "$EXTENSION_PATH"
mv extension.js metadata.json "$EXTENSION_PATH"
