# clean up Pods cache
pwd
rm -rf ~/Library/Caches/CocoaPods
rm -rf ~/Library/Developer/Xcode/DerivedData/*

# clean and re-install pod
cd ios
rm -rf Pods
pod deintegrate
pod setup
pod install