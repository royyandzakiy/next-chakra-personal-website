# Chakra UI Tutorial

Did a quick implementation, learning from this video below

[Chakra UI + Next JS Quickstart - Build A Personal Website And Blog (1 of 2)](https://www.youtube.com/watch?v=lhOvI9s5gQY)
[Chakra UI + Next JS Quickstart - Build A Personal Website And Blog (2 of 2)](https://www.youtube.com/watch?v=G6_qqMrfTQg)

## Key Takeaways:
- setup environment chakra-ui:
    - `_app.js`
        - <ChakraProvider resetCSS theme={customTheme}>: untuk setup theme yang sudah dibuat
        - <ColorModeProvider>: untuk kasih hook useColorMode()
        - <GlobalStyles>: untuk setup style utama untuk semua web. disini di setup juga style untuk `html` dan `__next`
    - `_document.js`
- `index.js`
- `container.js`

## What I have learned:
- konsep `_app.js` dan `_document.js` = sebagai fondasi dari nextjs. chakra-ui mengakses file-file ini sehingga perlu di edit agar jadi global style
- `chakra-ui` = cara setup environmentnya di project nextjs dan cara menambahkannya ke components. juga menambahkan colorMode yang memberikan logic ke in-component css.
- inline css with `/*CSS stuff here*/` = juga belajar tentang inline css yang bisa ditambahkan langsung ke kode
- `index.js` = belajar bahwa ini merupakan page utama yang digunakan sebagai template oleh page lain yang mengisi
- `container.js` = belajar menggunakan sebuah wrapper atau container component yang berisi template page yang akan digunakan oleh page lain yang mengisi

### `theme.js`
- structure:
    ```
        import { extendTheme, theme as ChakraTheme }
        import { createBreakpoints } berbda (HP, tablet, laptop, pc)

        const fonts = {
            ...ChakraTheme, // digunakan untuk narik dulu yang udah dipake di Chakra apa aja, baru di override dibawahnya
            body: ...,
            heading: ...,
        }

        // digunakan untuk tetapkan default size untuk standard ukuran 
        const breakpoints = createBreakpoints({
            sm: "...",
            md: "...",
            ...
        })

        // masukkan semua yang sudah dibuat kemari
        const overrides = {
            ...ChakraTheme, // digunakan untuk narik dulu yang udah dipake di Chakra apa aja, baru di override dibawahnya
            fonts
            breakpoints,
            fontWeights: {
                // sejujurnya aku gatau kenapa fontWeights ini gak dibikin const kayak sebelumnya. kalau beda barangkali karena gaada standardnya? entah deh
                ...
            },
            fontSizes: {
                ...
            },
        }

        const customTheme = extendTheme(overrides);

        export default customTheme; // digunakan sebagai theme={customTheme} di <ChakraProvider theme={customTheme} ...>
    ```
- `extendTheme` = digunakan untuk override theme yang sudah ada dan bikin customTheme
- `...ChakraTheme` = digunakan untuk menarik settingan default yang sudah ada

### `_app.js`
- `<Component {...pageProps} />` = adalah isian wajib yang perlu ada di _app.js. fungsinya sebagai komponen diisi sebagai isian dari SEMUA page yang dibuka
- ...pageProps = adalah pageProps APAPUn dari SEMUA page yang dibuka. wajib ada.

### `chakra ui`
- `ChakraProvider` = untuk ngatur theme. perlu dipasang di awal di `_app.js`. perannya mirip seperti kita yang biasa import `.CSS` sebagai global styles, tapi ini jadi pembungkus untuk `.CSS` dari `chakra-ui`
- `ColorModeProvider` = untuk ngatur mode color. kayaknya ini yang memungkinkan hook `useColorMode()`. jadinya bisa ngatur light atau dark ke keseluruhan web
- `customTheme = extendTheme(overrides)`: bisa menambahkan perubahan dari tema yang sudah ada, dengan ditambah `...ChakraTheme, ` agar sebelumnya dimasukkan dulu tema yang sudah ada, baru dikasih perubahan

### `_document.js`
- `_document.js` = adalah file yang perlu dibuat kalau mau override tags berikut: `<Html>`, `<Head />`, `<Main />` and `<NextScript />` are required for the page to be properly rendered.
    - Document is only rendered in the server, event handlers like `onClick` won't work.
    - custom styling jangan dilakukan disini, lakukan di `_app.js`

### Container.js
- `useColorMode()` = sebuah react hook yang bisa dipake utk switch antara variable 'light' atau 'dark'
- `StickyNav = styled(Flex)\` CSS stuff in here \`` = adalah cara membuat komponen secara cepat dan bisa memasukkan juga custom CSS kedalamnya
- `children` = adalah semua hal yang dimasukkan didalam tag, yaitu `<Container>` "children" `</Container>`