# #!/bin/zsh

rm -rf ~/Library/Caches/CocoaPods
echo y | rm -rf ~/Library/Developer/Xcode/DerivedData/*

cd ios
rm -rf Pods
rm Podfile.lock

arch_name="$(uname -m)"
 
if [ "${arch_name}" = "x86_64" ]; then
  if [ "$(sysctl -in sysctl.proc_translated)" = "1" ]; then
      echo "Running on Rosetta 2"
  else
      echo "Running on native Intel"
  fi 
  pod install
elif [ "${arch_name}" = "arm64" ]; then
  echo "Running on M1"
  sudo arch -x86_64 gem install ffi
  # https://github.com/CocoaPods/CocoaPods/issues/10518#issuecomment-798912624
  arch -x86_64 pod install
else
  echo "Unknown architecture: ${arch_name}"
fi

npm install --save @ihealth/ihealthlibrary-react-native