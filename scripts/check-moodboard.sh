#!/usr/bin/env sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)

if [ -n "${MOODBOARD_DIR:-}" ]; then
  case "$MOODBOARD_DIR" in
    /*) ;;
    *) MOODBOARD_DIR="$ROOT_DIR/$MOODBOARD_DIR" ;;
  esac
elif [ -d "$ROOT_DIR/docs/moodboard" ]; then
  MOODBOARD_DIR="$ROOT_DIR/docs/moodboard"
else
  MOODBOARD_DIR="$ROOT_DIR/moodboard"
fi

if [ ! -d "$MOODBOARD_DIR" ]; then
  echo "moodboard directory not found: $MOODBOARD_DIR" >&2
  echo "checked fallback paths:" >&2
  echo "  $ROOT_DIR/docs/moodboard" >&2
  echo "  $ROOT_DIR/moodboard" >&2
  exit 1
fi

echo "[moodboard directory]"
echo "$MOODBOARD_DIR"
echo

echo "[moodboard files]"
find "$MOODBOARD_DIR" -maxdepth 2 -type f ! -name '.DS_Store' -print | sort

echo
echo "[modified times]"
find "$MOODBOARD_DIR" -maxdepth 2 -type f ! -name '.DS_Store' -print0 \
  | xargs -0 stat -f '%Sm %N' -t '%Y-%m-%d %H:%M:%S' \
  | sort

echo
echo "[sha256]"
find "$MOODBOARD_DIR" -maxdepth 2 -type f ! -name '.DS_Store' -print0 \
  | sort -z \
  | xargs -0 shasum -a 256

echo
echo "[file types]"
find "$MOODBOARD_DIR" -maxdepth 2 -type f ! -name '.DS_Store' -print0 \
  | xargs -0 file \
  | sort
