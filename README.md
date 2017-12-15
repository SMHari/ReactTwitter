# ReactTwitter
Author :Hariharan S
____________________
mail to: s.hariharancs@gmail.com
----------------------------------


Hello Everyone Guys!!!

These are the steps that I followed to complete the React Native Frontend Twitter clone(HPDF - Task 1)
1)First set up your developement environment(refer React Native Documentation)
2)Then Follow the steps that I have done to make my app running

a)Create your project

	react-native init <ProjectName>

In my case|| react native init ReactTwitter

b)Change Directory to your project

	cd <ProjectName>

|| cd ReactTwitter

c)Install all dependencies(Here We gonna use navigation drawer,vector icons and native base)

hence the codes are as Follows

	
	npm install native-base --save

	npm install react-navigation --save

	npm install @expo/vector-icons --save

d)Then link all the dependencies to the project(link each individually and run those above commands in administrator)

	react-native link

e)now startup Your Emulator

f)Perform the following command to run the app in the emulator(emulator must be running)

	react-native run-android

The projects startup and runs automatically in your emulator..
You can also add the native-base-theme to add features....

If error occurs try resetting the cache by following command..

		
	npm start -- --reset-cache

note : While uploading to github node_modules will not get uploaded however while initialising your project it gets created automatically..

Disclaimer: Above step is one of the step to create projects via React Native..Another step is via CRNA(create-react-native-app)
--------------------------------------------------------------------
If doubts feel free to mail me....
Author : Hariharan S
mail me: s.hariharancs@gmail.com
---------------------------------------------------------------------



















