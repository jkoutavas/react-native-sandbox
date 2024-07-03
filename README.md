# react-native-sandbox

_README last updated July 3rd, 2024_

A place to try-out React Native ideas.

I'll use this sandbox for times when I want to work-out a problem in a light-weight app. I created a TypeScript based React Native v0.68.1 app with this:

```bash
npx react-native init Sandbox --template react-native-template-typescript
```

## What prompted me to start this sandbox

### May 7th, 2022

I wanted to sort-out some tsc compile errors dealing with component refs I was seeing on another app I was working on. Specifically, I worked-out here resolving `Object is possibly 'undefined'.ts(2532)`, I applied this `(null!)` solution from https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/hooks/#useref. Seems to be working pretty good.

### May 8th, 2022

I successfully incorporated wrapping React-Native-Elements' Input component with "MyTextInput" allowing me to explore how React.refForwarding works as well as adding some non sequitur rightIcon examples. You can see a screen shot of this in [PR #1's description](https://github.com/jkoutavas/react-native-sandbox/pull/1).

### May 1st, 2023

I updated the app to React Native v0.71.7 and to React Native Element v4.0.0-rc.7

I added support for handling background and foreground Google Firebase Cloud Messages. You'll note that the `google-services.json` and `GoogleService-Info.plist` files for this repo have been added to `.gitignore`. There's quite a back and forth discussion about if these files should be committed to public git repos. I chose the safe path.

### July 3rd, 2024

I updated the app to React Native v0.72.10
