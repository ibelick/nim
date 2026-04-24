#!/bin/bash

mkdir -p app/blog

while true; do
  echo "Insert new blog post, example: Post One"
  read FILE_NAME_INPUT

  # replace space with dash symbol (-)
  FILE_NAME_INPUT_MODIFIED=$(echo "$FILE_NAME_INPUT" | tr '[:upper:]' '[:lower:]' | tr ' ' '-')

  FOLDER_PATH="app/blog/$FILE_NAME_INPUT_MODIFIED"
  FILE_NAME="$FOLDER_PATH/page.mdx"

  if [ -d "$FOLDER_PATH" ]; then
    echo -e "\033[31mA folder with the name $FOLDER_PATH already exists. Please choose a different name.\033[0m"
    echo 
  else
    mkdir -p "$FOLDER_PATH"

    echo '<Cover' > "$FILE_NAME"
    echo '  src="https://"' >> "$FILE_NAME"
    echo '  alt=""' >> "$FILE_NAME"
    echo '  caption=""' >> "$FILE_NAME"
    echo '/>' >> "$FILE_NAME"

    echo -e "✨ \033[32mSuccessfully created a new blog post"
    break  
  fi
done
