# dockit-frontend
Frontend project for Dockit

### Scripts
- link-assets: links the assets folder to the build, necessary if you add anything to this folder
- lint: check the linting
- lint-fix: automatically fixes any linting issues

### Loading fonts
1. import your fonts you need
```
import {
  useFonts,
  FiraSans_100Thin,
  FiraSans_100Thin_Italic,
  FiraSans_200ExtraLight,
  FiraSans_200ExtraLight_Italic,
  FiraSans_300Light,
  FiraSans_300Light_Italic,
  FiraSans_400Regular,
  FiraSans_400Regular_Italic,
  FiraSans_500Medium,
  FiraSans_500Medium_Italic,
  FiraSans_600SemiBold,
  FiraSans_600SemiBold_Italic,
  FiraSans_700Bold,
  FiraSans_700Bold_Italic,
  FiraSans_800ExtraBold,
  FiraSans_800ExtraBold_Italic,
  FiraSans_900Black,
  FiraSans_900Black_Italic,
} from '@expo-google-fonts/fira-sans';
```

2. use the useFonts hook on the imported fonts
```
let [fontsLoaded] = useFonts({
    FiraSans_100Thin,
    FiraSans_100Thin_Italic,
    FiraSans_200ExtraLight,
    FiraSans_200ExtraLight_Italic,
    FiraSans_300Light,
    FiraSans_300Light_Italic,
    FiraSans_400Regular,
    FiraSans_400Regular_Italic,
    FiraSans_500Medium,
    FiraSans_500Medium_Italic,
    FiraSans_600SemiBold,
    FiraSans_600SemiBold_Italic,
    FiraSans_700Bold,
    FiraSans_700Bold_Italic,
    FiraSans_800ExtraBold,
    FiraSans_800ExtraBold_Italic,
    FiraSans_900Black,
    FiraSans_900Black_Italic,
  });
```

3. check if fonts loaded status is true
 ```
	if (!fontsLoaded) {
    return <Text>Loading</Text>;
  } else {
    return (
			<Text style={{ fontFamily: 'FiraSans_900Black' }}>
				Font!
			</Text>
		) 
	}
 ```

### Adding and using color constants
1. add color to the colors.js file
```
const colors = {
	'dockitWhite':  '#FBFBFB',
	'dockitBlack':'#040F16',
	'dockitNavy': '#0B4F6C',
	'dockitRed': '#BB0C09',
	'dockitBlue': '#038AFF',
	'dockitGrey': '#C6C6C6',
}
```

2. import the colors object
```
import colors from './constants/colors';
```

3. access the colors object and pick the color you need
```
container: {
	backgroundColor: colors.dockitWhite,
},
```