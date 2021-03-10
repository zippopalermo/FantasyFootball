# FantasyFootball

# asset-management

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

**AssetManagement WebClient**<br>
Simple VueJS based Webclient allowing registration to and usage of the AssetManagement Service.
<p><p/>
![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)

Table of contents
=================

<!--ts-->
   * [Service Registration](#service-registration)
<!--te-->

## **Service Registration**<br>
Upon clicking the "Registration" Button in the top right corner of the AssetManagement Webclient a registration form is presented to the User allowing him/her to provide all relevant registration information for use with the Assetmanagement Service. Once all relevant user information has been provided the "Register" button bellow the registration form can be clicked to trigger the actual registration process with the backend AssetManagement Service.

| form input field | type | required |
| ------ | ------ | ----- |
| Username | Text | yes |
| Email | Text | yes |
| Password | Text | yes |
| Password Match | Text | yes |
