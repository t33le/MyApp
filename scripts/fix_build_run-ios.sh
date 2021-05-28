# happen when using cocoapods for different project

# clean up Pods cache
rm -rf ~/Library/Caches/CocoaPods
echo y | rm -rf ~/Library/Developer/Xcode/DerivedData/*

# clean and re-install pods
cd ios
rm -rf Pods
pod deintegrate
pod setup
pod install