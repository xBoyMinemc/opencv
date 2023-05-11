
SHELL_FOLDER=$(cd "$(dirname "$0")";pwd )

echo "#############################"
echo "# Path ==> $SHELL_FOLDER"
echo "#############################"

cd $SHELL_FOLDER

npm run test