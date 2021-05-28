rm -rf ./node_modules
rm ./package-lock.json
rm -rf ./ios/Pods

npm uninstall @ihealth/ihealthlibrary-react-native

echo "Select suitable node version"

arch_name="$(uname -m)"

if [ "${arch_name}" = "arm64" ]; then
  echo "Running on M1"
  # need at least node > 15
  nvm install v15
  nvm use v15
else
  # require >= 12
  nvm install 12.18.3
  nvm use 12.18.3
fi

node -v