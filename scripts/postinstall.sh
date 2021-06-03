# #!/bin/zsh
echo Removing Xcode build folders
setopt localoptions rmstarsilent
rm -rf ~/Library/Developer/Xcode/DerivedData/*

echo Removing Pods
cd ios
rm -rf ~/Library/Caches/CocoaPods
rm -rf Pods
rm Podfile.lock
rm -rf ~/Library/Caches/CocoaPods

echo Fresh install Pods
arch_name="$(uname -m)"

if [ "${arch_name}" = "arm64" ]; then
  echo "Running on arm64_apple_darwin"
  # https://github.com/CocoaPods/CocoaPods/issues/10518#issuecomment-798912624
  sudo arch -x86_64 gem install ffi
  arch -x86_64 pod deintegrate
  arch -x86_64 pod setup
  arch -x86_64 pod install
else
  # [ "${arch_name}" = "x86_64" ]
  if [ "$(sysctl -in sysctl.proc_translated)" = "1" ]; then
    echo "Running on Rosetta 2"
  else
    echo "Running on native Intel"
  else
    echo "Unknown architecture: ${arch_name}"
  fi 
  pod deintegrate
  pod setup
  pod install
fi

# known issues for Push Notification for iOS
# https://github.com/react-native-push-notification-ios/push-notification-ios/issues/150

# known issues for arm64
# https://stackoverflow.com/questions/66369650/undefined-symbol-protocol-descriptor-for-swift-expressiblebyfloatliteral-issu
